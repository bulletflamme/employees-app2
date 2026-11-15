import EmployeesListItem from './EmployeesListItem.jsx';

function EmployeesList({ employees, emptyText, onToggleProp, onDelete }) {
  if (employees.length === 0) {
    return <div className="employees-list empty">{emptyText}</div>;
  }

  return (
    <ul className="employees-list">
      {employees.map((employee) => (
        <EmployeesListItem
          key={employee.id}
          {...employee}
          onToggleProp={onToggleProp}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default EmployeesList;
