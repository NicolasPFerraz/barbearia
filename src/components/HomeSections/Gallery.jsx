import styles from './Gallery.module.css'

import galleryIcon from '../../assets/icons/gallery-icon.png'
import instagramIcon from '../../assets/icons/instagram-icon.png'

import photo1 from '../../assets/photo-1.png'
import photo2 from '../../assets/photo-2.png'
import photo3 from '../../assets/photo-3.png'
import photo4 from '../../assets/photo-4.png'
import photo5 from '../../assets/photo-5.png'
import photo6 from '../../assets/photo-6.png'

export default function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryTitle}>
        <img src={galleryIcon} alt='Ícone da galeria'></img>
        <h2>GALERIA</h2>
      </div>
      <div className={styles.separatorLine}></div>
      <div className={styles.photosContainer}>
        <div className={styles.photoColumn}>
          <img src={photo1}></img>
          <img src={photo2}></img>
        </div>
        <div className={styles.photoColumn}>
          <img src={photo3}></img>
          <img src={photo4}></img>
        </div>
        <div className={styles.photoColumn}>
          <img src={photo5}></img>
          <img src={photo6}></img>
        </div>
      </div>
      <button className={styles.instagramButton}>
        <img src={instagramIcon} alt='Ícone do Instagram'></img>
        <span>Confira nosso perfil no Instagram</span>
      </button>
    </div>
  )
}