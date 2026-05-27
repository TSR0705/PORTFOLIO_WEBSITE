import { GradientTracing } from "@/components/ui/gradient-tracing";

const Demo = () => (
  <GradientTracing
    width={200}
    height={200}
    path="M100,0 L75,75 L125,75 L50,200 L100,100 L50,100 L100,0"
    gradientColors={["#F1C40F", "#F1C40F", "#E67E22"]}
  />
);

export { Demo };
