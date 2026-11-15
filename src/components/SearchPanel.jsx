const filters = [
  { name: 'all', label: 'Все сотрудники' },
  { name: 'promotion', label: 'На повышение' },
  { name: 'salary', label: 'З/П больше 1000$' },
];

function SearchPanel({ term, onTermChange, filter, onFilterChange }) {
  return (
    <section className="panel search-panel">
      <input
        type="text"
        className="form-control"
        placeholder="Найти сотрудника"
        value={term}
        onChange={(e) => onTermChange(e.target.value)}
      />
      <div className="flex flex-wrap gap-[12px]">
        {filters.map(({ name, label }) => (
          <button
            key={name}
            type="button"
            className={`btn ${filter === name ? 'btn-light' : 'btn-outline-light'}`}
            onClick={() => onFilterChange(name)}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

export default SearchPanel;
