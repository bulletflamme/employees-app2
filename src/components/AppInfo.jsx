function AppInfo({ total, bonusCount }) {
  return (
    <header className="panel app-info">
      <h1>Учет сотрудников компании №</h1>
      <h2>Общее число сотрудников: {total}</h2>
      <h2>Премию получат: {bonusCount}</h2>
    </header>
  );
}

export default AppInfo;
