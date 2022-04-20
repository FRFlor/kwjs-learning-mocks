import {useState} from "react";
import {useWritesToConsoleLogWithNamedExport} from "../hooks/useWritesToConsoleLogWithNamedExport";
import useWritesToConsoleLogWithDefaultExport from "../hooks/useWritesToConsoleLogWithDefaultExport";

export default function BaseComponent() {
    const [theValue, setTheValue] = useState(0);
    useWritesToConsoleLogWithNamedExport()
    useWritesToConsoleLogWithDefaultExport()

    return (
        <>
            <p>The value is: {theValue}</p>

            <button onClick={() => setTheValue(previous => previous + 1)}>Increment</button>
        </>
    )
}
