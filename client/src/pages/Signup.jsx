import React, { useState } from "react";
import axios from "axios";
import "../styles/StyleSignup.scss";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>;
export default function Signup() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const[phone,setPhone]=useState("")
  const [role, setRole] = useState("");
  const handelSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/register',{name,surname,password,email,phone,role,})
    .then(result=>console.log((result)))
    .catch(err=>console.log(err))
  }
  return (
    <div className="formFlexSignup">
      <h1>MediCO</h1>
      <div className="formSignup">
        <form onSubmit={handelSubmit}>
          <label>
            <input type="text" placeholder="призвище" onChange={(e)=>setName(e.target.value)} />
          </label>
          <label>
            <input type="text" placeholder="ім`я" onChange={(e)=>setSurname(e.target.value)}/>
          </label>
          <label>
            <input type="password" placeholder="придумайте пароль"onChange={(e)=>setPassword(e.target.value)}/>
          </label>
          <label>
            <input type="text" placeholder="Електрона пошта"onChange={(e)=>setEmail(e.target.value)}/>
          </label>
          <label>
            <input type="phone" placeholder="Номер телефону" onChange={(e)=>setPhone(e.target.value)}/>
          </label>
          <label>
            <div className="radioBtn">
              <input type="radio" name="position" value="manager" onChange={(e)=>setRole(e.target.value)}/> Менеджер
            </div>
            <div className="radioBtn">
              <input type="radio" name="position" value="packer"onChange={(e)=>{setRole(e.target.value)}} /> Пакувальник
            </div>
          </label>
           <button className="btnSignup">Реєстрація</button>
        </form>
      </div>
    </div>
  );
}
