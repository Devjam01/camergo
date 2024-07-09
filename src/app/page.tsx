export default function Home(): JSX.Element {
    return (
      <>
        <div className="container">
          <h2 class="voyage">Bienvenue sur votre site de réservation de voyage!</h2>
          <p>
            Nous vous aidons à réserver vos voyages facilement et rapidement.
            Que ce soit pour un vol, un hôtel ou une voiture de location, nous
            avons tout ce dont vous avez besoin.
          </p>

          <div className="service">
            <h3>Réservation de Vol</h3>
            <a href="/flight">
              <img
                src="/img/depositphotos_3034919-stock-photo-departing-aircraft.jpg"
                alt="Réservation de Vol"
              />
            </a>
            <p>
              Réservez votre vol vers n&apos;importe quelle destination dans le
              monde. Cliquez <a href="/flight">ici</a> pour réserver.
            </p>
          </div>

          <div className="service">
            <h3>Réservation d&apos;Hôtel</h3>
            <a href="/hotel">
              <img
                src="/img/depositphotos_24553989-stock-photo-hotel.jpg"
                alt="Réservation d'Hôtel"
              />
            </a>
            <p>
              Trouvez et réservez les meilleurs hôtels. Cliquez{" "}
              <a href="/hotel">ici</a> pour réserver.
            </p>
          </div>

          <div className="service">
            <h3>Réservation de Voiture</h3>
            <a href="/car">
              <img
                src="/img/depositphotos_52489449-stock-photo-man-offering-a-car-key.jpg"
                alt="Réservation de Voiture"
              />
            </a>
            <p>
              Louez une voiture pour vos déplacements. Cliquez{" "}
              <a href="/car">ici</a> pour réserver.
            </p>
          </div>
        </div>
      </>
    );
}
