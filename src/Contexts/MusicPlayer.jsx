import { createContext, useContext, useRef, useState } from "react"

export const MusicPlayerContext = createContext()

export default function MusicPlayerProvider({ children }) {
    const audioRef = useRef(null)
    const [duration, setDuration] = useState(0) // Duração total da música
    const [currentTime, setCurrentTime] = useState(0) // Tempo atual da música

    return (
        <MusicPlayerContext.Provider value={{ audioRef, duration, setDuration, currentTime, setCurrentTime }}>
            {children}
        </MusicPlayerContext.Provider>
    )
}

export function useMusicPlayerContext() {
    const { audioRef, duration, setDuration, currentTime, setCurrentTime } = useContext(MusicPlayerContext)
    return {
        audioRef,
        duration,
        setDuration,
        currentTime,
        setCurrentTime
    }
}