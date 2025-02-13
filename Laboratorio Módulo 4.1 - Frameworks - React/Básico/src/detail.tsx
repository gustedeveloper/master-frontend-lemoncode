import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { OrganizationContext } from "./organization-context";

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  const { organization, members } = useContext(OrganizationContext);

  const selectedMember = members.find((member) => member.login === id);

  return (
    <>
      <h2>Hello from Detail page</h2>
      <img src={selectedMember.avatar_url} />
      <h2>Organization: {organization}</h2>
      <h3>Username: {id}</h3>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
