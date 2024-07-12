export default function Home(): JSX.Element {
  return (
    <>
      {/* Début du contenu JSX */}
      <div className="container">
        {/* Conteneur principal avec une classe CSS "container" */}
        <h2 className="voyage">Bienvenue sur votre site de réservation de voyage!</h2>
        {/* Titre de niveau 2 avec une classe CSS "voyage" */}
        <p>
          {/* Paragraphe introductif */}
          Nous vous aidons à réserver vos voyages facilement et rapidement.
          Que ce soit pour un vol, un hôtel ou une voiture de location, nous
          avons tout ce dont vous avez besoin.
        </p>

        {/* Service de réservation de vol */}
        <div className="service">
          <h3>Réservation de Vol</h3>
          {/* Titre de niveau 3 pour le service de réservation de vol */}
          <a href="/flight">
            {/* Lien vers la page de réservation de vol */}
            <img
              src="/img/depositphotos_3034919-stock-photo-departing-aircraft.jpg"
              alt="Réservation de Vol"
            />
            {/* Image représentative du service de réservation de vol */}
          </a>
          <p>
            {/* Description du service de réservation de vol */}
            Réservez votre vol vers n&apos;importe quelle destination dans le
            monde. Cliquez <a href="/flight">ici</a> pour réserver.
            {/* Lien interne pour réserver un vol */}
          </p>
        </div>

        {/* Service de réservation d'hôtel */}
        <div className="service">
          <h3>Réservation d&apos;Hôtel</h3>
          {/* Titre de niveau 3 pour le service de réservation d'hôtel */}
          <a href="/hotel">
            {/* Lien vers la page de réservation d'hôtel */}
            <img
              src="/img/depositphotos_24553989-stock-photo-hotel.jpg"
              alt="Réservation d'Hôtel"
            />
            {/* Image représentative du service de réservation d'hôtel */}
          </a>
          <p>
            {/* Description du service de réservation d'hôtel */}
            Trouvez et réservez les meilleurs hôtels. Cliquez{" "}
            <a href="/hotel">ici</a> pour réserver.
            {/* Lien interne pour réserver un hôtel */}
          </p>
        </div>

        {/* Service de réservation de voiture */}
        <div className="service">
          <h3>Réservation de Voiture</h3>
          {/* Titre de niveau 3 pour le service de réservation de voiture */}
          <a href="/car">
            {/* Lien vers la page de réservation de voiture */}
            <img
              src="/img/depositphotos_52489449-stock-photo-man-offering-a-car-key.jpg"
              alt="Réservation de Voiture"
            />
            {/* Image représentative du service de réservation de voiture */}
          </a>
          <p>
            {/* Description du service de réservation de voiture */}
            Louez une voiture pour vos déplacements. Cliquez{" "}
            <a href="/car">ici</a> pour réserver.
            {/* Lien interne pour réserver une voiture */}
          </p>
        </div>
      </div>
      {/* Fin du contenu JSX */}
    </>
  );
}
