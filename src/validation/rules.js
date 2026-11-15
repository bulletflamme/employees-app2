export const VALIDATION_RULES = {
  firstName: {
    required: 'Введите имя',
  },
  secondName: {
    required: 'Введите фамилию',
  },
  email: {
    required: 'Введите email',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Некорректный email',
    },
  },
  password: {
    required: 'Введите пароль',
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
      message: 'Минимум 8 символов, буквы и цифры',
    },
  },
  phone: {
    required: 'Введите телефон',
    pattern: {
      value: /^\+?\d{10,15}$/,
      message: 'Некорректный телефон, например +375290000000',
    },
  },
  sex: {
    required: 'Выберите пол',
  },
};
