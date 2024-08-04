function App() {

  const places = [
    {name: 'Paris', visited: true},
    {name: 'New York', visited: false},
    {name: 'Tokyo', visited: true},
    {name: 'Sydney', visited: false},
    {name: 'Rome', visited: true}
  ];

  return (
    <>
      <h1>Travel Itinerary Planner</h1>
      <ul>
        {places.map((place, index) => 
          <li 
            key={index} 
            className={place.visited ? 'visited' : 'not-visited'}
          >
            {place.name}
            {!place.visited && <span className="not-visited-message"> (Not Visited)</span>}
          </li>
        )}
      </ul>
    </>
  );
}

export default App;
