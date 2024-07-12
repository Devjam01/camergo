'use client';

import { useState } from "react";

// Définit et exporte le composant Car, qui retourne un élément JSX
export default function Car(): JSX.Element {
  // Déclare un état formData pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    pickupLocation: '',
    returnLocation: '',
    pickupDate: '',
    returnDate: '',
    carType: 'compact'
  });

  // Fonction handleChange pour mettre à jour les données du formulaire en fonction des changements
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Fonction validateCarForm pour valider les données du formulaire avant soumission
  function validateCarForm() {
    const { pickupLocation, returnLocation, pickupDate, returnDate } = formData;

    // Vérifie si tous les champs requis sont remplis
    if (!pickupLocation || !returnLocation || !pickupDate || !returnDate) {
      alert("Veuillez remplir tous les champs correctement.");
      return false;
    }

    // Vérifie si la date de retour est ultérieure à la date de prise en charge
    if (new Date(pickupDate) >= new Date(returnDate)) {
      alert("La date de retour doit être ultérieure à la date de prise en charge.");
      return false;
    }

    return true;
  }

  // Fonction submitForm pour gérer la soumission du formulaire
  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Vérifie si le formulaire est valide avant de soumettre la requête POST
    if (validateCarForm()) {
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
        <h2 className="voiture">Réservation de Voiture</h2>
        <form onSubmit={submitForm}>
          {/* Champs de formulaire contrôlés par React avec gestion des événements onChange */}
          <label htmlFor="pickupLocation">Lieu de prise en charge :</label>
          <input 
            type="text" 
            id="pickupLocation" 
            name="pickupLocation" 
            value={formData.pickupLocation}
            onChange={handleChange}
            required 
          />
          
          <label htmlFor="returnLocation">Lieu de retour :</label>
          <input 
            type="text" 
            id="returnLocation" 
            name="returnLocation" 
            value={formData.returnLocation}
            onChange={handleChange}
            required 
          />
          
          <label htmlFor="pickupDate">Date de prise en charge :</label>
          <input 
            type="date" 
            id="pickupDate" 
            name="pickupDate" 
            value={formData.pickupDate}
            onChange={handleChange}
            required 
          />
          
          <label htmlFor="returnDate">Date de retour :</label>
          <input 
            type="date" 
            id="returnDate" 
            name="returnDate" 
            value={formData.returnDate}
            onChange={handleChange}
            required 
          />
          
          <label htmlFor="carType">Type de voiture :</label>
          <select 
            id="carType" 
            name="carType" 
            value={formData.carType}
            onChange={handleChange}
            required
          >
            {/* Options du select pour choisir le type de voiture */}
            <option value="compact">Compacte</option>
            <option value="sedan">Berline</option>
            <option value="suv">SUV</option>
            <option value="van">Fourgonnette</option>
          </select>
          {/* Bouton de soumission du formulaire */}
          <button type="submit">Réserver</button>
        </form>
      </div>
    </>
  );
}
