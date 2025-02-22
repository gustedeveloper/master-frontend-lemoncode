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

const headerElements = ["Avatar", "ID", "Name"];

export const ListComponent: React.FC<Props> = (props) => {
  const { members, handleSearchButton, value, setValue } = props;
  return (
    <>
      <Grid2
        container
        sx={{
          margin: {
            xs: "16px",
            sm: "32px",
            md: "48px",
            lg: "64px",
            xl: "80px",
          },
          minWidth: "300px",
          height: "100%",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid2 size={12}>
          <Grid2
            container
            spacing={2}
            sx={{ paddingBottom: { xs: "10px", md: "20px" } }}
          >
            <Grid2 size={{ xs: 5, md: 2.5, lg: 2, xl: 1.5 }}>
              <TextField
                id="filled-basic"
                label="Enter organization name"
                variant="filled"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Grid2>

            <Grid2
              size={{ xs: 7, md: 9.5, lg: 10, xl: 10.5 }}
              sx={{ display: "flex" }}
            >
              <Button variant="contained" onClick={handleSearchButton}>
                Search
              </Button>
            </Grid2>
          </Grid2>

          <List sx={{ bgcolor: "primary.main", padding: "20px" }}>
            <Grid2 container>
              {headerElements.map((e) => (
                <Grid2
                  size={{ xs: e === "Avatar" ? 3 : 4.5, md: 4, lg: 2 }}
                  sx={{ color: "white" }}
                >
                  <Typography variant="h4">{e}</Typography>
                </Grid2>
              ))}
            </Grid2>
          </List>

          <List
            sx={{ paddingTop: "0px", bgcolor: "white", padding: "0px 20px" }}
          >
            {members.map((member) => (
              <Grid2
                container
                sx={{
                  borderBottom: "1px solid #e5e5e5",
                  alignItems: "center",
                  paddingTop: "8px",
                }}
              >
                <Grid2 size={{ xs: 3, md: 4, lg: 2 }}>
                  <img
                    src={member.avatar_url}
                    style={{ width: "60px", borderRadius: "50%" }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 4.5, md: 4, lg: 2 }}>
                  <Typography component="span">{member.id}</Typography>
                </Grid2>
                <Grid2 size={{ xs: 4.5, md: 4, lg: 2 }}>
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
