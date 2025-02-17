import { createContext, useContext, useEffect, useState } from "react";
import musics from '../db/musicsList.json'

export const MusicListContext = createContext()
MusicListContext.displayName = 'MusicList'

export default function MusicListProvider({ children }) {
    const [musicList, setMusicList] = useState([])

    useEffect(() => {
        setMusicList(musics)
    }, [])

    return (
        <MusicListContext.Provider value={{ musicList, setMusicList }}>
            {children}
        </MusicListContext.Provider>
    )
}

export function useMusicListContext() {
    const { musicList, setMusicList } = useContext(MusicListContext)

    return {
        musicList,
        setMusicList
    }
}