import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TableCard from './card';

const styles = theme => ( {
  root: {
    flexGrow: 1,
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
} );

class TableCards extends React.Component {
  state = {
    spacing: '16',
  };

  handleClick = ( table, event ) => {
    this.props.onSelectedTableChange( table, event );
  };

  render() {
    const { classes, tables } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number( spacing )}
          >
            {tables.map( table => (
              <Link
                className={classes.link}
                key={Math.random()}
                onClick={() => this.handleClick( table )}
                to={`/order/${ table.id }`}
              >
                <TableCard key={table.id} table={table} />
              </Link>
            ) )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

TableCards.propTypes = {
  classes: PropTypes.object.isRequired,
  tables: PropTypes.array.isRequired,
  onSelectedTableChange: PropTypes.func.isRequired,
};

export default withStyles( styles )( TableCards );
