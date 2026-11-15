# Учет сотрудников

React 19 + Vite. Bootstrap подключен через CDN (cdnjs), Tailwind используется для адаптивной раскладки, MUI Button — для кнопки формы, react-icons — для иконок.

## Запуск

```
npm install
npm run dev
```

Сборка: `npm run build`.

## Структура

- `src/App.jsx` — состояние (сотрудники, поиск, фильтр) и все действия
- `src/components/AppInfo.jsx` — шапка со счетчиками
- `src/components/SearchPanel.jsx` — поиск и фильтры
- `src/components/EmployeesList.jsx`, `EmployeesListItem.jsx` — список
- `src/components/EmployeesAddForm.jsx` — форма добавления сотрудника на React Hook Form
- `src/schema.js` — схема валидации формы на Zod
- `src/components/RegistrationForm.jsx` — форма из задания (имя, фамилия, email, пароль, телефон, пол), правила `required` и `pattern` лежат в `src/validation/rules.js`
