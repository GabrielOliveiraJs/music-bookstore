import styles from './MusicList.module.css'
import { useMusicListContext } from '../../Contexts/musicList'
import { useSelectMusic } from '../../Hooks/useSelectMusic'

const MusicList = () => {
  const { musicList } = useMusicListContext()
  const { selectMusic, activeMusicId } = useSelectMusic()

  return (
    <section className={styles.musicList}>
      <ul className={styles.musicList__list}>
        {
          musicList.map((music) => (
            <li
              key={music.id}
              className={`${styles.musicList__item} ${activeMusicId === music.id ? styles.active : ''}`}
              onClick={() => selectMusic(music.id)}
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