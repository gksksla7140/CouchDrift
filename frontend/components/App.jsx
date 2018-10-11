import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import HeaderContainer from '../components/header/header_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import SignUpBackground from './signup_backgrounds/signup_background';

const App = () => (
  <div>
   <Modal />
    <header className='header-nav'>
      <div className='header-div'>
      <Link to="/" className="header-link">
        <img id='logo' src={'https://ht-assets.couchsurfing.com/assets/'
          + 'logo-orange-58ccd2edda8895d1e1742f7744683e61f2c6fa069290a9ff'
          + '012ef09d51ea643b.png'}></img>
      </Link>
      <HeaderContainer />
    </div>
    </header>
    <SignUpBackground />
  </div>
);

export default App;
