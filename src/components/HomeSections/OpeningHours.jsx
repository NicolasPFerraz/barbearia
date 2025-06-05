import styles from './OpeningHours.module.css'

import barberChair from '../../assets/barbershop-chair.png'
import CtaButton from '../CtaButton'

export default function OpeningHours() {
  return (
    <div className={styles.openingHoursContainer}>
      <div className={styles.openingHoursContent}>
        <img src={barberChair} alt='Barber Chair Icon'></img>
        <h2>FUNCIONAMENTO</h2>
        <p>Confira nossos horários e agende o seu</p>
        <ul>
          <li>Segunda a Sexta<span>08:00 - 19:00</span></li>
          <li>Sábado<span>08:00 - 18:00</span></li>
          <li>Domingo<span className={styles.gold}>FECHADO</span></li>
        </ul>
      </div>
      <CtaButton />
    </div>
  )
}