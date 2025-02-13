import React from "react";
import { useContext, useEffect, useState } from "react";
import { OrganizationContext } from "../../core";
import { ListComponent } from "./list.component";

export const ListContainer: React.FC = () => {
  const { organization, setOrganization, members, setMembers } =
    useContext(OrganizationContext);

  const [value, setValue] = useState(organization);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [organization, setMembers]);

  const handleSearchButton = () => {
    setOrganization(format(value));
  };

  const format = (org: string) => {
    return org.slice(0, 1).toUpperCase() + org.slice(1).toLowerCase();
  };

  return (
    <ListComponent
      members={members}
      organization={organization}
      handleSearchButton={handleSearchButton}
      value={value}
      setValue={setValue}
    />
  );
};
