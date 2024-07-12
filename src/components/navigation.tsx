export default function Navigation(): JSX.Element {
  return (
    // Définit le composant de navigation
    <nav className="nav">
      {/* Élément de navigation avec une classe CSS "nav" */}
      <div className="logo">
        {/* Section du logo */}
        <a href="/">
          {/* Lien vers la page d'accueil */}
          <span>Camer</span>Go
          {/* Texte du logo avec une partie en gras (Camer) */}
        </a>
      </div>
      <div className="nav-links">
        {/* Section des liens de navigation */}
        <a href="/">Accueil</a>
        {/* Lien vers la page d'accueil */}
        <a href="/flight">Réservation de Vol</a>
        {/* Lien vers la page de réservation de vol */}
        <a href="/hotel">Réservation d&apos;Hôtel</a>
        {/* Lien vers la page de réservation d'hôtel, l'apostrophe est échappée */}
        <a href="/car">Réservation de Voiture</a>
        {/* Lien vers la page de réservation de voiture */}
        <a href="/contact">Contact</a>
        {/* Lien vers la page de contact */}
      </div>
    </nav>
  );
}
