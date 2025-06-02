import styles from './About.module.css'

import aboutImg from '../../assets/about-background.png'

import { RiScissorsFill } from "react-icons/ri"

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <RiScissorsFill className={styles.icon} />
        <h2>POR QUE ESCOLHER A <span>BarberShop</span>?</h2>
        <div>
          <h3>Sobre nós</h3>
          <p>
            Desde 2018, a Barber Shop une tradição e modernidade para <br></br>cuidar do seu estilo com qualidade e respeito.
          </p>
        </div>
        <div>
          <h3>Nossa história</h3>
          <ul>
            <li>📅 Fundada em 2018, com técnicas modernas e tradição.</li>
            <li>📍 Iniciamos em um espaço simples em Franca (SP).</li>
            <li>📈 Crescemos junto com nossos clientes.</li>
            <li>⭐ Compromisso com atendimento de excelência.</li>
          </ul>
        </div>
      </div>
      <div className={styles.aboutImage}>
        <img src={aboutImg} alt="Sobre a BarberShop" />
      </div>
    </div>
  )
}