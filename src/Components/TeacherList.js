import Base from "../BasePage/Base"
import TeacherCard from "./TeacherCard"

function TeacherList({teacherData, setData}){
    return (
       
      
       <Base>

             <h1>                                          
        
                
                                                       </h1>
            {teacherData.map((teac, idx)=>(
                <TeacherCard
               teacher={teac}
                teacherData ={teacherData}
                setData={setData}
                key={teac.id}
                />
            ))}
        </Base>
    )
}
export default TeacherList