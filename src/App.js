import exampleResponse from './data.json'

import Events from './containers/Events'
import './App.css';

function App() {

  return (
    <div className="d-flex">
      <Events data={exampleResponse.data} />
      </div>
  );
}

export default App;
