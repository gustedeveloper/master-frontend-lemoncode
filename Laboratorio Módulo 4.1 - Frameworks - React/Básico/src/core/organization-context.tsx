import React, { useState, PropsWithChildren } from "react";
import { MemberEntity } from "../pods/list/list.vm";

interface ContextModel {
  organization: string;
  setOrganization: React.Dispatch<React.SetStateAction<string>>;
  members: MemberEntity[];
  setMembers: React.Dispatch<React.SetStateAction<MemberEntity[]>>;
}

export const OrganizationContext = React.createContext<ContextModel>(undefined);

export const OrganizationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [organization, setOrganization] = useState("Lemoncode");
  const [members, setMembers] = useState<MemberEntity[]>([]);

  return (
    <OrganizationContext.Provider
      value={{ organization, setOrganization, members, setMembers }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
