import { useState } from "react"

const useLoading = (action: any) => {
    const [isLoading, setIsLoading] = useState(false);

    const doAction = (...args: any) => {
        setIsLoading(true);
        return action(...args).finally(() => setIsLoading(false))
    }

    return [doAction, isLoading] as const
}

export default useLoading
