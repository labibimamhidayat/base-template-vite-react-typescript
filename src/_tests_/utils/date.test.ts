import { describe, it, expect, vi, afterEach } from "vitest";

import { getDateDaysBack } from "@/utils/date";

const today = new Date("2025-03-01");

describe("getDateDaysBack", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("should return the correct date for 0 days back", () => {
    vi.setSystemTime(today); // Mock today's date to be 2025-03-01
    expect(getDateDaysBack(0)).toBe("2025-03-01");
  });

  it("should return the correct date for 1 day back", () => {
    vi.setSystemTime(today); // Mock today's date to be 2025-03-01
    expect(getDateDaysBack(1)).toBe("2025-02-28");
  });

  it("should return the correct date for 4 day back", () => {
    vi.setSystemTime(today); // Mock today's date to be 2025-03-01
    expect(getDateDaysBack(4)).toBe("2025-02-25");
  });

  it("should return the correct date for 30 days back", () => {
    vi.setSystemTime(today); // Mock today's date to be 2025-03-01
    expect(getDateDaysBack(30)).toBe("2025-01-30");
  });
});
