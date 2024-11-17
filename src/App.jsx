import "./App.css";
import { useState } from "react";

import Hello from "./components/Hello";
import TEstRequest from "./components/TEstRequest";

function App() {
  // const usersList = [
  //   {
  //     id: "123",
  //     name: "Toto",
  //     gender: "male",
  //     age: 13,
  //   },
  //   {
  //     id: "124",
  //     name: "Alfi",
  //     gender: "male",
  //     age: 36,
  //   },
  //   {
  //     id: "125",
  //     name: "Sophie",
  //     gender: "female",
  //     age: 54,
  //   },
  // ];

  // Un tableau peut stocker des éléments JSX dont on utilise la méthode JS '.map()' pour créer un tableau d'élément JSX à partir du tableau qui stocke nos infos
  // const tab = [<p>1</p>, <p>2</p>, <p>3</p>];

  // const func = (arg1) => {
  //   console.log("clic", arg1);
  // };

  const [infos, setInfos] = useState(["un", "deux"]);
  const [user, setUser] = useState({
    name: "toto",
    age: 13,
  });

  return (
    <div className="app  ">
      {/* State stockant un tableau ---------- */}
      <button
        onClick={() => {
          // Pour que react détecte qu'il y a eu un changement de valeur :

          // 1 - Copie du state
          const newTab = [...infos];

          // 2 - Modif de la copie
          newTab.push("quatre");

          // 3 - Envoi de la copie au state comme nouvelle valeur
          setInfos(newTab);
        }}
      >
        Valeur : {infos}
      </button>

      {/* State stockant un objet ---------- */}
      <button
        onClick={() => {
          // Pour que react détecte qu'il y a eu un changement de valeur :

          // 1 - Copie du state
          const newObj = { ...user };

          // 2 - Modif de la copie
          newObj.name = "tata";

          // 3 - Envoi de la copie au state comme nouvelle valeur
          setUser(newObj);
        }}
      >
        Valeur : {user.name}
      </button>

      <TEstRequest />

      {/* -- Au clic ------------------------ */}
      {/* <button onClick={() => console.log("clic")}>Cliquer ici</button> */}
      {/* <button onClick={func}>Cliquer ici</button> */}
      {/* <button onClick={() => func("toto")}>Cliquer ici</button> */}

      {/* ------------------------------------------------------------ */}
      {/* -- AFFICHER LES ELEMENTS D'UN TABLEAU------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* <h1>Hello</h1>

      <div>
        {usersList.map(({ name, age, id }) => {
          // Permet de voir à quoi on a accés à chaque tour du .map()
          console.log(name, age, id);

          return (
            <div key={id}>
              <p>Nom : {name} </p>
              <p>
                Age : {age} {age < 18 && "(mineur)"}
              </p>
            </div>
          );
        })}
      </div> */}

      {/* ----------------------------------------- */}
      {/* -- APPEL DE COMPOSANT ------------------- */}
      {/* ----------------------------------------- */}

      {/*  -- Appel de composant sans props */}
      {/* <Hello /> */}

      {/*  -- Appel de composant avec props */}
      {/* <Hello title="Mon titre" title2={str} /> */}

      {/* -- Appel de composant conditionel */}
      {/* {usersList.length > 2 && <Hello />}  */}
    </div>
  );
}

export default App;
