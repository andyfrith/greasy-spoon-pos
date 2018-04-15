import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ( {
  button: {
    margin: theme.spacing.unit,
  },
} );

function doSomething( event ) {
  // eslint-disable-next-line no-console
  console.log( event.currentTarget.getAttribute( 'data-something' ) );
}

function Navigation( props ) {
  const { classes } = props;
  return (
    <div>
      <Button
        className={classes.button}
        onClick={doSomething}
        data-something="my tables"
      >
        My Tables
      </Button>
      <Button
        className={classes.button}
        onClick={doSomething}
        data-something="here I am"
      >
        All Tables
      </Button>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( Navigation );
