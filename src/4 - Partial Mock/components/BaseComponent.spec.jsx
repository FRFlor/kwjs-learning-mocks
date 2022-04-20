import {render, waitFor} from "@testing-library/react";
import BaseComponent from "./BaseComponent";

jest.mock("../hooks/useWritesToConsoleLog", () => {
    const realModule = jest.requireActual("../hooks/useWritesToConsoleLog");

    return {
        ...realModule,
        useWritesToConsoleLogAfterDelay: () => console.log("Hello World Delayed")
    }
})

describe("Base Component", () => {
    it("Writes Hello World to the console", async () => {
        const consoleLogSpy = jest.spyOn(console, 'log');

        render(<BaseComponent/>)

        await waitFor(() => expect(consoleLogSpy)
            .toHaveBeenCalledWith("Hello World Right Away"), {timeout: 3000});

        await waitFor(() => expect(consoleLogSpy)
            .toHaveBeenCalledWith("Hello World Delayed"), {timeout: 3000});
    })

});
