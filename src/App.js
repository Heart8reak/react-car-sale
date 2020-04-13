import React from 'react';

import Header from './components/Header'
import Total from './components/Total';

const App = props => {
  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <div className="box">
          <Total />
        </div>
      </div>
    </div>
  );
}

export default App;
