import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Components/Login/Login.css'
import 'bootstrap/dist/css/bootstrap.css';
import './Components/Login/custom.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Loginpage  from './Components/Login/Loginpage';
import { Signup } from './Components/Login/Signup';
import Cards from './Components/Login/Cards'
import  AdminFeedback  from './Components/Login/AdminFeedback';
import  AdminSurvey  from './Components/Login/AdminSurvey';
// import FeedbackForm from './Components/Login/Form';
// import Submissions from './Components/Login/Submissions';
import Afeedback from './Components/Login/Afeedback';


function App() {
  return ( 
    <div>
      <Routes>
        <Route path="" element={<Loginpage />}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='card' element={<Cards/>}/> 
        <Route path='/card/feedback' element={<Afeedback/>}/>
        <Route path='/AdminFeedback' element={<AdminFeedback/>}/>
        <Route path='/Afeedback' element={<Afeedback/>}/>
        <Route path='/card/survey' element={<AdminSurvey/>}/>
    </Routes> 
    </div>
  );
}

export default App;


 

// <Route path='/card/survey/userfeedback' element={<FeedbackForm/>}/>
// <Route path="submissions" element={<Submissions />} />
// <Route path="submission/:id" element={<Submissions />} />


 