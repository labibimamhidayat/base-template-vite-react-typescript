import { createFileRoute } from "@tanstack/react-router";

import ExampleFeatures from "@/features/exampleOneFeature";

export const Route = createFileRoute("/example-one")({
  component: ExampleFeatures,
});
