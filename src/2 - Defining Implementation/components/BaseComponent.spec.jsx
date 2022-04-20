import {render, screen} from "@testing-library/react";
import BaseComponent from "./BaseComponent";

// Example: Module with named exports
jest.mock("../hooks/useWritesToConsoleLogWithNamedExport",
    () => ({useWritesToConsoleLogWithNamedExport: () => console.log('faking the named export')}))

// Example: Module with default export
jest.mock("../hooks/useWritesToConsoleLogWithDefaultExport",
    () => ({__esModule: true, default: () => console.log('faking the default export')}))

describe("Base Component", () => {
    it("Starts with the counter at 0", async () => {
        render(<BaseComponent/>)

        expect(screen.getByText(/The value is: 0/i)).toBeInTheDocument()
    })

});
