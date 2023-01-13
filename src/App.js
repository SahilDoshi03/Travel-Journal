import './App.css';
import data from '../src/data.js'
import Cards from './components/Cards';
import Header from './components/Header';

function App() {
  
  const cards = data.map(item => {
    return(
      <Cards
      key = {item.id}
      item = {item}
    />
    )

  })

  return (
    <div className="App">
      <Header/>
      <section className="cards">
        {cards}
      </section>
    </div>
  );
}

export default App;
