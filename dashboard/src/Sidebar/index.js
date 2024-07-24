
import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPoll, faMedal, faChartBar, faUser,faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='logo-image'>
         <img  src='images/logo.png' alt='logo'  className='logo'/>
        <p className='logo-text'>Rafiki</p>
        </div>
        <br/>
      <h2>Dasboard</h2>
      <br/>
      <ul className="sidebar-nav">
        <li>
          {<FontAwesomeIcon icon={faBook} /> }
          My Courses
         </li>
         <li>
          {<FontAwesomeIcon icon={faPoll} /> }
          Results
         </li>
         <li>
          {<FontAwesomeIcon icon={faMedal} /> }
          Achievement
         </li>
         <li>
          { <FontAwesomeIcon icon={faChartBar} /> }
          Score Distribution
         </li>
         <li>
          { <FontAwesomeIcon icon={faUser} /> }
          Profile
        </li>
     </ul>
         <br/>
         <br/>
        <div className='settings'>
         <li>
          { <FontAwesomeIcon icon={faCog} /> }
          Settings
         </li>
        <li>
          { <FontAwesomeIcon icon={faSignOutAlt} /> }
          Log Out
        </li>
      </div>
    </div>
  );
};
export default Sidebar;