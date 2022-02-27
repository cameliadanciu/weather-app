import React from 'react';

const api = {
  key: "fb4af5240369205924b5ed77af11e36d",
  base: "api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="app">
      <main>
        <div className ="search-box">
          <input type="text" className="search-bar" placeholder="Search.."></input>
        </div>
      </main>
    </div>
  );
}

export default App;
