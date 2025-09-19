import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header />
      <main>      
        <CoreConcepts />  
        <br />
        <h2>Hora de começar!</h2>
       <Examples />
      </main>
    </>
  );
}

export default App;