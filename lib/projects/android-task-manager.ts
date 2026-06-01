import { Project } from "../projects";

export const androidTaskManagerProject: Project = {
    id: "android-task-manager",
    title: "Android Task Manager App",
    slug: "android-task-manager",
    category: "Android",
    shortDescription: "A modern offline-first task manager Android app built while learning Android development, demonstrating modern app architecture, declarative UI, and local persistence.",
    fullDescription: "This was my starting point in Android development and helped me understand modern Android architecture, UI composition, state management, and local persistence.",
    techStack: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Coroutines", "Flow / StateFlow", "Material 3", "MVVM", "Clean Architecture"],
    keyFeatures: [
      "Create, edit, and manage tasks locally",
      "Store task data offline using Room",
      "Use Jetpack Compose for UI",
      "Follow MVVM + Clean Architecture principles",
      "Use Hilt for dependency injection",
      "Use reactive data flow with Flow / StateFlow"
    ],
    status: "completed",
    tags: ["Android", "Clean Architecture", "MVVM", "Product Engineering"],
    featured: false,
    year: "2024",
    projectType: "Android / Learning Project"
  };
