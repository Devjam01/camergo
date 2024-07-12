'use client';

import { useState } from "react";

// Définit et exporte le composant Home, qui retourne un élément JSX
export default function Home(): JSX.Element {
  // Déclare un état formData pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    date: '',
    passengers: 1,
    class: 'economy'
  });

  // Fonction handleChange pour mettre à jour les données du formulaire en fonction des changements
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Fonction validateFlightForm pour valider les données du formulaire avant soumission
  function validateFlightForm() {
    const { departure, destination, date, passengers } = formData;

    // Vérifie si tous les champs requis sont remplis et si le nombre de passagers est supérieur à zéro
    if (!departure || !destination || !date || passengers <= 0) {
      alert("Veuillez remplir tous les champs correctement.");
      return false;
    }
    
    return true;
  }

  // Fonction submitForm pour gérer la soumission du formulaire
  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Vérifie si le formulaire est valide avant de soumettre la requête POST
    if (validateFlightForm()) {
      fetch(`/api/reservation`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json' // Définit le type de contenu de la requête
        },
        body: JSON.stringify(formData), // Convertit les données du formulaire en format JSON
      }).then(response => {
        if (response.ok) {
          alert("Réservation réussie !"); // Affiche une alerte en cas de succès
        } else {
          return response.json().then(data => {
            alert(`Erreur: ${data.message}`); // Affiche une alerte avec le message d'erreur en cas d'échec
          });
        }
      }).catch(error => {
        console.error('Error:', error); // Affiche une erreur dans la console en cas d'échec de la requête
        alert("Erreur lors de la réservation."); // Affiche une alerte en cas d'échec de la requête
      });
    }
  }

  // Rendu du composant avec le formulaire et gestion des événements onChange
  return (
    <>
      <div className="container">
        <h2 className="vol">Réserver votre Vol</h2>
        <form onSubmit={submitForm}>
          {/* Champs de formulaire contrôlés par React avec gestion des événements onChange */}
          <label htmlFor="departure">Départ :</label>
          <input 
            type="text" 
            id="departure" 
            name="departure" 
            value={formData.departure}
            onChange={handleChange}
            required 
          />
          
          <label htmlFor="destination">Destination :</label>
          <input 
            type="text" 
            id="destination" 
            name="destination" 
            value={formData.destination}
            onChange={handleChange}
            required 
          />
          
          <label htmlFor="date">Date de départ :</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date}
            onChange={handleChange}
            required 
          />
          
          <label htmlFor="passengers">Nombre de passagers :</label>
          <input 
            type="number" 
            id="passengers" 
            name="passengers" 
            value={formData.passengers}
            onChange={handleChange}
            min="1" 
            required 
          />
          
          <label htmlFor="class">Classe :</label>
          <select 
            id="class" 
            name="class" 
            value={formData.class}
            onChange={handleChange}
            required
          >
            {/* Options du select pour choisir la classe de vol */}
            <option value="economy">Économique</option>
            <option value="business">Affaires</option>
            <option value="first">Première</option>
          </select>
          
          {/* Bouton de soumission du formulaire */}
          <button type="submit">Réserver</button>
        </form>
      </div>
    </>
  );
}
