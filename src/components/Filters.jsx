import NamesFilter from "./NamesFilter";
import HousesFilter from "./HousesFilter";
import "../styles/core/Variables.scss";
import "../styles/layout/Filters.scss";
import PropTypes from "prop-types";

function Filters({
  nameFilter,
  handleName,
  filteredNames,
  handleHouse,
  houseFilter,
  handleRestart,
}) {
  return (
    <div>
      <NamesFilter
        nameFilter={nameFilter}
        handleName={handleName}
        filteredNames={filteredNames}
      />
      <HousesFilter
        houseFilter={houseFilter}
        handleHouse={handleHouse}
        filteredNames={filteredNames}
      />
      <button className="startButton" onClick={(ev) => handleRestart(ev.target.value)}>Start again!</button>
    </div>
  );
}
Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  handleName: PropTypes.func,
  filteredNames: PropTypes.array,
  handleHouse: PropTypes.func,
  houseFilter: PropTypes.string,
  handleRestart: PropTypes.func,
};

export default Filters;
