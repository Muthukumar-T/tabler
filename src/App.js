import { useEffect } from 'react';
import Sidebar from './components/Sidebar';

function App() {

  useEffect(()=>{
    alert("alert")
    
  },[])
  return (
    <div className="page">
      <Sidebar />
      
    </div>
  );
}

export default App;
