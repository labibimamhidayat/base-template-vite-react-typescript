import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";

import ExampleTableInput from "@/components/ExampleTableInput";
import { useExampleStore } from "@/store/exampleStore";

describe("ExampleTableInput Component", () => {
  beforeEach(() => {
    // Clear store before each test
    useExampleStore.setState({ items: [] });
  });

  it("renders input fields and button", () => {
    render(<ExampleTableInput />);
    expect(screen.getByPlaceholderText("Item name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Quantity")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("adds item to table when input is submitted", () => {
    render(<ExampleTableInput />);

    const nameInput = screen.getByPlaceholderText("Item name");
    const quantityInput = screen.getByPlaceholderText("Quantity");
    const addButton = screen.getByText("Add");

    fireEvent.change(nameInput, { target: { value: "Apple" } });
    fireEvent.change(quantityInput, { target: { value: "10" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("does not add empty items", () => {
    render(<ExampleTableInput />);
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
    expect(
      screen.queryByRole("row", { name: /Apple/i }),
    ).not.toBeInTheDocument();
  });
});
