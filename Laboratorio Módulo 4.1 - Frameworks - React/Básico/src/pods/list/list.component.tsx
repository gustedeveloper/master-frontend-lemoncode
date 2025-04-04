import React, { FC } from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./list.vm";
import Button from "@mui/material/Button";
import {
  Link as MuiLink,
  Grid2,
  TextField,
  Typography,
  List,
  Avatar,
} from "@mui/material";

interface Props {
  members: MemberEntity[];
  organization: string;
  handleSearchButton: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const headerElements = ["Avatar", "ID", "Name"];

export const ListComponent: FC<Props> = (props) => {
  const { members, handleSearchButton, value, setValue } = props;

  return (
    <>
      <Grid2
        container
        sx={{
          margin: {
            xs: "64px 32px",
            lg: "64px",
          },
          minWidth: "300px",
          height: "100%",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid2 size={12}>
          <Grid2 container spacing={2} sx={{ padding: "40px 0px 20px 0px" }}>
            <Grid2 size={{ xs: 6, sm: 3.5, md: 2.5, lg: 2, xl: 1.5 }}>
              <TextField
                id="filled-basic"
                label="Enter organization name"
                variant="filled"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Grid2>

            <Grid2
              size={{ xs: 6, sm: 8.5, md: 9.5, lg: 10, xl: 10.5 }}
              sx={{ display: "flex" }}
            >
              <Button variant="contained" onClick={handleSearchButton}>
                Search
              </Button>
            </Grid2>
          </Grid2>

          <List sx={{ bgcolor: "primary.main", padding: "20px" }}>
            <Grid2 container>
              {headerElements.map((e, index) => (
                <Grid2
                  key={index}
                  size={{ xs: e === "Avatar" ? 3.5 : 4.25, md: 4, lg: 2 }}
                  sx={{ color: "white" }}
                >
                  <Typography variant="h4">{e}</Typography>
                </Grid2>
              ))}
            </Grid2>
          </List>

          <List sx={{ bgcolor: "white", padding: "0px 20px" }}>
            {members.map((member) => (
              <Grid2
                key={member.id}
                container
                sx={{
                  borderBottom: "1px solid #e5e5e5",
                  alignItems: "center",
                  padding: "8px 0px",
                }}
              >
                <Grid2 size={{ xs: 3.5, md: 4, lg: 2 }}>
                  <Avatar
                    alt={"Member avatar"}
                    src={member.avatar_url}
                    sx={{
                      width: {
                        xs: "50px",
                        lg: "80px",
                      },
                      height: {
                        xs: "50px",
                        lg: "80px",
                      },
                    }}
                  ></Avatar>
                </Grid2>
                <Grid2 size={{ xs: 4.25, md: 4, lg: 2 }}>
                  <Typography component="span">{member.id}</Typography>
                </Grid2>
                <Grid2 size={{ xs: 4.25, md: 4, lg: 2 }}>
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
