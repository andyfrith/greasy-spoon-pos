import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import AddCircleIcon from 'material-ui-icons/AddCircle';

const styles = theme => ( {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    background: 'none',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  titleBar: {
    fontSize: '8px',
    color: 'red',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
} );

function Menu( props ) {
  const {
    classes, menu, addCheckItem, checkOpen,
  } = props;

  const addMenuItem = ( e, item ) => {
    addCheckItem( item.id );
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {menu.map( item => (
          <GridListTile className={classes.gridListTile} key={item.id}>
            <img src="/img/food-placeholder.png" alt={item.name} />
            <GridListTileBar
              className={classes.titleBar}
              title={item.name}
              subtitle={<span>$ {item.price.toFixed( 2 )}</span>}
              actionIcon={
                checkOpen && (
                  <IconButton className={classes.icon}>
                    <AddCircleIcon onClick={e => addMenuItem( e, item )} />
                  </IconButton>
                )
              }
            />
          </GridListTile>
        ) )}
      </GridList>
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  addCheckItem: PropTypes.func.isRequired,
  checkOpen: PropTypes.bool,
};

Menu.defaultProps = {
  checkOpen: false,
};

export default withStyles( styles )( Menu );
