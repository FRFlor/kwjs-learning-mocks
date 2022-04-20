import {render, screen, waitFor} from "@testing-library/react";
import BaseComponent from "./BaseComponent";
import userEvent from "@testing-library/user-event";

// Example: I don't care about implementation, lets just make jest stub out everything for me
// jest.mock("../hooks/useAlertWhenValueChanges")

// Example: Module with named exports
// jest.mock("../hooks/useWritesFoobarToConsoleLog", () => ({useWritesFoobarToConsoleLog: () => console.log('hi') }))

// Example: Module with default export
// jest.mock("../hooks/useAlertWhenValueChanges", () => ({ __esModule: true, default: () => console.log('hi') }))

// Example: I want to define the implementation of only part of the module
jest.mock('../hooks/useWaitForTimerAndThenWriteHelloWorldToConsoleLog', () => ({
    ...jest.requireActual('../hooks/useWaitForTimerAndThenWriteHelloWorldToConsoleLog'),
    beepAfter2Seconds: () => console.log('fake timer'),
}));


describe("Base Component", () => {
    it("Starts with the counter at 0", async () => {
        const spy = jest.spyOn(console, 'log');

        render(<BaseComponent/>)

        await waitFor(() => expect(spy).toHaveBeenCalled(), {timeout: 3000});

        expect(screen.getByText(/The value is: 0/i)).toBeInTheDocument()
    })

    it("increments the counter when the button is pressed", () => {
        render(<BaseComponent/>)

        userEvent.click(screen.getByRole("button", {title: "Increment"}))

        expect(screen.getByText(/The value is: 1/i)).toBeInTheDocument();
    });
});
