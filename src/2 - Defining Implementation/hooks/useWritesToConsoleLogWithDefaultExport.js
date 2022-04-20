import {useEffect} from "react";

export default function useWritesToConsoleLogWithDefaultExport() {
    useEffect(() => {
        console.log('The real foobar with default export');
    }, [])
}
