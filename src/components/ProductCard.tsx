import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        alt="Apple iPhone 11"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18L3oYjp6SrpQxrOHgmF_dFfa2pLOad_Gog&usqp=CAU"
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          iPhone 11
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "1.25rem", color: "red" }}
        >
          $1849
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Apple iPhone 11 128GB Apple ACTIVE white
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small" sx={{ backgroundColor: "#2196F3", color: "#fff" }}>
          Learn More
        </Button>
        <Button size="small" sx={{ backgroundColor: "#4CAF50", color: "#fff" }}>
          הוסף לסל
        </Button>
      </CardActions>
    </Card>
  );
}
