import CharactersList from "./CharactersList.jsx";
import Filters from "./Filters.jsx";
import PropTypes from "prop-types";

function Home({
  nameFilter,
  handleName,
  filteredNames,
  handleHouse,
  houseFilter,
  handleRestart,
}) {
  return (
    <section>
      <Filters
        nameFilter={nameFilter}
        handleName={handleName}
        filteredNames={filteredNames}
        handleHouse={handleHouse}
        houseFilter={houseFilter}
        handleRestart={handleRestart}
      />
      <CharactersList filteredNames={filteredNames} />
    </section>
  );
}
Home.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  handleName: PropTypes.func,
  filteredNames: PropTypes.array,
  handleHouse: PropTypes.func,
  houseFilter: PropTypes.string,
  handleRestart: PropTypes.func,
};

export default Home;
