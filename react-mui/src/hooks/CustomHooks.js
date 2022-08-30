import { useState } from "react"

const useCustomCounter = () => {
    const [increment, setIncrement] = useState(0)
    const incrementHandler = () => {
        setIncrement(increment + 1)
    }
    return {
        increment,
        incrementHandler
    }
}

export default useCustomCounter;