import styles from './MusicPlayer.module.css'
import { useEffect, useRef, useState } from 'react'
import { FaPlay, FaPause } from "react-icons/fa"
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi"
import PlayerBtn from './PlayerBtn/index'
import MusicBar from './MusicBar/Index'
import Player from './Player/Index'
import music from '../../assets/musics/Firework - Katy Perry (Cover by First To Eleven).mp3'

const musics = [
    {
        id: 1,
        title: 'Firework',
        singer: 'Katy Perry (Cover by First To Eleven)',
        src: music
    }
]

const MusicPlayer = () => {
    const audioRef = useRef(null)
    const [duration, setDuration] = useState(0) // Duração total da música
    const [currentTime, setCurrentTime] = useState(0) // Tempo atual da música

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration) // Duração em segundos
        }
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime) // Tempo atual em segundos
        }
    }

    const handleSeek = (e) => {
        const progress = e.target.value
        if (audioRef.current) {
            audioRef.current.currentTime = progress // Atualiza o tempo com base na barra de progresso
        }
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }

    useEffect(() => {console.log(music)}, [])

    return (
        <div className={styles.MusicPlayer} >
            <Player
                src={music}
                reference={audioRef}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
            />

            <MusicBar
                duration={duration}
                currentTime={currentTime}
                onChange={handleSeek}
            />

            <div>
                <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
            </div>

            <ul className={styles.MusicPlayer__controls}>
                <li>
                    <PlayerBtn >
                        <BiSkipPrevious />
                    </PlayerBtn>
                </li>
                <li>
                    <PlayerBtn onClick={togglePlay}>
                        {
                            audioRef.current?.paused
                                ? <FaPlay />
                                : <FaPause />
                        }
                    </PlayerBtn>
                </li>
                <li>
                    <PlayerBtn >
                        <BiSkipNext />
                    </PlayerBtn>
                </li>
            </ul>
        </ div>
    )
}

export default MusicPlayer