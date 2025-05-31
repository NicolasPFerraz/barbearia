export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#hero" className="logo">Logo</a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}
