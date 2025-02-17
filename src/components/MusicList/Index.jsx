import styles from './MusicList.module.css'
import { useState } from 'react'
import { useMusicListContext } from '../../Contexts/musicList'

const MusicList = () => {
  const [activeMusicId, setActiveMusicId] = useState(null)
  const { musicList } = useMusicListContext()

  const selectMusic = (id) => {
    setActiveMusicId(id)
  }

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