import {useEffect} from "react";

export function useWritesToConsoleLogRightAway() {
    useEffect(() => {
        console.log("Hello World Right Away")
    }, [])
}

export function useWritesToConsoleLogAfterDelay() {
    useEffect(() => {
        (async () => {
            const holdFor2Seconds = new Promise(resolve => setTimeout(resolve, 2000));
            await holdFor2Seconds;

            console.log("Hello World Delayed")
        })();
    }, [])
}
