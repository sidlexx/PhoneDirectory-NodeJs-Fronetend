import React from 'react';
import Navs from './Components/navbar' 
import ContactList from './Components/contactlist';
import Approuter,{} from './Routes/route'
function App() {
  return (
    <div className="App">
    <Navs/>
    <Approuter/>

    </div>
  );
}

export default App;
