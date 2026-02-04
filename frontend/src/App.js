
import Addbook from './components/Addbook';
import Booklist from './components/Booklist';
import Editbook from './components/Editbook';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import './index.css'

function App() {
  const [refresh,setRefresh] = useState(false);

  const handleBookAdded = () => {
    setRefresh(!refresh);
  }


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Addbook  onBookAdded={handleBookAdded}/>
              <Booklist key={refresh} />
            </>
          }>
          </Route>
          <Route path="/edit/:id" element={<Editbook />}></Route>
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
