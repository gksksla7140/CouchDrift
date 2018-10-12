import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { toggleDropDown } from '../../actions/ui_actions';
import DropDown from './dropdown_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onLeaving = this.onLeaving.bind(this);

  }

  sessionLinks() {
    return (
      <nav className="login-signup">
          <button id='signup-nav' onClick={() => this.props.openModal('signup')}>Join</button>
          <button id='login-nav'onClick={() => this.props.openModal('login')}>Login</button>
      </nav>
    );
  }

  onLeaving() {
    if (this.props.toggled) {
      this.props.toggle();
    }
  }

  loggedIn() {
    return (
        <nav className="logged-in-header"
           onMouseLeave={this.onLeaving}
           onClick={this.props.toggle}>
          <div className='profile-icon'></div>

          <div className='profile-triangle'>
            <div ></div>
            <a ><i className="fas fa-caret-down"></i></a>
          </div>
          <DropDown/>
        </nav>
      );
  }

  render() {
    if (!this.props.currentUser) {
      return this.sessionLinks();
    }

    return (
      this.loggedIn()
    );
  }
}

export default Header;



//  Header = ({ currentUser, logout, openModal }) => {
//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <button id='signup-nav' onClick={() => openModal('signup')}>Join</button>
//       <button id='login-nav'onClick={() => openModal('login')}>Login</button>
//
//     </nav>
//   );
//   const loggedIn = () => {
//     const toggled = store.getState().ui.toggleDown;
//     const onClicking = () => {
//       store.dispatch(toggleDropDown());
//     };
//
//     const onLeaving = () => {
//       if (toggled) {
//         return store.dispatch(toggleDropDown());
//       }
//     };
//
//     return (
//
//     <nav className="logged-in-header"
//        onMouseLeave={onLeaving}
//        onClick={onClicking}>
//       <div className='profile-icon'></div>
//
//       <div className='profile-triangle'>
//         <div ></div>
//         <a ><i className="fas fa-caret-down"></i></a>
//       </div>
//
//     </nav>
// );
//   };
//
//   return currentUser ? loggedIn() : sessionLinks();
// };
