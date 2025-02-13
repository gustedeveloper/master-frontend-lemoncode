import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";
import { MemberEntity } from "./model";

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
  const [organization, setOrganization] = useState("lemoncode");
  const [members, setMembers] = useState<MemberEntity[]>([]);

  return (
    <OrganizationContext.Provider
      value={{ organization, setOrganization, members, setMembers }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
