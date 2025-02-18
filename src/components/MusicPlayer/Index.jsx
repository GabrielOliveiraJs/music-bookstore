import styles from './MusicPlayer.module.css'
import { useRef, useState } from 'react'
import { FaPlay, FaPause } from "react-icons/fa"
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi"
import PlayerBtn from './PlayerBtn/index'
import MusicBar from './MusicBar/Index'
import Player from './Player/Index'
import MusicInfo from './MusicInfo/Index'
import music from '../../assets/musics/Firework - Katy Perry (Cover by First To Eleven).mp3'
import { useAudioRefContext } from '../../Contexts/AudioRef'

const musics = [
    {
        id: 1,
        title: 'Firework - Katy Perry (Cover by First To Eleven)',
        src: '../../assets/musics/Firework - Katy Perry (Cover by First To Eleven).mp3'
    }
]

const MusicPlayer = () => {
    const { audioRef } = useAudioRefContext()
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

    return (
        <section className={styles.MusicPlayer}>
            <div className={styles.MusicPlayer__player}>
                <Player
                    src={music}
                    reference={audioRef}
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                />

                <MusicInfo title={musics[0].title} />

                <MusicBar
                    duration={duration}
                    currentTime={currentTime}
                    onChange={handleSeek}
                />

                <div>
                    <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
                </div>

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