import './App.css';
import {useState,useEffect} from 'react'
import {onSnapshot,collection, addDoc,serverTimestamp,orderBy } from "firebase/firestore"
import FlipMove from 'react-flip-move';
//component
import Message from './component/Message'
import db from './firebase';

function App() {
  const [inputfield,setinputfield] = useState('');
  const [msg,setmessage] = useState([]);
  const [username,setusername] = useState('')

  useEffect(() => 
   onSnapshot(collection(db,'message'),orderBy('timestamp'),(snapshot) => 
        setmessage(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
      )
     
  ,[])

  useEffect(() =>  {
      //const name = prompt("Please Enter Your Name")
      setusername(prompt("Enter Your Name"));
      console.log(msg)

  },[])


   const sendmessage= async (e) => {
        e.preventDefault();
      //  setmessage([...msg,{username:username, message: inputfield}]);
        const collectionRef = collection(db,"message");
        const payload = {
          message:inputfield,
          username:username,
          timestamp: serverTimestamp()
        }
        await addDoc(collectionRef,payload)
        setinputfield('');
        

        console.log(msg)
   }
  return (
    <div className="App">
      <header className="App-header container">
          <h1>Hello programmer</h1>
        <h2>Wellcome {username}</h2>
         <form className="from_input"> 
          <input value={inputfield} onChange={e => setinputfield(e.target.value)}/>
          <button disabled={!inputfield} className='btn btn-primary' onClick={sendmessage}>Send Message</button>
         </form> 

        
        <div className='message_data'> 
         {
            msg.map(({id,message}) => (
              <Message key={id} username={username} messag={message}/>
            ))
          }
        </div>
         
        

      </header>
    </div>
  );
}

export default App;
