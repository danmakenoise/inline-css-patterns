import React, { PropTypes } from 'react';
import { StyleSheet } from 'aphrodite';

import styles, { breakPoints, colors } from '../../styles';

import List from '../list';

const propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

const appStyles = StyleSheet.create({
  container: {
    [breakPoints.large]: {
      backgroundColor: colors.gray,
      color: colors.white
    },
    [breakPoints.small]: {
      backgroundColor: colors.black,
      color: colors.gray
    }
  }
});

const App = ({ listItems }) => (
  <div className={styles('container')}>
    <div className={styles('container')}>
      <h1 className={styles('h1')}>
        Test CSS Page
      </h1>
    </div>
    <div className={styles('container', appStyles.container)}>
      <h2 className={styles('h2')}>
        This is a test subheading!
      </h2>
      <List items={listItems} />
    </div>
  </div>
);

App.propTypes = propTypes;

export default App;
