export default function Car(): JSX.Element {
  return (
    <div className="container">
      <h2 class="voiture">Réservation de Voiture</h2>
      <form action="/submit-car-reservation.php" method="post">
        <label htmlFor="pickup-location">Lieu de prise en charge :</label>
        <input type="text" id="pickup-location" name="pickup-location" required />
        
        <label htmlFor="return-location">Lieu de retour :</label>
        <input type="text" id="return-location" name="return-location" required />
        
        <label htmlFor="pickup-date">Date de prise en charge :</label>
        <input type="date" id="pickup-date" name="pickup-date" required />
        
        <label htmlFor="return-date">Date de retour :</label>
        <input type="date" id="return-date" name="return-date" required />
        
        <label htmlFor="car-type">Type de voiture :</label>
        <select id="car-type" name="car-type" required>
          <option value="compact">Compacte</option>
          <option value="sedan">Berline</option>
          <option value="suv">SUV</option>
          <option value="van">Fourgonnette</option>
        </select>
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
}
