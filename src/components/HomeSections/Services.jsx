import styles from './Services.module.css'

import corteMasculinoImg from '../../assets/corte-masculino.jpg'
import barbaImg from '../../assets/barba.jpg'
import corteInfantilImg from '../../assets/corte-infantil.jpg'

import corteMasculinoIcon from '../../assets/icons/corte-masculino-icon.png'
import barbaIcon from '../../assets/icons/barba-icon.png'
import corteInfantilIcon from '../../assets/icons/corte-infantil-icon.png'

export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.titleContainer}>
        <h2>O QUE OFERECEMOS</h2>
        <div className={styles.separatorLine}>
        </div>
        <p>Confira os serviços disponíveis na BarberShop.</p>
      </div>
      <div className={styles.servicesList}>
        <div className={styles.serviceCard}>
          <img src={corteMasculinoImg} alt='Corte masculino'></img>
          <div className={styles.serviceCardContent}>
            <div className={styles.serviceTitle}>
              <img src={corteMasculinoIcon} alt='Ícone de corte masculino' className={styles.serviceIcon}></img>
              <h3>CORTE MASCULINO</h3>
            </div>
            <p>Corte personalizado com acabamento impecável, lavagem relaxante e styling com produtos de alta qualidade.</p>
            <p className={styles.priceText}>R$ <span className={styles.priceValue}>40,00</span></p>
          </div>
        </div>
        <div className={styles.serviceCard}>
          <img src={barbaImg} alt='Barba completa'></img>
          <div className={styles.serviceCardContent}>
            <div className={styles.serviceTitle}>
              <img src={barbaIcon} alt='Ícone de barba completa' className={styles.serviceIcon}></img>
              <h3>BARBA COMPLETA</h3>
            </div>
            <p>Design e cuidado para sua barba com corte, alinhamento, hidratação e toalha quente. Visual limpo, bem definido e confortável.</p>
            <p className={styles.priceText}>R$ <span className={styles.priceValue}>30,00</span></p>
          </div>
        </div>
        <div className={styles.serviceCard}>
          <img src={corteInfantilImg} alt='Corte infantil'></img>
          <div className={styles.serviceCardContent}>
            <div className={styles.serviceTitle}>
              <img src={corteInfantilIcon} alt='Ícone de corte infantil' className={styles.serviceIcon}></img>
              <h3>CORTE INFANTIL</h3>
            </div>
            <p>Corte moderno ou clássico para os pequenos, com atenção, paciência e um ambiente acolhedor. Conforto e estilo para todas as idades.</p>
            <p className={styles.priceText}>R$ <span className={styles.priceValue}>35,00</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}