import Base from "../BasePage/Base";
import TeacherCard from "../Components/TeacherCard";
import TeacherList from "../Components/TeacherList";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <Base>
      <h1 className="">Welcome to users profile</h1>

      <button
        className="rounded-full bg-base-200 p-3 m-5"
        onClick={() => navigate("/student/add")}
      >
        Add More Students
      </button>

      {/* <button
        className="rounded-full bg-base-200 p-3 m-5"
        onClick={() => navigate("/Teacher/add")}
      >
        Add More Teachers
      </button> */}
    </Base>
  );
}
