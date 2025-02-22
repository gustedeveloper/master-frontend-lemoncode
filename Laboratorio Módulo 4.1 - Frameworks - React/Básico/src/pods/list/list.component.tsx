import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./list.vm";
import Button from "@mui/material/Button";
import {
  Link as MuiLink,
  Grid2,
  TextField,
  Divider,
  Typography,
  List,
} from "@mui/material";

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
          margin: "50px 100px",
          maxWidth: "1100px",
          minWidth: "400px",
          height: "100%",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid2 size={12}>
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

          <Grid2 size={12} sx={{ margin: "30px 0px" }}>
            <Typography variant="h4">{organization} members</Typography>
          </Grid2>

          <Grid2 size={12}>
            <Grid2 container>
              <Grid2 size={12}>
                <Grid2 container sx={{ padding: "8px" }}>
                  <Grid2 size={2}>Avatar</Grid2>
                  <Grid2 size={2}>ID</Grid2>
                  <Grid2 size={8}>Name</Grid2>
                </Grid2>
                <Divider />
              </Grid2>
            </Grid2>
          </Grid2>

          <List sx={{ paddingTop: "0px" }}>
            {members.map((member) => (
              <Grid2
                container
                sx={{
                  borderBottom: "1px solid #e5e5e5",
                  alignItems: "center",
                  paddingTop: "8px",
                }}
              >
                <Grid2 size={2}>
                  <img
                    src={member.avatar_url}
                    style={{ width: "60px", borderRadius: "50%" }}
                  />
                </Grid2>
                <Grid2 size={2}>
                  <Typography component="span">{member.id}</Typography>
                </Grid2>
                <Grid2 size={8}>
                  <MuiLink
                    component={Link}
                    to={`/detail/${member.login}`}
                    sx={{ textDecoration: "none" }}
                  >
                    {member.login}
                  </MuiLink>
                </Grid2>
              </Grid2>
            ))}
          </List>
        </Grid2>
      </Grid2>
    </>
  );
};
