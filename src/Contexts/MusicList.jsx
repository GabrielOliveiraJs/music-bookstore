import { createContext, useContext, useEffect, useState } from "react";
import musics from '../db/musicsList.json'

export const MusicListContext = createContext()
MusicListContext.displayName = 'MusicList'

export default function MusicListProvider({ children }) {
    const [musicList, setMusicList] = useState([])
    const [selectedMusic, setSelectedMusic] = useState(null)
    
    useEffect(() => {
        setMusicList(musics)
        setSelectedMusic(musics[0])
    }, [])

    return (
        <MusicListContext.Provider value={{ musicList, setMusicList, selectedMusic, setSelectedMusic }}>
            {children}
        </MusicListContext.Provider>
    )
}

export function useMusicListContext() {
    const { musicList, setMusicList, selectedMusic, setSelectedMusic } = useContext(MusicListContext)

    return {
        musicList,
        setMusicList, 
        selectedMusic, 
        setSelectedMusic
    }
}