import React from 'react';

const api = {
  key: "fb4af5240369205924b5ed77af11e36d",
  base: "api.openweathermap.org/data/2.5/"
}

function App() {

  const dateBuilder = (d) => {
    let date = String(new window.Date())
    date = date.slice(3,15)

    return `${date}` 
  }

  return (
    <div className="app">
      <main>
        <div className ="search-box">
          <input type="text" className="search-bar" placeholder="Search.."></input>
        </div>
        
        <div className="location-box">
          <div className='location'>New York City</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>          
      </main>
    </div>
  );
}

export default App;
