import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("Dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Samuel",
      role: "Developer",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
    {
      id: 2,
      name: "Grace",
      role: "Marketer",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
    {
      id: 3,
      name: "Amos",
      role: "Pastor",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
    {
      id: 4,
      name: "Awa",
      role: "Health",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
    {
      id: 5,
      name: "Blessing",
      role: "Intern",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
    {
      id: 6,
      name: "Joy Tina",
      role: "Lover",
      img: "/images/PROPHET_TB_JOSHUA_.jpg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id == id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });

    setEmployees(updatedEmployees);
  }

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
              return (<Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                updateEmployee={updateEmployee}
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
