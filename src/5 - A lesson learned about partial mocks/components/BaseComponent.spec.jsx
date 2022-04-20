import {render, waitFor} from "@testing-library/react";
import BaseComponent from "./BaseComponent";

jest.mock("../hooks/useWritesToConsoleLogAfter2Seconds", () => {
    const realModule = jest.requireActual("../hooks/useWritesToConsoleLogAfter2Seconds");

    return {
        ...realModule,
        writeToConsoleAfterWaitingFor2Seconds: () => console.log("Hello World")
    }
})

describe("Base Component", () => {
    it("Writes Hello World to the console", async () => {
        const consoleLogSpy = jest.spyOn(console, 'log');

        render(<BaseComponent/>)

        await waitFor(() => expect(consoleLogSpy)
            .toHaveBeenCalledWith("Hello World"), {timeout: 3000});
    })

});
