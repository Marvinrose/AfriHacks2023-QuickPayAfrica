import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import earthenware from "assets/earthenware.jpg";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import StarRateIcon from "@mui/icons-material/StarRate";

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Card>
        <CardMedia
          component="img"
          height="194"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2qs_bhOeNFa1ZMO2NFYXrd9jvcuFxEaGcw&usqp=CAU"
          alt="Paella dish"
          className="img-fluid"
        />
      </Card>
      <CardHeader
        style={{ marginBottom: "0" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" style={{ fontSize: "18px" }}>
            <StarRateIcon />
            <span>4.8</span>
          </IconButton>
        }
        title="Ntooilo . Earthenwares"
        subheader="Mathew Nathan, South africa "
        header="Mathew Nathan, South africa "
      />
      <div className="m-0">
        <CardContent sx={{ marginTop: 0, marginBottom: 0 }}>
          <Typography variant="body2" color="text.secondary">
            This is an earthen ware made out of pure south african clay.
          </Typography>
        </CardContent>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CardActions disableSpacing style={{ display: "flex" }}>
          <IconButton aria-label="add to favorites">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardActions disableSpacing style={{ display: "flex" }}>
          <IconButton aria-label="share">
            <FavoriteIcon sx={{ color: red[500] }} />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}
