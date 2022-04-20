import {useState} from "react";
import useAlertWhenValueChanges from "../hooks/useAlertWhenValueChanges";

export default function BaseComponent() {
    const [theValue, setTheValue] = useState(0);
    useAlertWhenValueChanges(theValue);

    return (
        <>
            <p>The value is: {theValue}</p>

            <button onClick={() => setTheValue(previous => previous + 1)}>Increment</button>
        </>
    )
}
