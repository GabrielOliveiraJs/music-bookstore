import styles from './PlayerBtn.module.css'

const PlayerBtn = ({ children, onClick }) => {
    return (
        <button className={styles.playerBtn} onClick={onClick}>
            {children}
        </button>
    )
}

export default PlayerBtn