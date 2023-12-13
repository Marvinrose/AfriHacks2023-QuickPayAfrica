import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function GroupAvatars() {
  return (
    <>
      {" "}
      <AvatarGroup>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        style={{ padding: "30px" }}
      />
      <Avatar
        alt="Travis Howard"
        src="/static/images/avatar/2.jpg"
        style={{ padding: "30px" }}
      />
      <Avatar
        alt="Cindy Baker"
        src="/static/images/avatar/3.jpg"
        style={{ padding: "30px" }}
      />
      <Avatar
        alt="Agnes Walker"
        src="/static/images/avatar/4.jpg"
        style={{ padding: "30px" }}
      />
      <Avatar
        alt="Trevor Henderson"
        src="/static/images/avatar/5.jpg"
        style={{ padding: "30px" }}
      />
      <Avatar alt="+5" src="" style={{ padding: "30px" }} />{" "}
      </AvatarGroup>
    </>
  );
}
