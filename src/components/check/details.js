import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import _ from 'lodash';
import moment from 'moment';

const styles = {
  root: {
    background: 'none',
    flexGrow: 1,
  },
  subheading: {
    width: '100%',
    padding: 10,
    background: 'whitesmoke',
  },
  tax: {
    padding: '0 0 0 10px',
  },
  total: {
    padding: '10px 10px 0',
  },
  button: {
    marginRight: 0,
  },
  voided: {
    opacity: '0.3',
  },
};

const CheckDetails = ( props ) => {
  const { classes, check, menu } = props;

  const menuItem = item => _.find( menu, { id: item.itemId } );
  const subtotal = items =>
    _.sumBy( items, item => ( !item.voided ? menuItem( item ).price : 0 ) );

  const header = () => (
    <div>
      <Typography
        className={classes.subheading}
        color="primary"
        variant="body2"
        gutterBottom
      >
        Check: {check.id}
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary={`Date: ${ moment( check.dateUpdated ).format( 'MMMM Do YYYY, h:mm:ss a' ) }`}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Server: ${ check.createdBy }`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Table: ${ check.tableId }`} />
        </ListItem>
      </List>
      {check.orderedItems && check.orderedItems.length > 0 ? (
        <Typography
          className={classes.subheading}
          color="primary"
          variant="body2"
          gutterBottom
        >
          Items
        </Typography>
      ) : (
        <Typography
          className={classes.subheading}
          color="primary"
          variant="body2"
          gutterBottom
        >
          No purchase made.
        </Typography>
      )}
    </div>
  );

  const items = () => (
    <div key={Math.random( 1 )}>
      {header()}
      <List dense>
        {_.filter( _.sortBy( check.orderedItems, [ 'dateUpdated' ] ), {
          voided: false,
        } ).map( item => (
          <ListItem key={item.id}>
            <ListItemText
              className={item.voided ? classes.voided : ''}
              primary={`${ menuItem( item ).name }`}
              secondary={`$${ menuItem( item ).price.toFixed( 2 ) }`}
            />
          </ListItem>
        ) )}
      </List>
    </div>
  );

  const totals = () => (
    <div key={Math.random( 1 )}>
      <Divider />
      <Typography
        className={classes.total}
        variant="body2"
        color="primary"
        gutterBottom
      >
        Subtotal: ${subtotal( check.orderedItems ).toFixed( 2 )}
      </Typography>

      {check.tax && (
        <Typography
          className={classes.tax}
          color="primary"
          variant="body2"
          gutterBottom
        >
          Tax: ${check.tax.toFixed( 2 )}
        </Typography>
      )}
      {check.tip && (
        <Typography
          className={classes.tax}
          color="primary"
          variant="body2"
          gutterBottom
        >
          Tip: ${check.tip.toFixed( 2 )}
        </Typography>
      )}
      <Divider />
      <Typography className={classes.total} variant="body2" gutterBottom>
        Total: ${(
          subtotal( check.orderedItems ) +
          ( check.tax || 0 ) +
          ( check.tip || 0 )
        ).toFixed( 2 )}
      </Typography>
    </div>
  );

  return (
    <div className={classes.root}>
      {check.orderedItems && check.orderedItems.length > 0 ? (
        [ items(), totals() ]
      ) : (
        <div>{header()}</div>
      )}
    </div>
  );
};

CheckDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  check: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
};

export default withStyles( styles, { withTheme: true } )( CheckDetails );
