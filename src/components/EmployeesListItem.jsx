import { FaCookieBite, FaTrash } from 'react-icons/fa';

function EmployeesListItem({ id, name, salary, bonus, promotion, onToggleProp, onDelete }) {
  return (
    <li className={`employee flex items-center${promotion ? ' promotion' : ''}`}>
      <div className="grow">
        <span className="employee-name" onClick={() => onToggleProp(id, 'promotion')}>
          {name}
        </span>
      </div>
      <span className="w-24 text-center sm:w-40">{salary}$</span>
      <div className="flex items-center gap-[8px]">
        <button
          type="button"
          className={`icon-btn cookie${bonus ? ' active' : ''}`}
          onClick={() => onToggleProp(id, 'bonus')}
        >
          <FaCookieBite />
        </button>
        <button type="button" className="icon-btn trash" onClick={() => onDelete(id)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default EmployeesListItem;
