import { useMusicListContext } from '../../../Contexts/MusicList'
import { useMusicPlayerContext } from '../../../Contexts/MusicPlayer'
import { usePlayerFunctions } from '../../../Hooks/usePlayerFunctions'

// Importe os arquivos de áudio
import firework from '../../../assets/musics/Firework - Katy Perry (Cover by First To Eleven).mp3'
import sweetChild from '../../../assets/musics/Sweet Child O\' Mine - Guns n Roses (Cover by First To Eleven).mp3'

const musicFiles = {
    firework: firework,
    sweetChild: sweetChild,
}

const Player = () => {
    const { audioRef } = useMusicPlayerContext()
    const { handleLoadedMetadata, handleTimeUpdate } = usePlayerFunctions()
    const { selectedMusic } = useMusicListContext()

    return (
        <audio
            src={selectedMusic && musicFiles[selectedMusic.file]}
            ref={audioRef}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            controls={false}
        />
    )
}

export default Player