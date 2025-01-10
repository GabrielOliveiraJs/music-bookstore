import styles from './MusicBar.module.css'

const MusicBar = ({ duration, currentTime, onChange }) => {
  return (
    <input
      className={styles.musicBar}
      type="range"
      min="0"
      max={duration}
      value={currentTime}
      onChange={onChange}
    />
  )
}

export default MusicBar