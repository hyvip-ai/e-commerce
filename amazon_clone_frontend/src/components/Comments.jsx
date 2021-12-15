import React from 'react'
import comments from "../data/comments"
import Comment from './Comment'
function Comments() {
    return (
        <React.Fragment>
            {
                comments.comments.map((item)=>{
                    return <Comment key={item._id} commentData={item} />
                })
            }
        </React.Fragment>
    )
}

export default Comments
