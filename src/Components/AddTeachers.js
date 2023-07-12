import { useState } from "react";
import Base from "../BasePage/Base";

export default function AddTeachers({teacherData, setData}) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [sub, setsub] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [qualification, setQualification] = useState("");
    //setId(value) => id

    function addnewTeacher(){
      const newTeacherObj = {
        id, 
        name, 
        sub, 
        email, 
        phone,
        qualification
      }
      console.log(newTeacherObj)
      // add new data
    setData([...teacherData,newTeacherObj]);
    setId("");
    setName("");
    setsub("");
    setQualification("");
    setPhone("");
    setEmail("");
    }
    return (
        <Base>
            <div className="p-5">Please Fill the form to add new Teacher</div>
            <div className="form-control">
                <label className="input-group input-group-md  m-2">
                    <span>ID </span>
                    <input
                        type="number"
                        placeholder="Enter Teacher ID"
                        className="input input-bordered input-md w-96" 
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                        />
                </label>

                <label className="input-group input-group-md m-2">
                    <span>Name</span>
                    <input 
                    type="text" 
                    placeholder="Enter Teacher Name" 
                    className="input input-bordered input-md w-96"
                    value ={name}
                    onChange={(e)=>setName(e.target.value)}
                     />
                </label>
                <label className="input-group input-group-md  m-2">
                    <span>Batch</span>
                    <input type="text"
                     placeholder="Enter Teacher Batch" 
                     className="input input-bordered input-md w-96" 
                     value={sub}
                     onChange={(e)=>setsub(e.target.value)}
                     />
                </label>
                <label className="input-group input-group-md  m-2">
                    <span>Email</span>
                    <input 
                    type="text" 
                    placeholder="Enter Teacher Email" 
                    className="input input-bordered input-md w-96" 
                    value ={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
                <label className="input-group input-group-md m-2">
                    <span>Phone</span>
                    <input
                     type="text"
                      placeholder="Enter Teacher Phone"
                       className="input input-bordered input-md w-96" 
                       value={phone}
                       onChange={(e)=>setPhone(e.target.value)}
                       />
                </label>
                <label className="input-group input-group-md  m-2">
                    <span>Education</span>
                    <input 
                    type="text" 
                    placeholder="Enter Teacher Education" 
                    className="input input-bordered input-md w-96"
                    value={qualification}
                    onChange={(e)=>setQualification(e.target.value)}
                     />
                </label>

                <button className="rounded-full bg-base-200 p-2 m-5"
                onClick={addnewTeacher}
                >
                    Add Teacher
                </button>
            </div>
        </Base>
    )
}