export default function Home(): JSX.Element {
  function validateHotelForm() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    if (new Date(checkout) <= new Date(checkin)) {
      alert('La date de départ doit être après la date d\'arrivée.');
      return false;
    }
    return true; 
  }

  return (
    <>
      <div className="container">
        <h2 class="hotel">Réserver votre Hôtel</h2>
        <form action="/submit-hotel-reservation.php" method="post">
            <label htmlFor="name">Nom complet :</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="checkin">Date d'arrivée :</label>
            <input type="date" id="checkin" name="checkin" required />
            
            <label htmlFor="checkout">Date de départ :</label>
            <input type="date" id="checkout" name="checkout" required />
            
            <label htmlFor="room-type">Type de chambre :</label>
            <select id="room-type" name="room-type" required>
                <option value="single">Simple</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
            </select>
            
            <label htmlFor="special-requests">Demandes spéciales :</label>
            <textarea id="special-requests" name="special-requests" rows={4}></textarea>
            
            <button type="submit">Réserver</button>
        </form>
      </div>
    </>
  );
}
