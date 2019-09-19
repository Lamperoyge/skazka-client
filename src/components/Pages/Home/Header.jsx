import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className="header-container">
            <div className="header">
                <div className="left-header">
                    <h4>React developing deep deep jsx</h4>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique porro quibusdam molestias nulla fuga, officia dolor inventore animi magnam possimus quia ipsum maxime. Obcaecati officiis ducimus cum nihil dolorum voluptatem?</span>
                    <Link to="/what-is-influencer-marketing">send me</Link>
                </div>
                <div className="right-header">
                </div>
            </div>
        </div>
    )
}
export default Header;