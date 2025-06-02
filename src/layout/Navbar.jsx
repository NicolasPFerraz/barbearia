import styles from './Navbar.module.css'
import { RiScissorsFill } from "react-icons/ri"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#hero" className={styles.logo}>
        <RiScissorsFill />
        <h1>BarberShop</h1>
      </a>
      <ul className={styles.navLinks}>
        <li><a href="/" className={`${styles.navLink} ${styles.active}`}>Home</a></li>
        <li><a href="#sobre" className={styles.navLink}>Sobre</a></li>
        <li><a href="#servicos" className={styles.navLink}>Serviços</a></li>
        <li><a href="#galeria" className={styles.navLink}>Galeria</a></li>
        <li><a href="#depoimentos" className={styles.navLink}>Depoimentos</a></li>
        <li><a href="#contato" className={styles.navLink}>Contato</a></li>
      </ul>
    </nav>
  )
}
