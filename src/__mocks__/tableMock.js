import React from 'react';
import PropTypes from 'prop-types';

const TableMock = ({ children }) => (
  <table>
    <tbody>
      { children }
    </tbody>
  </table>
);

TableMock.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default TableMock;
