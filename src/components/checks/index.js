import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import moment from 'moment';

const styles = theme => ( {
  root: {
    width: '100%',
    background: 'none',
  },
  avatar: {
    borderRadius: 0,
    width: 120,
    height: 90,
  },
  link: {
    color: 'transparent',
  },
  primary: {
    fontSize: '18px',
    fontWeight: 'semi',
  },
  secondary: {
    color: '#666',
  },
  mileage: {
    fontWeight: 'bold',
  },
  posted: {
    fontWeight: 'bold',
  },
} );

class CheckList extends React.Component {
  handleClick = ( check, event ) => {
    this.props.onSelectedCheckChange( check, event );
  };

  render() {
    const { classes, checks } = this.props;

    return (
      <div className={classes.root}>
        <Typography type="body2" className={classes.primary}>
          Closed Checks
        </Typography>
        {checks &&
          checks.length === 0 && (
            <Typography type="body2" className={classes.secondary}>
              No closed checks
            </Typography>
          )}
        {checks &&
          checks.length > 0 && (
            <List component="nav">
              {checks.map( check => (
                <Link
                  className={classes.link}
                  key={Math.random()}
                  onClick={() => this.handleClick( check )}
                  to={`/check/${ check.id }`}
                >
                  <ListItem button divider>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography type="body2" className={classes.primary}>
                          {`${ check.id }`}
                        </Typography>
                      }
                      secondary={
                        <div>
                          <Typography
                            type="body2"
                            className={classes.secondary}
                          >
                            {`${ moment( check.dateUpdated ).format( 'MMMM Do YYYY, h:mm:ss a' ) }`}
                          </Typography>
                          <Typography
                            type="body2"
                            className={classes.secondary}
                          >
                            {`Table: ${ check.tableId }`}
                          </Typography>
                        </div>
                      }
                    />
                  </ListItem>
                </Link>
              ) )}
            </List>
          )}
      </div>
    );
  }
}

CheckList.propTypes = {
  classes: PropTypes.object.isRequired,
  checks: PropTypes.array.isRequired,
  onSelectedCheckChange: PropTypes.func.isRequired,
};

export default withStyles( styles )( CheckList );
