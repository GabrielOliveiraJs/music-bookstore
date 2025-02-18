import { createContext, useContext, useRef } from "react"

export const AudioRefContext = createContext()

export default function AudioRefProvider({ children }) {
    const audioRef = useRef(null)

    return (
        <AudioRefContext.Provider value={{ audioRef }}>
            {children}
        </AudioRefContext.Provider>
    )
}

export function useAudioRefContext() {
    const { audioRef } = useContext(AudioRefContext)
    return {
        audioRef
    }
}