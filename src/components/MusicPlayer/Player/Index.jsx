import { useMusicPlayerContext } from '../../../Contexts/MusicPlayer'
import { usePlayerFunctions } from '../../../Hooks/usePlayerFunctions'

const Player = ({ src }) => {
    const { audioRef } = useMusicPlayerContext()
    const { handleLoadedMetadata, handleTimeUpdate } = usePlayerFunctions()
    return (
        <audio
            src={src}
            ref={audioRef}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            controls={false} // Desabilita/Habilita os controles padrão
        />
    )
}

export default Player