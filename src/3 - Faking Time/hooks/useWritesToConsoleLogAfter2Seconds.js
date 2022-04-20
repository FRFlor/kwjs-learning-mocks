import {useEffect} from "react";

export function useWritesToConsoleLogAfter2Seconds() {
    useEffect(() => {
        (async () => {
            const holdFor2Seconds = new Promise(resolve => setTimeout(resolve, 2000));
            await holdFor2Seconds;

            console.log("Hello World")
        })();
    }, [])
}
