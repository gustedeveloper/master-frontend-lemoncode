import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./model";

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [value, setValue] = React.useState("lemoncode");
  const [organization, setOrganization] = React.useState("lemoncode");

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [organization]);

  const handleSearchButton = () => {
    setOrganization(value);
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <div>
        <label>Enter organization name: </label>
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={() => handleSearchButton()}>Search</button>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
