import React from 'react';
import PropTypes from 'prop-types';
export default function LiniShieldCross({
  size,
  ...props
}) {
  let className = 'Component Lini LiniShieldCross';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 20a.503.503 0 01-.158-.026c-1.839-.613-4.147-2.651-5.88-5.193A19.944 19.944 0 010 3.499a.5.5 0 01.5-.5c2.814 0 7.238-1.926 8.723-2.916a.5.5 0 01.555 0c1.485.99 5.909 2.916 8.723 2.916a.5.5 0 01.5.5c0 5.128-1.883 8.965-3.462 11.282-1.733 2.541-4.041 4.58-5.88 5.193a.503.503 0 01-.158.026zM1.006 3.984a18.935 18.935 0 003.282 10.235c1.769 2.594 3.856 4.23 5.212 4.751 1.356-.521 3.443-2.156 5.212-4.751a18.935 18.935 0 003.282-10.235c-1.628-.102-3.442-.662-4.73-1.14-1.418-.525-2.849-1.193-3.764-1.751-.915.558-2.346 1.226-3.764 1.751-1.289.477-3.102 1.038-4.73 1.14z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.325 12.12L10.268 9.5l3.057-2.62a.5.5 0 10-.651-.759L9.499 8.842 6.324 6.121a.5.5 0 00-.651.759L8.73 9.5l-3.057 2.62a.5.5 0 10.651.76l3.175-2.721 3.175 2.721a.497.497 0 00.705-.055.5.5 0 00-.054-.705z"
  })));
}
LiniShieldCross.propTypes = {
  size: PropTypes.number.isRequired
};