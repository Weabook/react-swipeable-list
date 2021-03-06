import React from 'react';
import PropTypes from 'prop-types';

import styles from './SwipeableList.css';

const SwipeableList = ({
  children,
  scrollStartThreshold,
  swipeStartThreshold,
  threshold
}) =>
  typeof children === 'function' ? (
    children({
      className: styles.swipeableList,
      scrollStartThreshold,
      swipeStartThreshold,
      threshold
    })
  ) : (
    <div className={styles.swipeableList}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          scrollStartThreshold,
          swipeStartThreshold,
          threshold
        })
      )}
    </div>
  );

SwipeableList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  scrollStartThreshold: PropTypes.number,
  swipeStartThreshold: PropTypes.number,
  threshold: PropTypes.number
};

export default SwipeableList;
