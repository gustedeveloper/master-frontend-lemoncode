import { MemberEntity } from "../list.vm";

export const getMembers = (organization: string): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${organization}/members`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}: Organización no encontrada`);
      }
      return response.json();
    }
  );
};
