import './App.css';
import UserForm from './components/form';
import Table from './components/table';

function App() {
  return (
    <div className="hero-container">
      <div className='user-form'>
   <UserForm/>
      </div>
   
      <div className='data-table'>
         <Table/>
      </div>
     
    </div>
  );
}

export default App;
