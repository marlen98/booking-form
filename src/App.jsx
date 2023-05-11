import {  useState } from "react";
import "./app.css";
import NameArea from './FormPage/alt/NameArea'
import FormTower from './FormPage/alt/FormTower'
import FormFloor from './FormPage/alt/FormFloor'
import FormRoom from './FormPage/alt/FormRoom'
import TextArea from './FormPage/alt/TextArea'
import FormDate from './FormPage/alt/FormDate'
import FormTime from "./FormPage/alt/FormTime";

const App = () => {
  

  const [values, setValues] = useState();
  
  const onChange = (e)=>{

setValues({[e.target.name]:e.target.value})
}
  

const handleData = ()=>{

  const json = JSON.stringify(values)
  alert(json)
}



  return (
   
    <div className="app">
      <form>
        <div className="formInput">
          
    
               <NameArea onChange={onChange}/>
               <FormTower onChange={onChange}/>
               <FormFloor onChange={onChange}/>
               <FormRoom onChange={onChange}/>
               
               <FormDate onChange={onChange}/>
               <FormTime onChange={onChange}/>
               <TextArea onChange={onChange}/>
          

        </div>
        <button sx={{mt:4}} onClick={handleData}>Отправить</button>
        <button sx={{mt:4}} >Очистить</button>
      </form>
    </div>
    
  );
};

export default App;
