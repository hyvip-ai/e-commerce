import React from 'react'
import classes from "../styles/loading.module.css"
function Loading() {
    return (
        <React.Fragment>
            <div className={classes.parent}>
            <div className={classes.loader}></div>
            </div>
        </React.Fragment>
    )
}

export default Loading
