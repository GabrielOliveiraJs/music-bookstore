import styles from './BasePage.module.css'
import MusicPage from '../MusicPage/Index'

const BasePage = () => {
    return (
        <section className={styles.mainContainer}>
            <MusicPage />
        </section>
    )
}

export default BasePage