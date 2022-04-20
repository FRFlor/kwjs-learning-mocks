import {useEffect} from "react";

export function useWritesFoobarToConsoleLog() {
    useEffect(() => {
        console.log('Foobar');
    }, [])
}
