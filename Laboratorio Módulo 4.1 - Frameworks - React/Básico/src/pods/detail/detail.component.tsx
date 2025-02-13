import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./detail.vm";

interface Props {
  selectedMember: MemberEntity;
  organization: string;
  id: string;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { selectedMember, organization, id } = props;
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
