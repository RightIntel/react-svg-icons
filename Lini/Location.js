import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLocation({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLocation';

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
    d: "M8.5 20a.5.5 0 01-.5-.5V12H.5a.5.5 0 01-.251-.932l19-11a.5.5 0 01.683.683l-11 19a.5.5 0 01-.433.249zm-6.138-9H8.5a.5.5 0 01.5.5v6.138l9.128-15.766L2.362 11z"
  })));
}
LiniLocation.propTypes = {
  size: PropTypes.number.isRequired
};