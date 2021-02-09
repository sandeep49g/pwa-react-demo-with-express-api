import React from "react";
import PropTypes from "prop-types";
import "./employee-card-template.css";
import profileImage from './images/img_avatar.png'; // Tell webpack this JS file uses this image

const propTypes = {
  nodeData: PropTypes.object.isRequired
};

const EmployeeCardTemplate = ({ nodeData }) => {
  return (
    <div>
      <div className="position">{nodeData.title}</div>
      <div className="fullname pt-2">
        {/* <div className="row px-0 mx-0">
          <div className="col-sm-3 pl-2 text-left">
            <img src={profileImage} alt={nodeData.name} className="avatar" />
          </div>
          <div className="col-sm-9 pl-1 text-left">
            {nodeData.name}
          </div>
        </div> */}
        <div className="text-center">
            <img src={profileImage} alt={nodeData.name} className="avatar" />
        </div>
        <div className="text-center">
            {nodeData.name}
        </div>
      </div>
    </div>
  );
};

EmployeeCardTemplate.propTypes = propTypes;

export default EmployeeCardTemplate;
