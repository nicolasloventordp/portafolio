import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Acerca from './components/Acerca'
import Contacto from './components/Contacto'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function App() {
  useEffect( () => {
    Aos.init({
      duration: 2000
    })
  },[])
  const itemsTabs = ['HOME','ACERCA','CONTACTO'];
  return (
    <div className="app">
      <Header />
      <Home />
      <Acerca />
      <Contacto />
    </div>
  );
}

export default App;
