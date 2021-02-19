import { useEffect } from 'react'
import exampleResponse from './data.json'

import Events from './containers/Events'
import './App.css';

function App() {
  useEffect(() => {
    console.log(exampleResponse.data)
  }, [])
  return (
    <div style={{display:'flex'}}>
      <Events data={exampleResponse.data} />
      </div>
  );
}

export default App;
