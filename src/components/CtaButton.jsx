import styles from './CtaButton.module.css'

import { FaWhatsapp } from "react-icons/fa"

export default function CtaButton() {
  return (
    <button className={styles.ctaButton}>
      <FaWhatsapp className={styles.whatsappIcon} />
      <p>Agende seu horário</p>
    </button>
  )
}