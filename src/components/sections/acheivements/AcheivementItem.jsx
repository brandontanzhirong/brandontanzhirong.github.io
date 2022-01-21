import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function AcheivementItem({ title, date, img, description }) {
  return (
    <Card
      sx={{
        boxShadow: "0 8px 16px 0 #BDC9D7",
        marginBottom: "2rem",
        mx: "2rem",
        maxWidth: 450,
        borderRadius: "1.5rem",
        textAlign: "center",
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt={title}
        sx={{
          width: "60%",
          margin: "auto",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h4" sx={{ fontWeight: 500 }}>
          {date}
        </Typography>
        <Typography
          variant="subtitle2"
          color="inherit"
          sx={{ fontWeight: 400 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
