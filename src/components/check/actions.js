import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
// import Send from 'material-ui-icons/Send';
import Open from 'material-ui-icons/PanoramaFishEye';
import Payment from 'material-ui-icons/Payment';

const styles = theme => ( {
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
} );

const Actions = ( props ) => {
  const {
    classes, status, openCheck, closeCheck,
  } = props;

  return (
    <div>
      {status === 'start' && (
        <Button
          className={classes.button}
          color="primary"
          size="small"
          onClick={openCheck}
        >
          Open
          <Open className={classes.rightIcon} />
        </Button>
      )}
      {/* {( status === 'open' || status === 'sent' ) && (
        <Button
          className={classes.button}
          color="primary"
          size="small"
          onClick={sendCheck}
        >
          Send
          <Send className={classes.rightIcon} />
        </Button>
      )} */}
      {( status === 'open' || status === 'sent' ) && (
        <Button
          className={classes.button}
          color="primary"
          size="small"
          onClick={closeCheck}
        >
          Checkout (Close)
          <Payment className={classes.rightIcon} />
        </Button>
      )}
    </div>
  );
};

Actions.propTypes = {
  classes: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  openCheck: PropTypes.func.isRequired,
  // sendCheck: PropTypes.func.isRequired,
  closeCheck: PropTypes.func.isRequired,
};

export default withStyles( styles )( Actions );
