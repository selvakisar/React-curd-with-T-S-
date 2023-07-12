import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Base from "../BasePage/Base";

export default function EditTeacher({teacherData,setData}){
const navigate=useNavigate()
const {id}=useParams()

    const [idy, setIdy] = useState("");
    const [name, setName] = useState("");
    const [sub, setSub] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [qualification, setQualification] = useState("");

    useEffect(()=>{
        console.log("id:",id)
        const selectedTeacher=teacherData.find((teac,index)=>teac.id===parseInt(id))
        console.log(selectedTeacher)
        setIdy(selectedTeacher.id)
        setName(selectedTeacher.name)
        setSub(selectedTeacher.sub)
        setPhone(selectedTeacher.phone)
        setQualification(selectedTeacher.qualification)
        setEmail(selectedTeacher.email)

    },[id,teacherData]);

    function editTeacher(){
        const editedTeacherobject={
            id:idy,
            name,sub,phone,qualification,email
        }
        console.log(editedTeacherobject)
        const editIndex=teacherData.findIndex((teac,index)=>teac.id===parseInt(id))
        console.log(editIndex)
        teacherData[editIndex]=editedTeacherobject
        setData([...teacherData])
        navigate("/teacher/all")
    }
    return(
        <Base>
        <div className="p-5">Please Fill the form to Edit Teacher</div>
        <div className="form-control">
            <label className="input-group input-group-md  m-2">
                <span>ID </span>
                <input
                    type="number"
                    placeholder="Enter Teacher ID"
                    className="input input-bordered input-md w-96" 
                    value={id}
                    onChange={(e)=>setIdy(e.target.value)}
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
                <span>Subject</span>
                <input type="text"
                 placeholder="Enter Teacher Batch" 
                 className="input input-bordered input-md w-96" 
                 value={sub}
                 onChange={(e)=>setSub(e.target.value)}
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
            onClick={editTeacher}
            >
                EditTeacher
            </button>
        </div>
    </Base>


    )
}