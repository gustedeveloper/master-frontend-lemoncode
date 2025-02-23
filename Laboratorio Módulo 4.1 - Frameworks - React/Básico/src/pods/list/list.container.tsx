import React from "react";
import { useContext, useEffect, useState } from "react";
import { OrganizationContext } from "../../core";
import { ListComponent } from "./list.component";
import { Pagination } from "./pagination.component";

export const ListContainer: React.FC = () => {
  const { organization, setOrganization, members, setMembers } =
    useContext(OrganizationContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(4);

  const [value, setValue] = useState(organization);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error ${response.status}: Organización no encontrada`
          );
        }
        return response.json();
      })
      .then((json) => setMembers(json))
      .catch((error) => {
        console.error("Error al obtener los miembros: ", error);
        setMembers([]);
      });
  }, [organization, setMembers]);

  const handleSearchButton = () => {
    setOrganization(format(value));
  };

  const format = (org: string) => {
    return org.slice(0, 1).toUpperCase() + org.slice(1).toLowerCase();
  };

  const lastMemberIndex = currentPage * membersPerPage;
  const firstMemberIndex = lastMemberIndex - membersPerPage;
  const currentMembers = members.slice(firstMemberIndex, lastMemberIndex);

  return (
    <>
      <ListComponent
        members={currentMembers}
        organization={organization}
        handleSearchButton={handleSearchButton}
        value={value}
        setValue={setValue}
      />
      <Pagination
        totalMembers={members.length}
        membersPerPage={membersPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
