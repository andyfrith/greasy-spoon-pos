import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addCheckItem,
  voidCheckItem,
  createNewCheck,
  closeCheck,
} from '../../actions/checkActions';
import Order from '../../components/order';

const OrderContainer = ( {
  menu,
  selectedCheck,
  selectedTable,
  createNewCheckConnect,
  addCheckItemConnect,
  voidCheckItemConnect,
  closeCheckConnect,
} ) => {
  const openCheck = () => {
    createNewCheckConnect( selectedTable.id );
  };

  const handleAddCheckItem = ( checkId, itemId ) => {
    addCheckItemConnect( checkId, itemId );
  };

  const handleVoidCheckItem = ( check, orderedItemId ) => {
    voidCheckItemConnect( check, orderedItemId );
  };

  const sendCheck = () => {
    console.log( 'sendCheck()' );
  };

  const handleCloseCheck = ( check ) => {
    closeCheckConnect( check );
  };

  return (
    <Order
      check={selectedCheck}
      menu={menu}
      table={selectedTable}
      openCheck={openCheck}
      sendCheck={sendCheck}
      closeCheck={handleCloseCheck}
      addCheckItem={handleAddCheckItem}
      voidCheckItem={handleVoidCheckItem}
    />
  );
};

OrderContainer.propTypes = {
  menu: PropTypes.array.isRequired,
  selectedCheck: PropTypes.object.isRequired,
  selectedTable: PropTypes.object.isRequired,
  createNewCheckConnect: PropTypes.func.isRequired,
  addCheckItemConnect: PropTypes.func.isRequired,
  voidCheckItemConnect: PropTypes.func.isRequired,
  closeCheckConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ( {
  menu: state.menu.menu,
  selectedCheck: state.selectedCheck,
  selectedTable: state.selectedTable,
} );

export default connect( mapStateToProps, {
  createNewCheckConnect: createNewCheck,
  addCheckItemConnect: addCheckItem,
  voidCheckItemConnect: voidCheckItem,
  closeCheckConnect: closeCheck,
} )( OrderContainer );
