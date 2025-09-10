import { useState } from 'react';
import './App.css';
import Accordian from './components/Accordian';

export   const sections = [
    { title: 'Section 1: User Agreement', content: 'Terms related to user account creation and users', id : 1 },
    { title: 'Section 2: Privacy Policy', content: 'Terms related to the user of user data', id : 2 },
    { title: 'Section 3: Payment Terms', content: 'Terms related to payments, fees, and refunds', id : 3 }
  ];

function App() {
  const [openId, setOpenId] = useState(null);
  const [checkedSections, setCheckedSections] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  }

  const handleCheck = (id) => {
    if(checkedSections.includes(id)){
      setCheckedSections(checkedSections.filter(x => x !== id))
    }else{
      setCheckedSections([...checkedSections,id])
    }
  }
  return (
    <>  
       <h2>Terms & Conditions</h2>
         {
          sections.map((sec) => {
            return (
              <div className="accordian" key = {sec.id}>
                 <Accordian 
                    title={sec.title} 
                    content={sec.content}
                    open = {openId === sec.id}
                    onOpen={handleOpen}
                    id = {sec.id}
                    checked = {checkedSections.includes(sec.id)}
                    onCheck = {handleCheck}
                    />
              </div>
            )
          })
         }
         <button
           disabled={checkedSections.length !== sections.length}
           onClick={() => setSubmitted(true)}>
             Submit
         </button>
         {submitted && <p>Succesfully registered!!!</p>}
    </>
  );
}

export default App;
