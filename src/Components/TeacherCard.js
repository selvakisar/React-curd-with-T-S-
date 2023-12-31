import { useNavigate } from "react-router-dom";

export default function TeacherCard({ teacher, teacherData, setData }) {
  const navigate = useNavigate();
  const removeTeacher = (id) => {
    //api operations
    const newTeacherData = teacherData.filter((teac) => teac.id !== id);
    setData(newTeacherData);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl border m-2">
      <div className="card-body">
        <h2 className="card-title">{teacher.name}</h2>
        <p>Subject: {teacher.sub}</p>
        <p>Email: {teacher.email}</p>
        <p>Phone: {teacher.phone}</p>
        <p>EDU : {teacher.qualification}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-danger"
            onClick={() => removeTeacher(teacher.id)}
            
          >
            Delete
          </button>

          <button
            className="btn btn-primary"
            onClick={() => navigate(`/editteacher/${teacher.id}`)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
