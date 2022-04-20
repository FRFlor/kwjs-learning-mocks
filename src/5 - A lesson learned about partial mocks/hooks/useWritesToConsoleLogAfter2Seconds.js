import {useEffect} from "react";

export function useWritesToConsoleLogAfter2Seconds() {
    useEffect(() => {
        writeToConsoleAfterWaitingFor2Seconds("Hello World");
    }, [])
}

export function writeToConsoleAfterWaitingFor2Seconds(message) {
    console.log("It is still the real implementation");
    (async () => {
        const holdFor2Seconds = new Promise(resolve => setTimeout(resolve, 2000));
        await holdFor2Seconds;

        console.log(message)
    })();
}
