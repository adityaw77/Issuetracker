
import './App.css';
//import IssueAdd from './component/IssueAdd';
//import IssueFilter from './component/IssueFilter';
import IssueList from './component/IssueList';//ticketlist 
//import IssueRow from './component/IssueRow';
import IssueTable from './component/IssueTable';//ticketform

function App() {
  return (
    <div>
   <IssueTable/>
   <IssueList/>
   </div>

  );
}

export default App;
