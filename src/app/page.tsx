export default function Home(): JSX.Element {
    return (
      <>
        <header className="header">
          <h1>Réservez votre Voyage</h1>
        </header>
        <nav className="nav">
          <div className="logo">
            <a href="home.html">
              <span>Camer</span>Go
            </a>
          </div>
          <div className="nav-links">
            <a href="#home.html">Accueil</a>
            <a href="flight.html">Réservation de Vol</a>
            <a href="hotel.html">Réservation d&apos;Hôtel</a>
            <a href="car.html">Réservation de Voiture</a>
            <a href="contact.html">Contact</a>
          </div>
        </nav>
        <div className="container">
          <h2>Bienvenue sur notre site de réservation de voyage</h2>
          <p>
            Nous vous aidons à réserver vos voyages facilement et rapidement.
            Que ce soit pour un vol, un hôtel ou une voiture de location, nous
            avons tout ce dont vous avez besoin.
          </p>

          <div className="service">
            <h3>Réservation de Vol</h3>
            <a href="flight.html">
              <img
                src="/img/depositphotos_3034919-stock-photo-departing-aircraft.jpg"
                alt="Réservation de Vol"
              />
            </a>
            <p>
              Réservez votre vol vers n&apos;importe quelle destination dans le
              monde. Cliquez <a href="flight.html">ici</a> pour réserver.
            </p>
          </div>

          <div className="service">
            <h3>Réservation d&apos;Hôtel</h3>
            <a href="hotel.html">
              <img
                src="/img/depositphotos_24553989-stock-photo-hotel.jpg"
                alt="Réservation d'Hôtel"
              />
            </a>
            <p>
              Trouvez et réservez les meilleurs hôtels. Cliquez{" "}
              <a href="hotel.html">ici</a> pour réserver.
            </p>
          </div>

          <div className="service">
            <h3>Réservation de Voiture</h3>
            <a href="car.html">
              <img
                src="/img/depositphotos_52489449-stock-photo-man-offering-a-car-key.jpg"
                alt="Réservation de Voiture"
              />
            </a>
            <p>
              Louez une voiture pour vos déplacements. Cliquez{" "}
              <a href="car.html">ici</a> pour réserver.
            </p>
          </div>
        </div>
        <footer className="footer">
          <p>&copy; 2024 Réservez votre Voyage. Tous droits réservés.</p>
          <p>
            <a href="contact.html">Contact</a> |
            <a href="privacy.html">Politique de confidentialité</a>
          </p>
        </footer>
      </>
    );
}
