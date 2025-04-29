import React from 'react';


import {Link} from 'react-router-dom';

const Home=()=>{

    return(
        <>
        <h1>Item List</h1>
        <ul>
            <li><Link to="/Item1">Item 1</Link></li>
            <li><Link to="/Item2">Item 2</Link></li>
            <li><Link to="/Item3">Item 3</Link></li>
        </ul>
        </>
    )
}

export default Home;