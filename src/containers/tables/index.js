import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';
import { loadTables, selectTable } from '../../actions/tableActions';
import Tables from '../../components/tables';

class TablesContainer extends React.Component {
  componentDidMount() {
    this.props.loadTablesConnect();
  }

  onSelectedTableChange = ( selectedTable ) => {
    this.props.selectTableConnect( selectedTable );
  };

  render() {
    if ( this.props.error !== '' ) {
      return <div>Error: {this.props.error}</div>;
    }

    if ( this.props.isFetching ) {
      return <CircularProgress />;
    }

    return (
      <Tables
        tables={this.props.tables}
        onSelectedTableChange={this.onSelectedTableChange}
      />
    );
  }
}

TablesContainer.propTypes = {
  loadTablesConnect: PropTypes.func.isRequired,
  selectTableConnect: PropTypes.func.isRequired,
  tables: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ( {
  tables: state.tables.tables,
  isFetching: state.tables.isFetching,
  error: state.tables.error,
} );

export default connect( mapStateToProps, {
  loadTablesConnect: loadTables,
  selectTableConnect: selectTable,
} )( TablesContainer );
