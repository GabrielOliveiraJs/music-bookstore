import { useMusicPlayerContext } from "../Contexts/MusicPlayer"

export function usePlayerFunctions() {
    const { setDuration, setCurrentTime, audioRef } = useMusicPlayerContext()

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration) // Duração em segundos
        }
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime) // Tempo atual em segundos
        }
    }

    const handleSeek = (e) => {
        const progress = e.target.value
        if (audioRef.current) {
            audioRef.current.currentTime = progress // Atualiza o tempo com base na barra de progresso
        }
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }

    return {
        handleLoadedMetadata,
        handleTimeUpdate,
        handleSeek,
        formatTime,
        togglePlay
    }
}