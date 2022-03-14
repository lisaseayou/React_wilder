
import './App.css';
import CardsList from './components/Card/CardsList';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react'; 
import axios from 'axios';

function App() {
  const [wilders, setWilder] = useState([]);

  const getWilder = () => {
    axios
      .get("/api/wilder")
      .then((response) => response.data.result)
      .then((data) => {
        setWilder(data);
      })
      .catch((err) => console.log(err));
  };
 
  useEffect(() => {
    getWilder();
    console.log("ok")
  }, []);

  return (
    <div className="App">
     <Header />
     <CardsList getWilder={getWilder} wilders={wilders} />
    <Form getWilder={getWilder}/>
    </div>
  );
}

export default App;
