import React from "react";

const TeamList = props => {
    return (
        <div className="member-list">
          {props.teamMember.map(member => (
            <div className="member" key={member.id}>
              <h2>{member.name}</h2>
              <p>{member.house}</p>
              <p>{member.wand}</p>
            </div>
          ))}
        </div>
      );
}

export default TeamList;