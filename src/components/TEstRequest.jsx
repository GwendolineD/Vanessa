import { useState, useEffect } from "react";
import axios from "axios";

export default function TEstRequest() {
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fonction asynchrone pour faire la requête
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // Avec axios la data brute est toujours à la clé 'data'
        console.log("data>>>", response.data);

        // Mise à jour du state pour afficher la liste de post
        setPostsList(response.data);

        // Mise à jour du state pour que la ternaire soit réévaluée et que le loader laisse place à la liste
        setIsLoading(false);
      } catch (error) {
        // Code exécuté s'il y a un soucie au niveau du code du try
        console.log(("error>>>", error));
      }
    };

    fetchdata();
  }, []);

  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <div>
      <h1>Liste des posts :</h1>

      <div>
        {/* Affichage des éléments du tableau */}
        {postsList.map((post) => {
          // Permet de voir à quoi on a accés à chaque tour du .map()
          console.log("=====>", post);

          return (
            <div key={post.id}>
              toto (à compléter pour afficher les infos du post)
            </div>
          );
        })}
      </div>
    </div>
  );
}
