import Container from '../layout/Container'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

import Hero from '../components/HomeSections/Hero'
import About from '../components/HomeSections/About'
import OpeningHours from '../components/HomeSections/OpeningHours'
import Services from '../components/HomeSections/Services'
import Gallery from '../components/HomeSections/Gallery'
import Testimonials from '../components/HomeSections/Testimonials'
import Contact from '../components/HomeSections/Contact'

export default function Home() {
  return (
    <Container>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="sobre"><About /></section>
      <section id="horario"><OpeningHours /></section>
      <section id="servicos"><Services /></section>
      <section id="galeria"><Gallery /></section>
      <section id="depoimentos"><Testimonials /></section>
      <section id="contato"><Contact /></section>
      <Footer />
    </Container >
  )
}