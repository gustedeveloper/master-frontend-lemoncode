import { DetailComponent } from "./detail.component";
import React, { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { OrganizationContext } from "../../core";

export const DetailContainer: FC = () => {
  const { id } = useParams();
  const { organization, members } = useContext(OrganizationContext);

  const selectedMember = members.find((member) => member.login === id);
  return (
    <DetailComponent
      organization={organization}
      selectedMember={selectedMember}
      id={id}
    />
  );
};
