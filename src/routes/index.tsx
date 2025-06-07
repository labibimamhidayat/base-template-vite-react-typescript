import { createFileRoute } from "@tanstack/react-router";

import ExampleFeatures from "@/features/exampleFeature";

export const Route = createFileRoute("/")({
  component: ExampleFeatures,
});
