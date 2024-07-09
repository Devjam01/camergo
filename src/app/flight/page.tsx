export default function Home(): JSX.Element {
  function validateFlightForm() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    
    if (!departure || !destination || !date || !passengers) {
      alert("Veuillez remplir tous les champs.");
      return false;
    }
    
    if (passengers <= 0) {
      alert("Nombre de passagers doit être supérieur à zéro.");
      return false;
    }
    
    return true;
  }
  
  return (
    <>
      <div className="container">
        <h2 class="vol">Réserver votre Vol</h2>
        <form action="/submit-flight-reservation.php" method="post">
            <label htmlFor="departure">Départ :</label>
            <input type="text" id="departure" name="departure" required />
            
            <label htmlFor="destination">Destination :</label>
            <input type="text" id="destination" name="destination" required />
            
            <label htmlFor="date">Date de départ :</label>
            <input type="date" id="date" name="date" required />
            
            <label htmlFor="passengers">Nombre de passagers :</label>
            <input type="number" id="passengers" name="passengers" min="1" required />
            
            <label htmlFor="class">Classe :</label>
            <select id="class" name="class" required>
                <option value="economy">Économique</option>
                <option value="business">Affaires</option>
                <option value="first">Première</option>
            </select>
            
            <button type="submit">Réserver</button>
        </form>
      </div>
    </>
  );
}
