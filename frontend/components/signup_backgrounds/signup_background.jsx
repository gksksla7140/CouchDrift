import React from 'react';
import WhyJoinForm from './why_join';

const SignUpBackground = () => (
  <div>
  <div id='signup-background'>
    <div className='signup-background-content'>
      <h1>Stay With Locals and Meet Travelers</h1>
      <h2>Share Authenic Travel Experiences</h2>
      <ul>
        <li>
          <a id='facebook-button'
            href='https://www.facebook.com/'><span className='fa fa-facebook' > </span>Join with Facebook</a>
        </li>
        <li className='gmail-container'>
          <a id='gmail-button'
            href='https://www.google.com/'><span className='fa fa-google' > </span>Join with Gmail</a>
        </li>
      </ul>
    </div>
  </div>
  {WhyJoinForm()}
</div>
);

export default SignUpBackground;
