import {useEffect} from "react";

export function useWaitForTimerAndThenWriteHelloWorldToConsoleLog() {
    useEffect(() => {
        beepAfter2Seconds().then(() => console.log('hello world'))
    }, [])
}


export function beepAfter2Seconds() {
    return new Promise(resolve => setTimeout(() => resolve(true), 2000));
}
