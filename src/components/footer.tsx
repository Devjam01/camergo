export default function Footer(): JSX.Element {
  return (
    // Définit le composant du pied de page
    <footer className="footer">
      {/* Élément de pied de page avec une classe CSS "footer" */}
      <p>&copy; 2024 CamerGo. Tous droits réservés.</p>
      {/* Paragraphe indiquant le droit d'auteur */}
      <p>
        {/* Deux liens dans un paragraphe */}
        <a href="contact">Contact</a> |
        {/* Lien vers la page de contact */}
        <a href="privacy">Politique de confidentialité</a>
        {/* Lien vers la page de politique de confidentialité */}
      </p>
    </footer>
  );
}
