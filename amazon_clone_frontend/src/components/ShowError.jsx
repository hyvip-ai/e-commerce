import React from 'react'
import classes from '../styles/alerts.module.css'
function ShowError({errMessage,variant}) {
    const alertType = classes['alert_'+variant]
    return (
        <div className={`${classes.alert} ${alertType}`}>
            {
                errMessage
            }
        </div>
    )
}

export default ShowError
