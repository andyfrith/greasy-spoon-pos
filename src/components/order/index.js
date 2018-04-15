import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Check from '../check';
import Menu from '../menu';

const styles = {
  root: {
    background: 'none',
    flexGrow: 1,
  },
};

const Order = ( props ) => {
  const {
    classes,
    check,
    menu,
    table,
    openCheck,
    sendCheck,
    closeCheck,
    addCheckItem,
    voidCheckItem,
  } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={8}>
          <Menu
            menu={menu}
            addCheckItem={itemId => addCheckItem( check, itemId )}
            checkOpen={check && check.id && !check.closed}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Check
            check={check}
            menu={menu}
            table={table}
            openCheck={openCheck}
            sendCheck={sendCheck}
            closeCheck={() => closeCheck( check )}
            voidCheckItem={orderItemId => voidCheckItem( check, orderItemId )}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Order.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  check: PropTypes.object.isRequired,
  table: PropTypes.object.isRequired,
  openCheck: PropTypes.func.isRequired,
  sendCheck: PropTypes.func.isRequired,
  closeCheck: PropTypes.func.isRequired,
  addCheckItem: PropTypes.func.isRequired,
  voidCheckItem: PropTypes.func.isRequired,
};

export default withStyles( styles, { withTheme: true } )( Order );
