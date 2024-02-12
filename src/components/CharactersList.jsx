import SingleCharacter from "./SingleCharacter";
import "../styles/layout/CharactersList.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharactersList({ filteredNames }) {

  const renderCharacters = filteredNames.map((character, i) => {
    return (
      <li className="sectionChar__card" key={i}>
        <Link to={`/details/${character.id}`} className="link">
          <SingleCharacter character={character} id={character.id} />
        </Link>
      </li>
    );
    
  });


  return (
    <section>
      <ul className="sectionChar">{renderCharacters}</ul>
    </section>
  );
}
CharactersList.propTypes = {
  filteredNames: PropTypes.array,
};
export default CharactersList;
