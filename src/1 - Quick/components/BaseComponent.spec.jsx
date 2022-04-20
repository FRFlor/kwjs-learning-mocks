import {render, screen} from "@testing-library/react";
import BaseComponent from "./BaseComponent";
import userEvent from "@testing-library/user-event";

// Example: I don't care about implementation, lets just make jest stub out everything for me
jest.mock("../hooks/useAlertWhenValueChanges")

describe("Base Component", () => {
    it("increments the counter when the button is pressed", () => {
        render(<BaseComponent/>)

        userEvent.click(screen.getByRole("button", {title: "Increment"}))

        expect(screen.getByText(/The value is: 1/i)).toBeInTheDocument();
    });
});
