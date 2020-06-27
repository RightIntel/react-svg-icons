import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSmartphoneWaves({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSmartphoneWaves';

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
    d: "M12.5 16h-5c-.827 0-1.5-.673-1.5-1.5v-9C6 4.673 6.673 4 7.5 4h5c.827 0 1.5.673 1.5 1.5v9c0 .827-.673 1.5-1.5 1.5zm-5-11a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1zM15.5 6a.5.5 0 01-.5-.5C15 4.122 13.878 3 12.5 3a.5.5 0 010-1C14.43 2 16 3.57 16 5.5a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 6a.5.5 0 01-.5-.5C17 3.019 14.981 1 12.5 1a.5.5 0 010-1C15.533 0 18 2.467 18 5.5a.5.5 0 01-.5.5zM7.5 18C5.57 18 4 16.43 4 14.5a.5.5 0 011 0C5 15.878 6.122 17 7.5 17a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 20A5.506 5.506 0 012 14.5a.5.5 0 011 0C3 16.981 5.019 19 7.5 19a.5.5 0 010 1z"
  })));
}
LiniSmartphoneWaves.propTypes = {
  size: PropTypes.number.isRequired
};