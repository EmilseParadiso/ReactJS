import React  from 'react';
import ItemCount from "./ItemCount";
const App =() => {
return(
    <ItemCount int ="0" min= "0"
    max="100" onAdd={() =>console.log()}/>
)
}

 export default App;