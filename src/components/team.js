import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserCard from "./userCard";
const Team = () => {
  const [members, setMembers] = useState([]);
  const [managers, setManagers] = useState([]);
  const [team, setTeam] = useState({});
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    const teams = JSON.parse(localStorage.getItem("teams"));
    if (!teams) {
      window.location.reload();
    }
    setTeam(teams.find((item) => item.id == id));
    const teamUsers = users?.filter((item) => item.team_id == id);
    const teamManager = teamUsers.filter((item) => item.isManager === true);
    setManagers(teamManager);
    setMembers(teamUsers);
  }, [id]);
  return (
    <>
      <div className="justify-content-center row">
        <div className="align-items-md-center col-7 d-flex flex-column mb-2">
          <img src="/person.jpg" className="rounded-circle w-25"></img>
          <h4 className="text-primary">{team?.team_name}</h4>
          <p className="text-danger">{team?.description}</p>
        </div>
      </div>
      <div className="row justify-content-center">
        {managers.map((item, key) => (
          <div key={key} className="col-lg-2 col-md-3 col-sm-6">
            <UserCard
              userName={`${item.first_name} ${item.last_name}`}
              month={item.month}
              year={item.year}
              id={item.id}
              photoId={item.photoId || null}
              position={item.position}
            />
          </div>
        ))}
      </div>
      <div className="row">
        {members.map((item, key) => (
          <div key={key} className="col-lg-2 col-md-3 col-sm-6">
            <UserCard
              userName={`${item.first_name} ${item.last_name}`}
              month={item.month}
              id={item.id}
              photoId={item.photoId || null}
              position={item.position}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
