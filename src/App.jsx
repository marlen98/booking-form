import { useState } from "react";
import "./app.css";
import FormInput from "./FormPage/FormInput";

const App = () => {
    

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleData = ()=>{
    let json = JSON.stringify(values)
    alert(json)
}

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Ваше имя",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Ваше имя",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Номер башни",
      errorMessage: "It should be a valid email address!",
      label: "Номер башни",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Дата",
      label: "Дата бронирования",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Номер этажа",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Номер этажа",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Номер переговорной...",
      label: "Номер переговорной",
      pattern: values.password,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Комментарии...",
      label: "Комментарии",
      pattern: values.password,
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={handleData}>Отправить</button>
      </form>
    </div>
  );
};

export default App;
