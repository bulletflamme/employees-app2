import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import { employeeSchema } from '../schema.js';

function EmployeesAddForm({ onAdd }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employeeSchema),
    defaultValues: { name: '', salary: '' },
  });

  const onSubmit = (data) => {
    onAdd(data.name, Number(data.salary));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="panel add-form">
      <h3>Добавьте нового сотрудника</h3>
      <div className="flex flex-col gap-[14px] md:flex-row md:items-start">
        <div className="md:grow">
          <input
            type="text"
            className="form-control"
            placeholder="Как его зовут?"
            {...register('name')}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div className="md:grow">
          <input
            type="number"
            className="form-control"
            placeholder="З/П в $?"
            {...register('salary')}
          />
          {errors.salary && <p className="error">{errors.salary.message}</p>}
        </div>
        <Button
          type="submit"
          variant="outlined"
          sx={{
            height: 45,
            color: '#fff',
            borderColor: '#fff',
            textTransform: 'none',
            fontFamily: 'inherit',
            fontSize: '1rem',
            '&:hover': { borderColor: '#fff' },
          }}
        >
          Добавить
        </Button>
      </div>
    </form>
  );
}

export default EmployeesAddForm;
