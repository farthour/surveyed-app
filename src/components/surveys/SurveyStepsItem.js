import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

import SimpleCard from "../SimpleCard";

function SurveyStepsItem({
  questionIdentifier,
  questionTitle,
  isInitialStep,
  className,
}) {
  return (
    <SimpleCard className={`relative ${className}`}>
      <CardContent>
        <Chip label="question-identifier" size="small" />
        <Typography gutterBottom variant="h6" component="div">
          this is a question
        </Typography>

        <Typography variant="body2">some other content</Typography>
      </CardContent>
      <CardActions>
        <SportsScoreIcon color="success" />
      </CardActions>
    </SimpleCard>
  );
}

export default SurveyStepsItem;
