// Constante exportée pour un comportement dynamique forcé
import getClient from "@/database/client";

export const dynamic = 'force-dynamic';

// Fonction asynchrone pour gérer les requêtes POST
export async function POST(request: Request) {
    // Attend que les données de la requête soient converties en JSON
    const data = await request.json();

    console.log('data', data);
    const client = await getClient();
    const results = await client.query(`
        INSERT INTO reservation
            (date_reservation, order_date, total_amount)
        VALUES
            (123, '2022-01-01', 100.00);`);


    // id_reservation // auto
    // date_start
    // date_end
    // guests
    // type_reservation
    // details_reservation
    // statut
    // montant_total
    // id_voiture
    // id_hotel
    // id_vol
    // email

    // Nombre de personnes :
    // Type de chambre :
    
    // Retourne une réponse JSON contenant les données reçues
    return Response.json({
       receivedData: data,
    });
}
