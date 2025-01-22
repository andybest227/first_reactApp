import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('Dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
      <>
        <input
          type='text' 
          onChange={(e) => 
            {console.log(e.target.value);
              setRole(e.target.value)
            }}
        />

        <Employee name="Andy" role="Intern"/>
        <Employee name="Moses" role={role}/>
        <Employee name="Grace"/>
      </>
    :
    (<span>You can not see the employees</span>)

      }
    </div>
  );
}

export default App;
