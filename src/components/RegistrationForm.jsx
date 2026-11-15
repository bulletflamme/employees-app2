import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { VALIDATION_RULES } from '../validation/rules.js';

function RegistrationForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: '',
      secondName: '',
      email: '',
      password: '',
      phone: '',
      sex: 'male',
    },
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setSent(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="panel add-form">
      <h3>Регистрация</h3>
      <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Имя"
            {...register('firstName', VALIDATION_RULES.firstName)}
          />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Фамилия"
            {...register('secondName', VALIDATION_RULES.secondName)}
          />
          {errors.secondName && <p className="error">{errors.secondName.message}</p>}
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            {...register('email', VALIDATION_RULES.email)}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="password"
            className="form-control"
            placeholder="Пароль"
            {...register('password', VALIDATION_RULES.password)}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Телефон"
            {...register('phone', VALIDATION_RULES.phone)}
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>
        <div>
          <select className="form-select" {...register('sex', VALIDATION_RULES.sex)}>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
          {errors.sex && <p className="error">{errors.sex.message}</p>}
        </div>
        <div className="md:col-span-2">
          <Button
            type="submit"
            variant="outlined"
            disabled={isSubmitting}
            sx={{
              height: 45,
              color: '#fff',
              borderColor: '#fff',
              textTransform: 'none',
              fontFamily: 'inherit',
              fontSize: '1rem',
              '&:hover': { borderColor: '#fff' },
              '&.Mui-disabled': { color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.3)' },
            }}
          >
            Зарегистрироваться
          </Button>
          {sent && <p className="error">Данные отправлены</p>}
        </div>
      </div>
    </form>
  );
}

export default RegistrationForm;
