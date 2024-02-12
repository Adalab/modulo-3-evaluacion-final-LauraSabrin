import PropTypes from "prop-types";

function NamesFilter({ nameFilter, handleName }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <label className="fieldset__label" htmlFor="name">
            Write a name!
          </label>
          <input
            className="fieldset__input"
            type="text"
            id="name"
            name="name"
            placeholder="Ex: Dobby"
            value={nameFilter}
            onChange={(ev) => handleName(ev.target.value)}
          />
        </fieldset>
      </form>
    </div>
  );
}
NamesFilter.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  handleName: PropTypes.func,
};

export default NamesFilter;
