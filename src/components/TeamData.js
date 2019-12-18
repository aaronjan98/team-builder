import React, { useState } from "react";

const TeamData = props => {
 // console.log("this is our props",props);
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
    console.log(e.target.name);
    console.log(e.target.house);
    console.log(e.target.wand);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addMember(teamMember);
    setTeamMember({ name: "", house: "", wand: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="name"
        onChange={handleChanges}
        name="name"
        value={teamMember.name}
      />
      <label htmlFor="house">House</label>
      <input
        id="house"
        type="text"
        placeholder="house"
        onChange={handleChanges}
        name="house"
        value={teamMember.house}
      />
      <label htmlFor="wand">Wand</label>
      <input
        id="wand"
        type="text"
        placeholder="wand"
        onChange={handleChanges}
        name="wand"
        value={teamMember.wand}
      />
      <button type="submit">Add Team Member</button>
    </form>
  );
}

export default TeamData;