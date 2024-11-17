// Les props sont destructurées directement dans les parenthèses de la fonction
const Hello = ({ title, title2 }) => {
  const text = "Mon message";
  const colorText = "red";

  return (
    <div>
      <h1 style={{ backgroundColor: "pink", color: colorText }}>
        Hello world !! {text + "..."}
      </h1>

      {/* Affichage de valeur dynamique */}
      <p>{title}</p>
      <p>{title2}</p>
    </div>
  );
};

export default Hello;
