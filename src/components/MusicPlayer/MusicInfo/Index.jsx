import styles from './MusicInfo.module.css'

const MusicInfo = ({title}) => {
    return (
        <h6 className={styles.musicInfo}>{title}</h6>
    )
}

export default MusicInfo