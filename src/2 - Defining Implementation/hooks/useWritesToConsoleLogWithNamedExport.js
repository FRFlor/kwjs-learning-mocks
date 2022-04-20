import {useEffect} from "react";

export function useWritesToConsoleLogWithNamedExport() {
    useEffect(() => {
        console.log('The real foobar with named export');
    }, [])
}
