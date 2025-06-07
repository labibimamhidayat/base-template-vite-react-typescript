import { http, HttpResponse } from "msw";

import example1 from "@/_tests_/_mocks/json/example_1.mock.json";
import example2 from "@/_tests_/_mocks/json/example_2.mock.json";
import example3 from "@/_tests_/_mocks/json/example_3.mock.json";

export const exampleApiHandlers = [
  http.get("/api/example1", () => {
    return HttpResponse.json(example1);
  }),
  http.get("/api/example2", () => {
    return HttpResponse.json(example2);
  }),
  http.get("/api/example3", () => {
    return HttpResponse.json(example3);
  }),
];
