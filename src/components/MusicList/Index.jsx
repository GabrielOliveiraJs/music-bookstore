import styles from './MusicList.module.css'
import { useSelectMusic } from '../../Hooks/useSelectMusic'
import { useMusicListContext } from '../../Contexts/MusicList'

const MusicList = () => {
  const { musicList, selectedMusic } = useMusicListContext()
  const { selectMusic} = useSelectMusic()

  return (
    <section className={styles.musicList}>
      <ul className={styles.musicList__list}>
        {
          musicList.map((music) => (
            <li
              key={music.id}
              className={`${styles.musicList__item} ${selectedMusic.id === music.id ? styles.active : ''}`}
              onClick={() => selectMusic(music)}
            >
              {music.title}
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default MusicList