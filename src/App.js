import { useState } from "react";

function App(){

  const [Mssv, setMssv] = useState("");
  const [fullname, setFullname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [inforStudent,setInforStudent] = useState({})
  const [listStudents,setListStudents] = useState([])
  
  

  var handleAdd = () => {
    setInforStudent (prev => ({
      ...prev,Mssv,fullname,dob,email
    })
  )
   
   setListStudents(prev => {
      prev.push(inforStudent)
      return prev
   }
  )

  }

  console.log(inforStudent)
  console.log(listStudents)
  
  return (
    <div style={{padding: 100}}>
      <div>
      <input
        type="text"
        onChange={(event) => setMssv(event.target.value)}
        placeholder="MSSV"
      />
      <input
        type="text"
        onChange={(event) => setFullname(event.target.value)}
        placeholder="Ho va ten"
      />
      </div>

      <div>
      <input
        type="text"
        onChange={(event) => setDob(event.target.value)}
        placeholder="Ngay sinh"
      />
      <input
        type="text"
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      </div>
      
      <button onClick={handleAdd}>Them</button>
    </div>
  );
  }
  
export default App;

