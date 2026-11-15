import { useState } from 'react';
import AppInfo from './components/AppInfo.jsx';
import SearchPanel from './components/SearchPanel.jsx';
import EmployeesList from './components/EmployeesList.jsx';
import EmployeesAddForm from './components/EmployeesAddForm.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';

const searchEmployees = (items, term) => {
  const query = term.trim().toLowerCase();
  if (!query) return items;
  return items.filter((item) => item.name.toLowerCase().includes(query));
};

const filterEmployees = (items, filter) => {
  switch (filter) {
    case 'promotion':
      return items.filter((item) => item.promotion);
    case 'salary':
      return items.filter((item) => item.salary > 1000);
    default:
      return items;
  }
};

function App() {
  const [employees, setEmployees] = useState([]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const addEmployee = (name, salary) => {
    const employee = { id: Date.now(), name, salary, bonus: false, promotion: false };
    setEmployees((items) => [...items, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees((items) => items.filter((item) => item.id !== id));
  };

  const toggleProp = (id, prop) => {
    setEmployees((items) =>
      items.map((item) => (item.id === id ? { ...item, [prop]: !item[prop] } : item))
    );
  };

  const visibleEmployees = filterEmployees(searchEmployees(employees, term), filter);
  const bonusCount = employees.filter((item) => item.bonus).length;
  const emptyText =
    employees.length === 0
      ? 'Сотрудников пока нет. Добавьте первого в форме ниже'
      : 'Никого не нашли. Измените поиск или фильтр';

  return (
    <main className="mx-auto max-w-[1280px] px-[16px] pt-[24px] pb-[16px] md:px-[56px]">
      <AppInfo total={employees.length} bonusCount={bonusCount} />
      <SearchPanel term={term} onTermChange={setTerm} filter={filter} onFilterChange={setFilter} />
      <EmployeesList
        employees={visibleEmployees}
        emptyText={emptyText}
        onToggleProp={toggleProp}
        onDelete={deleteEmployee}
      />
      <EmployeesAddForm onAdd={addEmployee} />
      <RegistrationForm />
    </main>
  );
}

export default App;
