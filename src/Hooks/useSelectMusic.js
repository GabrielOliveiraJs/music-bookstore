import { useState } from "react"
import { useMusicListContext } from "../Contexts/MusicList"

export function useSelectMusic() {
    const { setSelectedMusic } = useMusicListContext()

    const selectMusic = (music) => {
        setSelectedMusic(music)
    }

    return {
        selectMusic
    }
}