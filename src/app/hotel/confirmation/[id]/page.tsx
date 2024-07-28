'use client';

import { useState, useEffect } from "react";

export default function HotelPage(): JSX.Element {
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

          {/* Bouton de soumission du formulaire */}
          <button type="submit">Réserver</button>
        </form>
      </div>
    </>
  );
}
