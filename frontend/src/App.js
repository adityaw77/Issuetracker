
import './App.css';
import IssueAdd from './component/IssueAdd';
import IssueFilter from './component/IssueFilter';
import IssueList from './component/IssueList';
import IssueRow from './component/IssueRow';
import IssueTable from './component/IssueTable';

function App() {
  return (
    <div>
   <IssueAdd/>
   <IssueFilter/>
   <IssueList/>
   <IssueRow/>
   <IssueTable/>
   </div>

  );
}

export default App;
