import React from 'react'
import classes from '../styles/productdetails.module.css'
import {Link} from 'react-router-dom'
function Back() {
    return (
        <div className={classes.back}>
            <Link to="/"><i className="fas fa-chevron-left"></i></Link>
        </div>
    )
}

export default Back
