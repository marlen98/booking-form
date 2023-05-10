import FormTower from './FormPage/alt/FormTower.jsx'
import FormFloor from './FormPage/alt/FormFloor.jsx'
import FormRoom from './FormPage/alt/FormRoom.jsx'
import TextArea from './FormPage/alt/TextArea.jsx';
import NameArea from './FormPage/alt/NameArea.jsx';




const Form = ()=>{
const data ={
name:{},
tower:{},
floor:{},
room:{},
date:{},
time:{},
comment:{},

}

const handleData = ()=>{
    let json = JSON.stringify(data)
    alert(json)
}
return (
      <>
      <NameArea value={data.name}/>
      <FormTower value={data.tower}/>
      <FormFloor value={data.floor}/>
      <FormRoom value={data.room}/>
      <TextArea value={data.name}/>
   
      
      </>
)
}

export default Form