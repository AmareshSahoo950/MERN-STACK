import Card from './components/Cards'
import './App.css'
import locations from "./locations.json"

function App() {
  return (
    <main>
      <h1>All the cards are here.</h1>
      <div className='card-wrapper'>
        {locations.map((location, idx) =>
        (
          <Card key={idx} location = {location}/>
        )
        )}
      </div>
    </main>
  )
}

export default App
