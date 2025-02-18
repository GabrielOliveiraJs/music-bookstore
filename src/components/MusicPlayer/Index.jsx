import styles from './MusicPlayer.module.css'
import { useRef, useState } from 'react'
import { FaPlay, FaPause } from "react-icons/fa"
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi"
import PlayerBtn from './PlayerBtn/index'
import MusicBar from './MusicBar/Index'
import Player from './Player/Index'
import MusicInfo from './MusicInfo/Index'
import music from '../../assets/musics/Firework - Katy Perry (Cover by First To Eleven).mp3'
import { useMusicPlayerContext } from '../../Contexts/MusicPlayer'
import { usePlayerFunctions } from '../../Hooks/usePlayerFunctions'
import Timer from './Timer/Index'
import { useMusicListContext } from '../../Contexts/MusicList'

const MusicPlayer = () => {
    const { audioRef } = useMusicPlayerContext()
    const { togglePlay } = usePlayerFunctions()
    const { selectedMusic } = useMusicListContext()

    return (
        <section className={styles.MusicPlayer}>
            <div className={styles.MusicPlayer__player}>
                <Player />
                <MusicInfo title={selectedMusic && selectedMusic.title} />
                <MusicBar />
                <Timer />
                <div className={styles.MusicPlayer__controls}>
                    <PlayerBtn >
                        <BiSkipPrevious />
                    </PlayerBtn>
                    <PlayerBtn onClick={togglePlay}>
                        {
                            audioRef.current?.paused
                                ? <FaPlay />
                                : <FaPause />
                        }
                    </PlayerBtn>
                    <PlayerBtn >
                        <BiSkipNext />
                    </PlayerBtn>
                </div>
            </div>
        </ section>
    )
}

export default MusicPlayer