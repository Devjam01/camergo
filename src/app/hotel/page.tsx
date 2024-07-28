'use client';

import { useState, useEffect } from "react";

type Hotel = {
  id_hotel: number;
  nom: string;
  adresse: string;
  ville: string;
  pays: string;
  nombre_etoiles: string;
  services: string;
  description: string;
  prix_nuit: number;
  telephone: string;
}

type FormatData = {
  hotelId?: number;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  roomType: 'standard' | 'deluxe';
};

// Définit et exporte le composant Home, qui retourne un élément JSX
export default function HotelPage(): JSX.Element {
  // Déclare un état formData pour gérer les données du formulaire
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [formData, setFormData] = useState<FormatData>({
    hotelId: undefined,
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
    roomType: "standard",
  });

  useEffect(() => {
    fetch(`/api/hotel`).then(response => response.json()).then(data => {
      if (!data) return;
      setHotels(data.hotels as Hotel[]);
      console.log('hotels', data.hotels);
    });
  }, []);

  // Fonction handleChange pour mettre à jour les données du formulaire en fonction des changements
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Fonction validateHotelForm pour valider les données du formulaire avant soumission
  function validateHotelForm() {
    const { hotelId, checkInDate, checkOutDate, guests } = formData;

    // Vérifie si tous les champs requis sont remplis et si le nombre de personnes est supérieur à zéro
    if (!hotelId || !checkInDate || !checkOutDate || guests <= 0) {
      alert("Veuillez remplir tous les champs correctement.");
      return false;
    }

    // Vérifie si la date de départ est ultérieure à la date d'arrivée
    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      alert("La date de départ doit être ultérieure à la date d'arrivée.");
      return false;
    }
    
    return true;
  }

  // Fonction submitForm pour gérer la soumission du formulaire
  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Vérifie si le formulaire est valide avant de soumettre la requête POST
    if (validateHotelForm()) {
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
        <h2 className="hotel">Réserver votre Hôtel</h2>
        <form onSubmit={submitForm}>
          {/* Champs de formulaire contrôlés par React avec gestion des événements onChange */}
          <label htmlFor="hotelName">Sélectionnez l&apos;Hôtel :</label>
          <select
            name="hotel"
            title="title"
            onChange={(event) => {
              formData.hotelId = Number.parseInt(event.target.value, 10);
              setFormData({
                ...formData,
              });
            }}
          >
            {hotels && hotels.map((hotel) => (
              <option key={hotel.id_hotel} value={hotel.id_hotel}>
                {hotel.nom}
              </option>
            ))}
          </select>
          {/* TODO: USe a select to show all hotels here, and then pass the id_hotel to the /api/reservation route */}

          <label htmlFor="checkInDate">Date d&apos;arrivée :</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="checkOutDate">Date de départ :</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="guests">Nombre de personnes :</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
          />

          <label htmlFor="roomType">Type de chambre :</label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            {/* Options du select pour choisir le type de chambre */}
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
          </select>

          {/* Choose the room */}

          {/* Bouton de soumission du formulaire */}
          <button type="submit">Réserver</button>
        </form>
      </div>
    </>
  );
}
