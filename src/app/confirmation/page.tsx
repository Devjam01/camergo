'use client';

import { useEffect, useState } from "react";

function ReservationForm() {
  // Déclare des états pour gérer les valeurs des champs du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Fonction pour soumettre le formulaire
  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Effectue une requête POST vers l'API /api/reservation
    fetch('/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Définit le type de contenu de la requête
      },
      body: JSON.stringify({ // Convertit les données du formulaire en format JSON
        name,
        email,
        date,
        time,
      }),
    })
    .then(response => response.json()) // Convertit la réponse en JSON
    .then(data => {
      console.log('Success:', data); // Affiche les données reçues en cas de succès
    })
    .catch((error) => {
      console.error('Error:', error); // Affiche une erreur en cas d'échec de la requête
    });
  }

  // Rendu du formulaire avec des champs contrôlés par les états et gestion des événements onChange
  return (
    <form onSubmit={submitForm}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Met à jour l'état 'name' lors du changement
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Met à jour l'état 'email' lors du changement
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)} // Met à jour l'état 'date' lors du changement
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)} // Met à jour l'état 'time' lors du changement
        />
      </label>
      <br />
      <button type="submit">Reserver</button> {/*Bouton de soumission du formulaire*/}
    </form>
  );
}

export default ReservationForm; // Exporte le composant ReservationForm par défaut
