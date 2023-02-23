import React from "react";
import Avatar from "./Avatar";

// Dummy Data from server
const data = [
  { _id: 1, image: "/assets/profileImg1.png", name: "Stephen Paul" },
  { _id: 2, name: "Nancy Paul" },
  { _id: 3, image: "/assets/profileImg1.png", name: "Mercy Metiloa" },
  { _id: 4, image: "/assets/profileImg1.png", name: "Meena Jackson" },
  { _id: 5, image: "/assets/profileImg1.png", name: "Stephen Jack" },
  { _id: 6, image: "/assets/profileImg1.png", name: "Leona Johnson" },
];

const Profile = () => {
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="select-icon">
              <a href="#">
                <i class="fas fa-link"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="dropdown-area">
              <div className="dropdown">
                <button className="dropbtn">
                  SHORT BY <i class="fas fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a href="#">short 1</a>
                  <a href="#">short 2</a>
                  <a href="#">short 3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* === / Profile area start here /==== */}
        <div className="row">
          {data.map(({ _id, name, image }) => (
            <Avatar key={_id} image={image} name={name} />
          ))}
        </div>
        {/* === / Profile area close here /==== */}
      </div>
    </>
  );
};

export default Profile;
