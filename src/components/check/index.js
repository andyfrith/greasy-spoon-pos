import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import BlockIcon from 'material-ui-icons/Block';
import _ from 'lodash';
import Actions from './actions';

const styles = {
  root: {
    background: 'none',
    flexGrow: 1,
  },
  subheading: {
    width: '100%',
    padding: 10,
    background: 'whitesmoke', // eslint-disable-line max-len
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

const Check = ( props ) => {
  const {
    classes,
    check,
    menu,
    table,
    openCheck,
    sendCheck,
    closeCheck,
    voidCheckItem,
  } = props;

  const voidMenuItem = ( e, item ) => {
    voidCheckItem( item.id );
  };

  const menuItem = item => _.find( menu, { id: item.itemId } );
  const subtotal = items =>
    _.sumBy( items, item => ( !item.voided ? menuItem( item ).price : 0 ) );

  const actions = () => {
    if ( check.tableId ) {
      return (
        <Actions
          status="open"
          openCheck={openCheck}
          sendCheck={sendCheck}
          closeCheck={closeCheck}
        />
      );
    }

    return (
      <Actions
        status="start"
        openCheck={openCheck}
        sendCheck={sendCheck}
        closeCheck={closeCheck}
      />
    );
  };

  const header = () => (
    <div>
      {!check.closed && actions()}
      <Typography
        className={classes.subheading}
        color="primary"
        variant="body2"
        gutterBottom
      >
        {check.closed ? 'Closed' : ''} Order For Table {table.number}
      </Typography>
    </div>
  );

  const items = () => (
    <div key={Math.random( 1 )}>
      {header()}
      <List dense>
        {_.sortBy( check.orderedItems, [ 'dateUpdated' ] ).map( item => (
          <ListItem key={item.id}>
            <ListItemText
              className={item.voided ? classes.voided : ''}
              primary={`${ menuItem( item ).name }`}
              secondary={`$${ menuItem( item ).price.toFixed( 2 ) }`}
            />
            {!item.voided &&
              !check.closed && (
                <ListItemSecondaryAction>
                  <Button
                    color="primary"
                    aria-label="remove"
                    className={classes.button}
                    mini
                    onClick={e => voidMenuItem( e, item )}
                  >
                    <BlockIcon />
                  </Button>
                </ListItemSecondaryAction>
              )}
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
        <div>
          {header()}
          <Typography color="primary" variant="body2" gutterBottom>
            {/* {!check.closed && 'Open table.'} */}
            Order is empty.
          </Typography>
        </div>
      )}
    </div>
  );
};

Check.propTypes = {
  classes: PropTypes.object.isRequired,
  check: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  table: PropTypes.object.isRequired,
  openCheck: PropTypes.func.isRequired,
  sendCheck: PropTypes.func.isRequired,
  closeCheck: PropTypes.func.isRequired,
  voidCheckItem: PropTypes.func.isRequired,
};

export default withStyles( styles, { withTheme: true } )( Check );
