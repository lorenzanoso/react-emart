
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/pages/Home';


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <Home />}/>
      </Routes>   
    </BrowserRouter> 
  );
}

export default App;
