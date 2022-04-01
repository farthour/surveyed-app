import Link from "next/link";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SimpleCard from "../SimpleCard";

function SurveyListItem({ id, title, description, className }) {
  return (
    <SimpleCard className={`relative ${className}`}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>

        <CardActions className="flex justify-end px-0">
          <Link href="/#">
            <a>
              <Button size="small">Open</Button>
            </a>
          </Link>
        </CardActions>
      </CardContent>
    </SimpleCard>
  );
}

export default SurveyListItem;
