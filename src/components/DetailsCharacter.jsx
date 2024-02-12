import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import wand from "../images/wand.svg";
import "../styles/layout/DetailsCharacter.scss";
import gryffindor from "../images/gryffindor.jpg";
import hufflepuff from "../images/hufflepuff.jpg";
import ravenclaw from "../images/ravenclaw.png";
import slytherin from "../images/slytherin.jpg";
import gryffindorShield from "../images/gryffindorNoFondo.png";
import slytherinShield from "../images/slytherinNoFondo.png";
import ravenclawShield from "../images/ravenclawNoFondo.png";
import hufflepuffShield from "../images/hufflepuffNofondo.png";
import ls from "../services/localStorage.js";
// import { useEffect } from "react-router-dom";

function DetailsCharacter({ filteredNames}) {
  const { charId } = useParams();

  const clickedChar = filteredNames.find(
    (character) => character.id === charId
  );


  const aliveClass = "characterCard alive";
  const deadClass = "characterCard dead";
  let deadOrAlive;
  let statusIcon;
  if (clickedChar.alive === true) { 
    deadOrAlive = aliveClass;
    statusIcon = "🌈Alive🍃"
      } else {
    deadOrAlive = deadClass;
    statusIcon = "💀Dead🪦"
  }

  let houseShield;
  let shieldIcon;
  let houseClass;
  if (clickedChar.house === "Gryffindor") {
    houseShield = gryffindor;
    shieldIcon = gryffindorShield;
    houseClass = "sectionCardGryffindor";
    } else if (clickedChar.house === "Slytherin") {
    houseShield = slytherin;
    shieldIcon = slytherinShield;
    houseClass = "sectionCardSlytherin";
  } else if (clickedChar.house === "Hufflepuff") {
    houseShield = hufflepuff;
    shieldIcon = hufflepuffShield;
    houseClass = "sectionCardHufflepuff";
  } else {
    houseShield = ravenclaw;
    shieldIcon = ravenclawShield;
    houseClass = "sectionCardRavenclaw";
  }

  return (
    <section>
      <Link to="/" className="linkWand">
        <div className="divBack">
          <img
            className="divBack__img"
            src={wand}
            alt="Wand button to come back"
          />
          <p className="divBack__p">Come Back</p>
        </div>
      </Link>
      <section className={houseClass}>
      <article className={deadOrAlive}>
        <img className="characterCard__image" src={clickedChar.image || houseShield} alt="" />
        <h4 className="characterCard__nameTitle">{clickedChar.name}</h4>
        <h5 className="characterCard__nickNameTitle">
          {clickedChar.alternate_names}
        </h5>
        <p className="characterCard__p house">House: {clickedChar.house}<img className="shieldIcon" src={shieldIcon}></img></p>
        <p className="characterCard__p specie">Specie: {clickedChar.species}</p>
        <p className="characterCard__p patronus">Patronus: {clickedChar.patronus}</p>
        <p className="characterCard__p gender">Gender: {clickedChar.gender}</p>
        <p className="characterCard__p status">Status: {statusIcon}</p>
      </article>
      </section>
    </section>
  );
}
DetailsCharacter.propTypes = {
  filteredNames: PropTypes.array,
};

export default DetailsCharacter;
