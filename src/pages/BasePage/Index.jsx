import styles from './BasePage.module.css'
import MusicsList from '../MusicList/Index'

const BasePage = () => {
    return (
        <main className={styles.mainContainer}>
            <MusicsList />
        </main>
    )
}

export default BasePage