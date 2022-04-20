import {render, waitFor} from "@testing-library/react";
import BaseComponent from "./BaseComponent";

jest.useFakeTimers();

describe("Base Component", () => {
    it("Writes Hello World to the console", async () => {
        const consoleLogSpy = jest.spyOn(console, 'log');

        render(<BaseComponent/>)

        // A couple of points to highlight
        // jest.advanceTimersByTime(500);

        // jest.runAllTimers();

        // jest.runOnlyPendingTimers();

        await waitFor(() => expect(consoleLogSpy)
            .toHaveBeenCalledWith("Hello World"), {timeout: 3000});
    })

});
