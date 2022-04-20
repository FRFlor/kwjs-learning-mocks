import {useState} from "react";
import {useWaitForTimerAndThenWriteHelloWorldToConsoleLog} from "../hooks/useWaitForTimerAndThenWriteHelloWorldToConsoleLog";

export default function BaseComponent() {
    const [theValue, setTheValue] = useState(0);
    // useAlertWhenValueChanges(theValue);
    // useWritesFoobarToConsoleLog();
    useWaitForTimerAndThenWriteHelloWorldToConsoleLog();

    return (
        <>
            <p>The value is: {theValue}</p>

            <button onClick={() => setTheValue(previous => previous + 1)}>Increment</button>
        </>
    )
}
