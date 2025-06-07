// src/mocks/server.ts
import { setupServer } from "msw/node";

import { exampleApiHandlers } from "./handlers/example_api_mock.mock";

export const server = setupServer(...exampleApiHandlers);
