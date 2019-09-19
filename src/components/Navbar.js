import React, {useState, useEffct} from 'react'

const Header = () => {
    return (
      <div className="nav-container">
        <div className="nav">
          <span>logo</span>
          <div className="nav-links">
            <span>
              text 1
            </span>
            <span>
              text 2
            </span>
            <span>
              text 3
            </span>
          </div>
          <div className="nav-social">
              <span>fb</span>
              <span>ig</span>
          </div>
        </div>
      </div>
      );
}

  export default Header;