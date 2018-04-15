import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';
import { loadCheck, loadChecks } from '../../actions/checkActions';
import Checks from '../../components/checks';

class ChecksContainer extends React.Component {
  componentDidMount() {
    this.props.loadChecksConnect();
  }

  onSelectedCheckChange = ( selectedCheck ) => {
    this.props.loadCheckConnect( selectedCheck );
  };

  render() {
    if ( this.props.error !== '' ) {
      return <div>Error: {this.props.error}</div>;
    }

    if ( this.props.isFetching ) {
      return <CircularProgress />;
    }

    return (
      <Checks
        checks={this.props.checks}
        onSelectedCheckChange={this.onSelectedCheckChange}
      />
    );
  }
}

ChecksContainer.propTypes = {
  loadChecksConnect: PropTypes.func.isRequired,
  loadCheckConnect: PropTypes.func.isRequired,
  checks: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ( {
  checks: state.check.checks,
  isFetching: state.check.isFetching,
  error: state.check.error,
} );

export default connect( mapStateToProps, {
  loadChecksConnect: loadChecks,
  loadCheckConnect: loadCheck,
} )( ChecksContainer );
