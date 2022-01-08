import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';



const App = () => {
  //this hook state used in order to change actions on click button
  const [word, setWord] = useState('');
  const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log(word);
}
  

  return (
    <div className="App">
     <Header title="Images Gallery" />
     <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
