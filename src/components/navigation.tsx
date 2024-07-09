export default function Navigation(): JSX.Element {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="/">
          <span>Camer</span>Go
        </a>
      </div>
      <div className="nav-links">
        <a href="/">Accueil</a>
        <a href="/flight">Réservation de Vol</a>
        <a href="/hotel">Réservation d&apos;Hôtel</a>
        <a href="/car">Réservation de Voiture</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}