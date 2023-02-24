import React, { useState } from "react";

function Avatar({ image, name }) {
  // Like can also be passed as props when API comes in picture.
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="avatar-section">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"></div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="profile-img">
              <img src={image ? image : "/assets/profileImg.png"} />
              <h3 className="text-center">{name}</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="dots-area">
              <div>
                <div className="dot"></div>
              </div>
              <div>
                <div className="dot"></div>
              </div>
              <div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="text-center">
              <i
                className={isLiked ? "fas fa-heart" : "far fa-heart"}
                onClick={() => {
                  setIsLiked((prev) => !prev);
                  // Call API to save like on server.
                }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="text-center">
              <i className="far fa-comments"></i>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Avatar;
