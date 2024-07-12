// Constante exportée pour un comportement dynamique forcé
export const dynamic = 'force-dynamic';

// Fonction asynchrone pour gérer les requêtes POST
export async function POST(request: Request) {
    // Attend que les données de la requête soient converties en JSON
    const data = await request.json();
    
    // Retourne une réponse JSON contenant les données reçues
    return Response.json({
       receivedData: data,
    });
}
