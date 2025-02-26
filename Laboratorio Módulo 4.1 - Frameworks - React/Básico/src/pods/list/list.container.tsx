import React from "react";
import { useContext, useEffect, useState } from "react";
import { OrganizationContext } from "../../core";
import { ListComponent } from "./list.component";
import { PaginationComponent } from "./pagination.component";
import { ListSkeleton } from "./skeleton";

export const ListContainer: React.FC = () => {
  const { organization, setOrganization, members, setMembers } =
    useContext(OrganizationContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(4);

  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState(organization);

  useEffect(() => {
    setLoading(true);
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
      })
      .finally(() => setLoading(false));
  }, [organization]);

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
      {loading ? (
        <ListSkeleton count={membersPerPage} />
      ) : (
        <>
          <ListComponent
            members={currentMembers}
            organization={organization}
            handleSearchButton={handleSearchButton}
            value={value}
            setValue={setValue}
          />
          <PaginationComponent
            totalMembers={members.length}
            membersPerPage={membersPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};
