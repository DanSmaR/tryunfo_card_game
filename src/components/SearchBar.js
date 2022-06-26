import React from 'react';

function SearchBar(props) {
  const { nameFilter, onInputFilterChange, rareFilter, cards } = props;
  return (
    <form className="search-cards">
      <h3>Filtros de Busca</h3>
      <p>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Nome"
          value={ nameFilter }
          onChange={ onInputFilterChange }
          name="nameFilter"
        />
      </p>
      <p>
        <select
          data-testid="rare-filter"
          type="text"
          placeholder="Nome"
          value={ rareFilter }
          onChange={ onInputFilterChange }
          name="rareFilter"
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </p>
    </form>
  );
}

export default SearchBar;
