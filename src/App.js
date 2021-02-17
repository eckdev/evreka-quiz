import { useEffect } from 'react'
import exampleResponse from './data.json'

import Events from './containers/Events'
import Details from './containers/Details'
import './App.css';

function App() {
  useEffect(() => {
    console.log(exampleResponse.data)
  }, [])
  return (
    <div style={{display:'flex'}}>
      <Events data={exampleResponse.data} />
      <Details />
      </div>
  );
}

export default App;
