import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest";
import { Form } from "./modules/tasks/components/Form"

describe("Create To Do Form", () => {
  it("Should submit the form with correct data", () => {
    const mockSetTask = vi.fn();
    render(<Form setTask={mockSetTask} />)
    
    const date = screen.getByLabelText("Date")
    const title = screen.getByLabelText("To Do Title")
    const description = screen.getByLabelText("To Do Description")
    fireEvent.change(date, {target: {value: "2023-01-01"}})
    fireEvent.change(title, {target: {value: "Go to the gym"}})
    fireEvent.change(description, {target: {value: "I need to go to the gym 4 times this week."}})

    const submit = screen.getByRole("button", {name:"Add To Do"})
    fireEvent.click(submit)

    expect(mockSetTask).toHaveBeenCalledWith({
      id: expect.any(String),
      title: "Go to the gym",
      description: "I need to go to the gym 4 times this week.",
      status: "Pending",
      date: "2023-01-01",
    })
  })
})


