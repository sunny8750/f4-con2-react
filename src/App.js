
import LoginPage from './components/login';
import ProfilePage from './components/profile';
import { Route, Routes } from "react-router-dom";
import './App.css';



function App() {
    return (
  //     <div>
  // <LoginPage/>
  // <ProfilePage/>
  // </div>
  
    <Routes>
          <Route path="" element={<LoginPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
    
  
  )
}

export default App;
