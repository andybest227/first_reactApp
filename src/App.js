import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

function App() {
  const [role, setRole] = useState("Dev");
  const [employees, setEmployees] = useState([
    {
      name: "Samuel",
      role: "Developer",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
    {
      name: "Grace",
      role: "Marketer",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
    {
      name: "Amos",
      role: "Pastor",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
    {
      name: "Awa",
      role: "Health",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
    {
      name: "Blessing",
      role: "Intern",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
    {
      name: "Joy Tina",
      role: "Lover",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return(<Employee
                key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
              />);
            })}
          </div>
        </>
      ) : (
        <span>You can not see the employees</span>
      )}
    </div>
  );
}

export default App;
