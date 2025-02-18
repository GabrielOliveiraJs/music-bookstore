import { useMusicListContext } from '../../../Contexts/MusicList';
import { useMusicPlayerContext } from '../../../Contexts/MusicPlayer';
import { usePlayerFunctions } from '../../../Hooks/usePlayerFunctions';

const Player = () => {
    const { audioRef } = useMusicPlayerContext();
    const { handleLoadedMetadata, handleTimeUpdate } = usePlayerFunctions();
    const { selectedMusic } = useMusicListContext();

    // Carrega dinamicamente os arquivos de áudio
    const musicContext = require.context('../../../assets/musics', false, /\.mp3$/);

    const musicFiles = musicContext.keys().reduce((acc, key) => {
        const musicName = key.replace('./', '').replace('.mp3', '');
        acc[musicName] = musicContext(key);
        return acc;
    }, {});

    return (
        <audio
            src={selectedMusic && musicFiles[selectedMusic.file]}
            ref={audioRef}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            controls={false}
        />
    );
};

export default Player;