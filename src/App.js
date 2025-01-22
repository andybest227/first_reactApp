import './App.css';
import Employee from './components/Employee';

function App() {
  console.log("We'er about to list the employees");
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
      <>
        <Employee />
        <Employee />
        <Employee />
      </>
    :
    (<span>You can not see the employees</span>)

      }
    </div>
  );
}

export default App;
