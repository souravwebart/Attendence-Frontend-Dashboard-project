import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const homeIcon = <FontAwesomeIcon icon={faHome} />



function footer() {

    return (
        <div className="footer">
            <div className="footer-menu">            
            <Link to="/"><h1>{homeIcon}</h1></Link>
            
            <Link to="/apply"><h1>Leave Apply</h1></Link>
            <Link to="/leave-history"><h1>Leave History</h1></Link>
            </div>
        </div>
    )
}

export default footer
