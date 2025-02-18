import { useMusicPlayerContext } from "../../../Contexts/MusicPlayer"
import { usePlayerFunctions } from "../../../Hooks/usePlayerFunctions"

const Timer = () => {
    const { duration, currentTime } = useMusicPlayerContext()
    const { formatTime } = usePlayerFunctions()

    return (
        <div>
            <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
        </div>
    )
}

export default Timer