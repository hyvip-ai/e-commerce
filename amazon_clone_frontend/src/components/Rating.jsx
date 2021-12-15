import React from "react";



{/* <i class="far fa-star"></i> */}
{/* <i class="fas fa-star-half-alt"></i> */}
{/* <i class="fas fa-star"></i> */}
function Rating({ stars, numOfReviews }) {
  return (
    <React.Fragment>
      <i
        className={
          stars >= 1
            ? "fas fa-star"
            : stars >= 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>

<i
        className={
          stars >= 2
            ? "fas fa-star"
            : stars >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>


<i
        className={
          stars >= 3
            ? "fas fa-star"
            : stars >= 2.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>

<i
        className={
          stars >= 4
            ? "fas fa-star"
            : stars >= 3.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>

<i
        className={
          stars > 5
            ? "fas fa-star"
            : stars >= 4.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
      {numOfReviews?<span>{numOfReviews} Reviews</span>:null}
    </React.Fragment>
  );
}

export default Rating;
