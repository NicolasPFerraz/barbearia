import styles from './Hero.module.css'

import CtaButton from '../CtaButton'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h2>FAÇA SEU PRÓPRIO ESTILO</h2>
        <p>
          Dos clássicos aos cortes modernos.
          <br></br>
          Realce sua identidade com estilo.
        </p>
        <CtaButton className={styles.ctaButton} />
      </div>
    </div>
  )
}