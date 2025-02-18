import { useMusicListContext } from '../../../Contexts/MusicList'
import { useMusicPlayerContext } from '../../../Contexts/MusicPlayer'
import { usePlayerFunctions } from '../../../Hooks/usePlayerFunctions'

const Player = () => {
    const { audioRef } = useMusicPlayerContext()
    const { handleLoadedMetadata, handleTimeUpdate } = usePlayerFunctions()
    const { selectedMusic } = useMusicListContext()

    return (
        <audio
            src={selectedMusic && selectedMusic.src}
            ref={audioRef}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            controls={false} // Desabilita/Habilita os controles padrão
        />
    )
}

export default Player