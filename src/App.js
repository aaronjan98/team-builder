import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import TeamList from './components/TeamList';
import TeamData from './components/TeamData';
import Form from './components/Form';

export default function App() {

  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      name: "Harry Potter",
      house: "Gryffindor",
      wand: "holly"
    }
]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      house: member.house,
      wand: member.wand
    };
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <TeamData teamMember={teamMember} addMember={addMember}/>
      <TeamList teamMember={teamMember} />
    </div>
  );
}

const rootElement = document.getElementById(
  "root"
);
ReactDOM.render(<App />, rootElement);
