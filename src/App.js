import ItemList from './components/ItemList';

function App() {
  const costs = [
    { date: new Date(2021, 2, 12), description: 'MacBook', amount: 999 },
    { date: new Date(2020, 1, 14), description: 'Car', amount: 356000 },
    { date: new Date(2022, 3, 2), description: 'Gifts', amount: 3500 },
  ];
  return (
    <div className="container">
      <h1>Expenses App</h1>
      <ItemList props={costs} />
    </div>
  );
}

export default App;
