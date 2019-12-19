import React, { useState } from "react";

const TeamData = props => {

    const [teamMember, setTeamMember] = useState({
    name: "",
    house: "",
    wand: ""
  });

  const handleChanges = e => {
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addMember(teamMember);
    setTeamMember({ name: "", house: "", wand: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label className= "inputLabel" htmlFor="name">Name:</label>
      <input  className= "inputLabel" 
        id="name"
        type="text"
        placeholder="name"
        onChange={handleChanges}
        name="name"
        value={teamMember.name}
      />
      <label className= "inputLabel"  htmlFor="house">House:</label>
      <input className= "inputLabel" 
        id="house"
        type="text"
        placeholder="house"
        onChange={handleChanges}
        name="house"
        value={teamMember.house}
      />
      <label  className= "inputLabel" htmlFor="wand">Wand:</label>
      <input className= "inputLabel" 
        id="wand"
        type="text"
        placeholder="wand"
        onChange={handleChanges}
        name="wand"
        value={teamMember.wand}
      />
      <button  className= "inputLabel" type="submit">Add Team Member</button>
    </form>
  );
}

export default TeamData;