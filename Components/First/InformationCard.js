import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function InformationCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Amet mollit sit sint Lorem est dolor."
        subheader="September 02, 2020"
      />
      <CardMedia
        className={classes.media}
        image="/img/matrix.jpg"
        title="In ex anim cupidatat nulla"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Voluptate ad elit nisi nisi veniam officia do et. Et sit nostrud nisi amet irure dolore cillum ex enim sit mollit est irure do.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Magna consequat cupidatat qui duis qui Lorem ipsum ipsum consectetur ex eu. Sit reprehenderit nulla sint anim consectetur culpa veniam fugiat magna. Id minim amet laboris id exercitation ea veniam in. Enim sint excepteur pariatur non excepteur in deserunt Lorem et tempor velit nisi. Voluptate anim consectetur irure nostrud cupidatat cillum ipsum. Velit aute voluptate magna magna duis magna duis consectetur.
          </Typography>
          <Typography paragraph>
            In adipisicing deserunt consectetur fugiat sint irure nostrud exercitation commodo ea. Mollit pariatur voluptate elit ea non reprehenderit velit. Sint ad et reprehenderit laborum laboris magna laborum. Tempor magna in incididunt ea ullamco laboris officia occaecat consequat nisi id quis ipsum nulla. In duis quis aliqua do incididunt enim cillum exercitation qui in non. Irure adipisicing incididunt quis amet reprehenderit id adipisicing ea aute nostrud culpa in in.
            Reprehenderit velit incididunt elit dolor deserunt sunt velit pariatur nostrud magna proident velit dolor consectetur. Nisi eu nostrud fugiat veniam veniam dolor ullamco laboris Lorem non cillum nostrud anim. Id ad excepteur ullamco non officia. Elit sit in nulla occaecat culpa aliquip minim occaecat veniam commodo aute. Duis cillum reprehenderit reprehenderit dolore eu duis aute.
            Magna consectetur commodo sunt nisi non pariatur aliqua excepteur. Velit veniam aliquip enim aliqua cillum excepteur laboris cillum aute ipsum officia proident minim consequat. Aliqua fugiat deserunt cillum veniam velit laborum reprehenderit culpa officia pariatur sint. Sunt eiusmod enim culpa cupidatat officia consectetur reprehenderit consequat irure ad consequat amet anim. Reprehenderit voluptate nulla ex adipisicing officia ex commodo do sit enim fugiat cillum id. Aliquip amet laborum amet consectetur proident dolore et est amet ipsum elit.
          </Typography>
          <Typography paragraph>
            Sit voluptate eu adipisicing excepteur elit ut esse laboris deserunt veniam minim occaecat. Anim qui tempor cillum nostrud officia in cillum. Sunt in sint dolor eu eu deserunt ea sit cupidatat irure enim pariatur qui ex. Consequat ea quis est enim voluptate excepteur. Minim commodo do cillum laboris quis. Exercitation nisi consequat dolore esse elit eu amet est laborum adipisicing labore sit Lorem nulla.
            Eu cupidatat nisi cupidatat laboris magna et laboris. Anim aute aliquip laborum incididunt quis esse aliqua consectetur elit mollit culpa ea. Et occaecat sunt enim nulla exercitation consectetur pariatur pariatur. Sint incididunt culpa labore sunt et irure officia veniam proident enim qui. Dolor quis culpa qui excepteur non minim laboris officia cupidatat minim veniam irure amet.
            Adipisicing aliquip Lorem sit duis nisi magna anim eiusmod. Adipisicing sint quis labore enim elit ipsum nulla Lorem voluptate mollit anim aute laboris. Cillum nostrud dolore adipisicing voluptate. Sint nulla aliquip eu commodo esse proident dolore mollit aliqua laboris amet et mollit.
            Laborum voluptate esse ullamco nulla fugiat laboris est pariatur velit est occaecat minim. Dolor excepteur nostrud ad labore excepteur duis qui reprehenderit cillum adipisicing et culpa. Tempor reprehenderit eu consequat irure cupidatat dolor laboris aute incididunt ipsum in ea nostrud. Laborum et commodo tempor quis reprehenderit pariatur nulla consequat ea ipsum. Aliqua nulla est fugiat exercitation sint ipsum ad ipsum dolore aliqua consectetur. Minim dolor proident aliqua nisi commodo ipsum ut in occaecat voluptate eu. Ullamco officia excepteur officia id enim aliquip non cupidatat consequat sunt.
            Sit aliqua labore pariatur voluptate do. Deserunt magna dolore est ut in incididunt. Adipisicing ullamco nostrud et irure ullamco ex aute tempor Lorem aute officia non ad. Ipsum officia cillum officia ut nulla cupidatat tempor in reprehenderit. Irure magna quis laborum esse Lorem.
          </Typography>
          <Typography>
            Tempor non sint veniam Lorem ad ut mollit id. Eiusmod et dolore nostrud proident ex Lorem duis. Labore sit excepteur laboris amet. Eiusmod ad occaecat labore proident ex sunt reprehenderit quis. Labore et est ut culpa duis consequat aute duis cupidatat culpa.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
