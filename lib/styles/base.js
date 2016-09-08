import { StyleSheet, css } from 'aphrodite';
import breakPoints from './breakpoints';
import colors from './colors';
import fonts from './fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    colors: colors.black,
    [breakPoints.large]: {
      padding: '50px'
    },
    [breakPoints.small]: {
      padding: '25px'
    }
  },
  h1: {
    fontFamily: fonts.standard,
    fontSize: '48px',
    fontWeight: '600'
  },
  h2: {
    fontFamily: fonts.standard,
    fontSize: '32px',
    fontWeight: '600'
  },
  li: {
    fontFamily: fonts.standard,
    fontSize: '24px',
    fontWeight: '400',
    padding: '15px'
  }
});

export default (className, ...otherStyles) => {
  if (!styles[className]) {
    return console.error(`style \'${className}' not found`); // eslint-disable-line
  }

  return otherStyles ? css(styles[className], ...otherStyles) : css(styles[className]);
};
