"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AchievementItem {
  quote: string;      // Description/Details of the achievement
  name: string;       // Title/Name of the achievement
  designation: string; // Award details, organization, and year
  src: string;        // Visual background image URL
}
interface Colors {
  name?: string;
  designation?: string;
  quote?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularAchievementsProps {
  achievements: AchievementItem[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

// Parses text with markdown **bold** syntax for word-by-word animation and color highlighting
function parseHighlightText(text: string) {
  const words = text.split(" ");
  const result: { text: string; isHighlighted: boolean; spaceAfter?: boolean }[] = [];
  let inHighlight = false;

  words.forEach((word) => {
    if (!word) return;

    let currentWord = word;

    if (currentWord.startsWith("**")) {
      currentWord = currentWord.slice(2);
      inHighlight = true;
    }

    if (currentWord.includes("**")) {
      const parts = currentWord.split("**");
      const before = parts[0];
      const after = parts[1] || "";

      if (before) {
        result.push({ text: before, isHighlighted: inHighlight, spaceAfter: !after });
      }
      
      inHighlight = false;

      if (after) {
        result.push({ text: after, isHighlighted: false, spaceAfter: true });
      }
    } else {
      result.push({ text: currentWord, isHighlighted: inHighlight, spaceAfter: true });
    }
  });

  return result;
}

export const CircularAchievements = ({
  achievements,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularAchievementsProps) => {
  // Color & font config
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorQuote = colors.quote ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State & Gestures
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isHovered, setIsHovered] = useState(false);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // If we only have 2 achievements, double them to 4 internally to avoid missing left/right slot layout bugs
  const displayAchievements = useMemo(() => {
    if (achievements && achievements.length === 2) {
      return [...achievements, ...achievements];
    }
    return achievements;
  }, [achievements]);

  const achievementsLength = useMemo(() => displayAchievements.length, [displayAchievements]);
  const activeAchievement = useMemo(
    () => displayAchievements[activeIndex],
    [activeIndex, displayAchievements]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay with hover pause
  useEffect(() => {
    if (autoplay && !isHovered) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % achievementsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, isHovered, achievementsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, achievementsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % achievementsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [achievementsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + achievementsLength) % achievementsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [achievementsLength]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50; // swipe offset threshold
    if (diff > swipeThreshold) {
      handleNext();
    } else if (diff < -swipeThreshold) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.7; // slightly reduced upward shift on desktop for better spacing
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + achievementsLength) % achievementsLength === index;
    const isRight = (activeIndex + 1) % achievementsLength === index;

    const isMobile = containerWidth < 640;
    const mobileScale = 0.6;
    const mobileGap = containerWidth * 0.22; // responsive narrow shift
    const mobileStickUp = mobileGap * 0.3; // smaller upward shift on mobile

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: isMobile ? 0.35 : 0.6,
        pointerEvents: "auto",
        transform: isMobile
          ? `translateX(-${mobileGap}px) translateY(-${mobileStickUp}px) scale(${mobileScale}) rotateY(10deg)`
          : `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.82) rotateY(12deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: isMobile ? 0.35 : 0.6,
        pointerEvents: "auto",
        transform: isMobile
          ? `translateX(${mobileGap}px) translateY(-${mobileStickUp}px) scale(${mobileScale}) rotateY(-10deg)`
          : `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.82) rotateY(-12deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for text content
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div 
      className="achievement-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="achievement-grid">
        {/* Images */}
        <div 
          className="image-container" 
          ref={imageContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {displayAchievements.map((achievement, index) => (
            <img
              key={`${achievement.name}-${index}`}
              src={achievement.src}
              alt={achievement.name}
              className="achievement-image"
              data-index={index}
              data-active={index === activeIndex}
              style={getImageStyle(index)}
            />
          ))}
        </div>
        {/* Content */}
        <div className="achievement-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                className="name"
                style={{ color: colorName, fontSize: fontSizeName }}
              >
                {activeAchievement.name}
              </h3>
              <p
                className="designation"
                style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
              >
                {activeAchievement.designation}
              </p>
              <motion.p
                className="quote"
                style={{ color: colorQuote, fontSize: fontSizeQuote }}
              >
                {parseHighlightText(activeAchievement.quote).map((token, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 4,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    style={{
                      display: "inline-block",
                      color: token.isHighlighted ? "#e2b857" : colorQuote,
                      fontWeight: token.isHighlighted ? "500" : "300",
                    }}
                  >
                    {token.text}{token.spaceAfter ? "\u00A0" : ""}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous achievement"
            >
              <ArrowLeft size={24} color={hoverPrev ? "#121212" : colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next achievement"
            >
              <ArrowRight size={24} color={hoverNext ? "#121212" : colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .achievement-container {
          width: 100%;
          max-width: 100%;
          padding: 0;
        }
        .achievement-grid {
          display: grid;
          gap: 3.5rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 18rem;
          perspective: 1000px;
          margin-top: 3.5rem; /* Margin spacing to avoid overlapping the heading above */
          cursor: grab;
        }
        .image-container:active {
          cursor: grabbing;
        }
        .achievement-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
          transition: transform 0.8s cubic-bezier(.4,2,.3,1), opacity 0.8s ease, border-color 0.5s ease, box-shadow 0.5s ease;
        }
        .achievement-image[data-active="true"] {
          border-color: rgba(225, 224, 204, 0.45);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5), 0 0 35px rgba(225, 224, 204, 0.18);
        }
        .achievement-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
        }
        .name {
          font-weight: 300;
          letter-spacing: 0.05em;
          margin-bottom: 0.15rem;
        }
        .designation {
          font-family: monospace;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }
        .quote {
          line-height: 1.8;
          font-weight: 300;
        }
        .arrow-buttons {
          display: flex;
          gap: 1.25rem;
          padding-top: 1.5rem;
        }
        .arrow-button {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease;
          border: 1px solid rgba(225, 224, 204, 0.15);
        }
        .arrow-button:hover {
          transform: scale(1.08);
          border-color: rgba(225, 224, 204, 0.45);
        }
        .arrow-button :global(svg) {
          transition: transform 0.2s ease;
        }
        .prev-button:hover :global(svg) {
          transform: translateX(-3px);
        }
        .next-button:hover :global(svg) {
          transform: translateX(3px);
        }
        .word {
          display: inline-block;
        }
        @media (min-width: 640px) {
          .image-container {
            height: 22rem;
            margin-top: 4.5rem;
          }
        }
        @media (min-width: 768px) {
          .achievement-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 5.5rem;
          }
          .image-container {
            height: 24rem;
            margin-top: 4.5rem;
          }
          .arrow-buttons {
            padding-top: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularAchievements;
