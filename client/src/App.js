import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import NavBar from './components/views/NavBar/NavBar';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'                 // 로그인여부, 관리자여부등의 확인을 담당해주는 Auth를 모든 페이지에 감싸면 HOC 기능이 적용된다

const App = () => {

  const Auth_LandingPage = Auth(LandingPage, null);
  const Auth_LoginPage = Auth(LoginPage, false);
  const Auth_RegisterPage = Auth(RegisterPage, false);
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Auth_LandingPage />} />               {/*관리자만 들어가야하는 페이지는 3번째 인자로 true를 준다*/}
        <Route path='/loginPage' element={<Auth_LoginPage /> } />    
        <Route path='/registerPage' element={<Auth_RegisterPage />} />      
      </Routes>
    </Router>
  );
}



export default App;
