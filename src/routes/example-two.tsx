import { createFileRoute } from "@tanstack/react-router";

import exampleTwoFeature from "@/features/exampleTwoFeature";

export const Route = createFileRoute("/example-two")({
  component: exampleTwoFeature,
});
