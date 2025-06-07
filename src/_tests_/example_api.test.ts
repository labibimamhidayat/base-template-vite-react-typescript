import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";

import { server } from "@/_tests_/_mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

async function fetchApi(path: string) {
  const response = await fetch(path);
  return await response.json();
}

describe("Example API Mock Tests", () => {
  it("should return data from /api/example1", async () => {
    const data = await fetchApi("/api/example1");
    expect(data).toBeDefined();
    expect(Array.isArray(data) || typeof data === "object").toBeTruthy();
  });

  it("should return data from /api/example2", async () => {
    const data = await fetchApi("/api/example2");
    expect(data).toBeDefined();
  });

  it("should return data from /api/example3", async () => {
    const data = await fetchApi("/api/example3");
    expect(data).toBeDefined();
  });
});
