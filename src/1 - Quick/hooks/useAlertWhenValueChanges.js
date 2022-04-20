import {useEffect, useState} from "react";

export default function useAlertWhenValueChanges(valueBeingTracked) {
    const [isVeryFirstTime, setIsVeryFirstTime] = useState(true)
    useEffect(() => {
        if (isVeryFirstTime) {
            setIsVeryFirstTime(false);
            return;
        }
        alert(`Value changed to ${valueBeingTracked}!`)
        console.log(`Value changed to ${valueBeingTracked}!`)
    }, [valueBeingTracked])
}
