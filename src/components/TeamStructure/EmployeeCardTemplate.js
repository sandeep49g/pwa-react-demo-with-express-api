/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "./employee-card-template.css";

// const propTypes = {
//   nodeData: PropTypes.object.isRequired
// };

const EmployeeCardTemplate = ({ nodeData }) => {
  const profileImage =  `${process.env.PUBLIC_URL}/images/img_avatar.png`;

  return (
    <React.Fragment>
      <div className="position text-center">{nodeData.title}</div>
      <div className="fullname pt-2 text-center">
        {/* <div className="row px-0 mx-0">
          <div className="col-sm-3 pl-2 text-left">
            <img src={profileImage} alt={nodeData.name} className="avatar" />
          </div>
          <div className="col-sm-9 pl-1 text-left">
            {nodeData.name}
          </div>
        </div> */}
        <div>
          <Link to={`my-team/${nodeData.employeeId}`}>
              <img src={profileImage} alt={nodeData.name} className="profile-image" />
          </Link>
        </div>
        <div>
          <Link to={`my-team/${nodeData.employeeId}`}>
              {nodeData.name}
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

// EmployeeCardTemplate.propTypes = propTypes;
export default EmployeeCardTemplate;
