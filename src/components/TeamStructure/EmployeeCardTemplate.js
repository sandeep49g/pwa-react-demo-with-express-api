import React from "react";
import "./employee-card-template.css";
import profileImage from './images/img_avatar.png';

const propTypes = {
  nodeData: PropTypes.object.isRequired
};

const EmployeeCardTemplate = ({ nodeData }) => {
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
            <img src={profileImage} alt={nodeData.name} className="profile-image" />
        </div>
        <div>
            {nodeData.name}
        </div>
      </div>
    </React.Fragment>
  );
};

EmployeeCardTemplate.propTypes = propTypes;

export default EmployeeCardTemplate;
