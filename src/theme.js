export const colors = {
  orange: 'rgb(255, 91, 46)',
  lightBlue: 'rgb(100, 200, 255)',
  brown: '#6b3c00',
  grey: {
    light: 'rgb(221, 221, 221)',
    medium: '#878787',
  },
  black: '#000',
  white: '#FFF',
};

export const fonts = {
  family: {
    main: 'Next',
  },
  size: {
    xxxs: 16,
    xxs: 18,
    xs: 23,
    s: 30,
    m: 33,
    l: 40,
    xl: 50,
    xxl: 100,
    xxxl: 200,
  },
  weight: {
    normal: 400,
    bold: 700,
  },
};

export const dimensions = {
  maxWidth: 1024,
  padding: {
    vertical: 40,
    horizontal: 20,
  },
};

export const SIZES = {
  xsmall: { min: 400, max: 599 },
  small: { min: 600, max: 779 },
  medium: { min: 780, max: 979 },
  large: { min: 980, max: 1279 },
  xlarge: { min: 1280, max: 1339 },
  xxlarge: { min: 1340, max: Infinity },
};

export const media = {
  lessThan(key, options = { dropPrefix: false }) {
    return `${options.dropPrefix ? '' : '@media '}(max-width: ${
      SIZES[key].min - 1
    }px)`;
  },

  greaterThan(key, options = { dropPrefix: false }) {
    return `${options.dropPrefix ? '' : '@media '}(min-width: ${
      SIZES[key].min
    }px)`;
  },

  between(smallKey, largeKey, options = {
    excludeLarge: false,
    dropPrefix: false,
  }) {
    const { excludeLarge, dropPrefix } = options;
    const prefix = dropPrefix ? '' : '@media ';

    if (excludeLarge) {
      return `${prefix}(min-width: ${
        SIZES[smallKey].min
      }px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
    }
    if (SIZES[largeKey].max === Infinity) {
      return `${prefix}(min-width: ${SIZES[smallKey].min}px)`;
    }

    return `${prefix}(min-width: ${SIZES[smallKey].min}px) and (max-width: ${
      SIZES[largeKey].max
    }px)`;
  },

  size(key, options = { dropPrefix: false }) {
    const size = SIZES[key];

    if (size.min == null) {
      return media.lessThan(key, options);
    }
    if (size.max == null) {
      return media.greaterThan(key, options);
    }

    return media.between(key, key, {
      ...options,
      excludeLarge: false,
    });
  },
};

export default colors;
