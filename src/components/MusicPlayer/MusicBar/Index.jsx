import { useMusicPlayerContext } from '../../../Contexts/MusicPlayer'
import { usePlayerFunctions } from '../../../Hooks/usePlayerFunctions'
import styles from './MusicBar.module.css'

const MusicBar = () => {
  const { duration, currentTime } = useMusicPlayerContext()
  const { handleSeek } = usePlayerFunctions()
  return (
    <input
      className={styles.musicBar}
      type="range"
      min="0"
      max={duration}
      value={currentTime}
      onChange={handleSeek}
    />
  )
}

export default MusicBar