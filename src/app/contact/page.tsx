'use client'

import { useEffect, useState } from "react";

/*function validateContactForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  if (!name || !email || !subject || !message) {
      alert("Veuillez remplir tous les champs.");
      return false;
  }
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return false;
  }
  return true; 
}*/

// fetch("/api/contact", {
//   method: 'POST'
// })

export default function Contact(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Examples de useEffect (hook)
  // useEffect(() => {
  //   console.log("each times");
  // });
  // useEffect(() => {
  //   console.log('only once');
  //   // get data
  // }, []);
  // useEffect(() => {
  //   console.log("name", name);
  // }, [name]);

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch(`/api/contact`, {
      method: "POST",
      body: JSON.stringify({
        name,
      }),
    });
  }



  return (
    <>
      <div className="container">
        <h2 className="contact">Contact</h2>
        <p>Pour toute question ou assistance, veuillez nous contacter :</p>
        <form onSubmit={submitForm}>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Sujet :</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows={4} required></textarea>

          <button type="submit">Envoyer</button>
        </form>

        <p>
          Email : contact@reservation-voyage.com
          <br />
          Téléphone : +33 123 456 789
        </p>
      </div>
    </>
  );
}
