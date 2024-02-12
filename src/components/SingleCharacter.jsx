import PropTypes from "prop-types";
import gryffindor from "../images/gryffindor.jpg";
import hufflepuff from "../images/hufflepuff.jpg";
import ravenclaw from "../images/ravenclaw.png";
import slytherin from "../images/slytherin.jpg";
function SingleCharacter({ character, id }) {
  let houseShield;
  let houseClass;
  if (character.house === "Gryffindor") {
    houseShield = gryffindor;
    houseClass = "gryffindor";
  } else if (character.house === "Slytherin") {
    houseShield = slytherin;
    houseClass = "slytherin";
  } else if (character.house === "Hufflepuff") {
    houseShield = hufflepuff;
    houseClass = "hufflepuff";
  } else {
    houseShield = ravenclaw;
    houseClass = "ravenclaw";
  }

  return (
    <article className={houseClass} key={id}>
      <img
        className="sectionChar__card--image" 
        src={character.image || houseShield}
        alt="Character's photo or house shield"
      />
      <h4 className="sectionChar__card--nameTitle">{character.name}</h4>
      <p className="sectionChar__card--houseP">{character.house}</p>
      <p className="sectionChar__card--specieP">{character.species}</p>
    </article >
  );
}
SingleCharacter.propTypes = {
  character: PropTypes.object,
  id: PropTypes.string,
};

export default SingleCharacter;
