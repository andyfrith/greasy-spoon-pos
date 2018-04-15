import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import GroupIcon from 'material-ui-icons/GroupWork';

const styles = theme => ( {
  root: {
    margin: '10px 10px 10px 10px',
  },
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.primary,
  },
} );

function TableCard( props ) {
  const { classes, table } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <GroupIcon />
            </Avatar>
          }
        />
        <CardContent>
          <Typography color="primary" variant="headline" component="h2">
            {`Table ${ table.number }`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

TableCard.propTypes = {
  classes: PropTypes.object.isRequired,
  table: PropTypes.object.isRequired,
};

export default withStyles( styles, { withTheme: true } )( TableCard );
