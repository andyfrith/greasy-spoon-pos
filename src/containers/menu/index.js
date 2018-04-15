import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';
import loadMenu from '../../actions/menuActions';
import Menu from '../../components/menu';

class MenuContainer extends React.Component {
  componentDidMount() {
    this.props.loadMenuConnect();
  }

  render() {
    if ( this.props.error !== '' ) {
      return <div>Error: {this.props.error}</div>;
    }

    if ( this.props.isFetching ) {
      return <CircularProgress />;
    }

    return <Menu menu={this.props.menu} />;
  }
}

MenuContainer.propTypes = {
  loadMenuConnect: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ( {
  menu: state.menu.menu,
  isFetching: state.menu.isFetching,
  error: state.menu.error,
} );

export default connect( mapStateToProps, { loadMenuConnect: loadMenu } )( MenuContainer );
