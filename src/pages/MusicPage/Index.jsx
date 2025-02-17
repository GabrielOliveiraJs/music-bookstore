import styles from "./MusicPage.module.css"
import MusicPlayer from "../../components/musicPlayer/Index"
import MusicList from "../../components/MusicList/Index"

const MusicPage = () => {
  return (
    <main className={styles.musicContainer}>
      <MusicList />
      <MusicPlayer />
    </main>
  )
}

export default MusicPage