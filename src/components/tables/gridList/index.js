import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';

const styles = theme => ( {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500, // 500
    // height: 450, // 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
} );

/*
  {
    "id": "c482731d-19a4-4d1f-90ab-e4dc4ac7d28d",
    "number": 2
  }
*/

function TableGridList( props ) {
  const { classes, tables } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={80} className={classes.gridList}>
        {tables.map( table => (
          <GridListTile key={table.id}>
            <GridListTileBar
              title={`Table ${ table.number }`}
              subtitle={<span>{Math.ceil( Math.random( 1 ) * 10 )} seats</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ) )}
      </GridList>
    </div>
  );
}

TableGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  tables: PropTypes.array.isRequired,
};

export default withStyles( styles )( TableGridList );
