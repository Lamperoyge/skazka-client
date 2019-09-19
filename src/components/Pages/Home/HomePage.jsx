import React, {Fragment} from 'react';
import Header from './Header';
import Banner from './Banner';
import WhatWeDo from './WhatWeDo';
import Reason from './Reason';
const HomePage = () => {
    return (
        <Fragment>
            <Header/>
            <WhatWeDo/>
            <Banner/>
            <Reason/>
        </Fragment>
    )
}

export default HomePage;