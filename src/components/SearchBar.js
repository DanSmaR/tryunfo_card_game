import React from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {
  const { nameFilter, rareFilter, trunfoFilter, onInputFilterChange } = props;
  return (
    <form className="search-cards">
      <h3>Filtros de Busca</h3>
      <p>
        <input
          className="form-control"
          type="text"
          data-testid="name-filter"
          placeholder="Nome"
          value={ nameFilter }
          onChange={ onInputFilterChange }
          name="nameFilter"
          disabled={ trunfoFilter }
        />
      </p>
      <p>
        <select
          className="form-select"
          data-testid="rare-filter"
          type="text"
          placeholder="Raridade"
          value={ rareFilter }
          onChange={ onInputFilterChange }
          name="rareFilter"
          disabled={ trunfoFilter }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </p>
      <p>
        <label htmlFor="trunfo-filter" className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="trunfoFilter"
            id="trunfo-filter"
            data-testid="trunfo-filter"
            checked={ trunfoFilter }
            onChange={ onInputFilterChange }
          />
          Super Trunfo
        </label>
      </p>
    </form>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  onInputFilterChange: PropTypes.func.isRequired,
};
