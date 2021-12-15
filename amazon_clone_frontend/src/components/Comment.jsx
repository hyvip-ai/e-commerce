import React from "react";
import classes from "../styles/comment.module.css"
import Rating from "./Rating";
function Comment({ commentData }) {
  return (
  <React.Fragment>

      <div className={classes.comment}>
          <div className={classes.user}>
              <div className={classes.image}>
                <img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt={commentData.name} />
              </div>
              <div className={classes.name}>
                  {
                      commentData.name
                  }
              </div>
          </div>
          <div className={classes.rating}>
            <Rating stars={commentData.rating}/>
          </div>
          <div className={classes.review}>
                {commentData.comment}
          </div>
          <div className={classes.date}>
                  {commentData.date}
          </div>
      </div>
  </React.Fragment>);
}

export default Comment;
