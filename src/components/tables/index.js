import React from 'react';
import PropTypes from 'prop-types';
import TableCards from './cards';

const Tables = props => (
  <div>
    <TableCards
      tables={props.tables}
      onSelectedTableChange={props.onSelectedTableChange}
    />
  </div>
);

Tables.propTypes = {
  tables: PropTypes.array.isRequired,
  onSelectedTableChange: PropTypes.func.isRequired,
};

export default Tables;
