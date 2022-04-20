import {useState} from "react";
import {useWritesToConsoleLogAfterDelay, useWritesToConsoleLogRightAway} from "../hooks/useWritesToConsoleLog";

export default function BaseComponent() {
    const [theValue, setTheValue] = useState(0);
    useWritesToConsoleLogRightAway();
    useWritesToConsoleLogAfterDelay();

    return (
        <>
            <p>The value is: {theValue}</p>

            <button onClick={() => setTheValue(previous => previous + 1)}>Increment</button>
        </>
    )
}
