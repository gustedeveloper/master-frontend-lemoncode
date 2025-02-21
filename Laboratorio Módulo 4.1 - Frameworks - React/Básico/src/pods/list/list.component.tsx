import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./list.vm";
import Button from "@mui/material/Button";
import { Grid2, TextField } from "@mui/material";

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
      <Grid2
        container
        sx={{
          margin: "auto",
          maxWidth: "1100px",
          height: "100%",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Grid2 size={12} sx={{}}>
          <Grid2 container spacing={2}>
            <Grid2 size={2}>
              <TextField
                id="filled-basic"
                label="Enter organization name"
                variant="filled"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Grid2>

            <Grid2 size={10} sx={{ display: "flex" }}>
              <Button variant="contained" onClick={handleSearchButton}>
                Search
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 size={12} sx={{ marginBottom: "50px" }}>
            <h2>{organization} members</h2>
          </Grid2>

          <Grid2 size={12}>
            <Grid2 container spacing={5}>
              <Grid2 size={12}>
                <Grid2 container sx={{ alignItems: "center" }}>
                  <Grid2 size={2}>Avatar</Grid2>
                  <Grid2 size={2}>ID</Grid2>
                  <Grid2 size={8}>Name</Grid2>
                </Grid2>
              </Grid2>

              <Grid2 size={12}>
                <Grid2 container rowSpacing={5}>
                  {members?.map((member) => (
                    <Grid2 size={12} key={member.id}>
                      <Grid2 container>
                        <Grid2 size={2}>
                          <img
                            style={{ width: "80px", borderRadius: "50%" }}
                            src={member.avatar_url}
                          />
                        </Grid2>

                        <Grid2
                          size={2}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          {member.id}
                        </Grid2>

                        <Grid2
                          size={8}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Link to={`/detail/${member.login}`}>
                            {member.login}
                          </Link>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  ))}
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};
