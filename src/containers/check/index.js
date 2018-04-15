import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';
import CheckDetails from '../../components/check/details';

const CheckContainer = ( props ) => {
  const {
    selectedCheck, error, isFetching, menu,
  } = props;

  if ( error !== '' ) {
    return <div>Error: {error}</div>;
  }

  if ( isFetching ) {
    return <CircularProgress />;
  }

  return <CheckDetails check={selectedCheck} menu={menu} />;
};

CheckContainer.propTypes = {
  selectedCheck: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ( {
  selectedCheck: state.selectedCheck,
  menu: state.menu.menu,
  isFetching: state.tables.isFetching,
  error: state.tables.error,
} );

export default connect( mapStateToProps )( CheckContainer );
