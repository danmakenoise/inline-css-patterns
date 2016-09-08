import React, { PropTypes } from 'react';
import { StyleSheet } from 'aphrodite';

import styles, { colors } from '../../styles';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

const listStyles = StyleSheet.create({
  blueRow: {
    backgroundColor: colors.blue,
    color: colors.white
  },
  grayRow: {
    backgroundColor: colors.gray,
    color: colors.white
  }
});

const List = ({ items }) => (
  <div className={styles('container')}>
    <ul>
      { items.map((item, index) => (
        <li
          className={
            styles(
              'li',
              (index % 2 === 0 ? listStyles.blueRow : listStyles.grayRow),
              listStyles.li
            )
          }
          key={index}
        >
          { item }
        </li>
      ))}
    </ul>
  </div>
);

List.propTypes = propTypes;

export default List;
