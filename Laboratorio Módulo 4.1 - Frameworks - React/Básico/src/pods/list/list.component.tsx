import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./list.vm";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

interface Props {
  members: MemberEntity[];
  organization: string;
  handleSearchButton: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const ListComponent: React.FC<Props> = (props) => {
  const { members, organization, handleSearchButton, value, setValue } = props;
  return (
    <>
      <h2>{organization} members</h2>
      <div className="search-container">
        <TextField
          id="filled-basic"
          label="Enter organization name"
          variant="filled"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearchButton}>
          Search
        </Button>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members?.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
