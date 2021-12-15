import React from 'react'
import classes from '../styles/productdetails.module.css'
function Back({changePage}) {
    return (
        <div className={classes.back}>
            <i className="fas fa-chevron-left" onClick={()=>{changePage((prev)=>{return !prev})}}></i>
        </div>
    )
}

export default Back
