import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCalculator({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCalculator';

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
    d: "M7.5 10h-6C.673 10 0 9.327 0 8.5v-6C0 1.673.673 1 1.5 1h6C8.327 1 9 1.673 9 2.5v6c0 .827-.673 1.5-1.5 1.5zm-6-8a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6zM7.5 20h-6C.673 20 0 19.327 0 18.5v-6c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5zm-6-8a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 6h-4a.5.5 0 010-1h4a.5.5 0 010 1zM6.5 15H5v-1.5a.5.5 0 00-1 0V15H2.5a.5.5 0 000 1H4v1.5a.5.5 0 001 0V16h1.5a.5.5 0 000-1zM17.5 20h-6c-.827 0-1.5-.673-1.5-1.5v-16c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zm-6-18a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 10h-4a.5.5 0 010-1h4a.5.5 0 010 1zM16.5 12h-4a.5.5 0 010-1h4a.5.5 0 010 1z"
  })));
}
LiniCalculator.propTypes = {
  size: PropTypes.number.isRequired
};