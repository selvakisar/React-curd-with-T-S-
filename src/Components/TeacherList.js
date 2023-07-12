import Base from "../BasePage/Base"
import TeacherCard from "./TeacherCard"

function TeacherList({teacherData, setDataa}){
    return (
       
      
       <Base>

             <h1>                                          
                
                
                
                                                       </h1>
            {teacherData.map((teac, idx)=>(
                <TeacherCard
               teacher={teac}
                teacherData ={teacherData}
                setDataa={setDataa}
                key={teac.id}
                />
            ))}
        </Base>
    )
}
export default TeacherList