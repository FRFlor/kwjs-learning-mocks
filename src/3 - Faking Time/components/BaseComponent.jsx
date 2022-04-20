import {useState} from "react";
import {useWritesToConsoleLogAfter2Seconds} from "../hooks/useWritesToConsoleLogAfter2Seconds";

export default function BaseComponent() {
    const [theValue, setTheValue] = useState(0);
    useWritesToConsoleLogAfter2Seconds()

    return (
        <>
            <p>The value is: {theValue}</p>

            <button onClick={() => setTheValue(previous => previous + 1)}>Increment</button>
        </>
    )
}
