import { useState } from "react"

export function useSelectMusic() {
const [activeMusicId, setActiveMusicId] = useState(null)

    const selectMusic = (musicId) => {
        setActiveMusicId(musicId)
    }

    return {
        selectMusic,
        activeMusicId
    }
}