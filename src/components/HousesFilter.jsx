import PropTypes from "prop-types";
function HousesFilter({ handleHouse, houseFilter }) {
  return (
    <div>
      <form action="" method="post">
        <fieldset className="fieldset">
          <label className="fieldset__label" htmlFor="house">
            Select a house!
          </label>
          <select
            className="fieldset__select"
            type="text"
            id="house"
            name="house"
            value={houseFilter}
            onChange={(ev) => handleHouse(ev.target.value)}
          >
            <option value="Houses" disabled>
              Houses
            </option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
      
        </fieldset>
      </form>
    </div>
  );
}
HousesFilter.propTypes = {
  handleHouse: PropTypes.func,
  houseFilter: PropTypes.string,
};

export default HousesFilter;
