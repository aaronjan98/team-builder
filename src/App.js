import React, { useState } from 'react';
import './App.css';
import TeamList from './components/TeamList';
import TeamData from './components/TeamData';
import Form from './components/Form';

function App() {

  const [teamMember, setTeamMember] = useState([
    {
      name: "Harry Potter",
      house: "Gryffindor",
      broom: true
    },
    {
      name: "Hermione Granger",
      house: "Gryffindor",
      broom: true
    },
    {
      name: "Ron Weasley",
      house: "Gryffindor",
      broom: true
    }
]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      house: member.house,
      broom: member.broom
    };
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <TeamList addMember={addMember} />
      <TeamData teamMember={teamMember} />
    </div>
  );
}

export default App;
