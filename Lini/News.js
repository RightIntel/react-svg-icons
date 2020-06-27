import React from 'react';
import PropTypes from 'prop-types';
export default function LiniNews({
  size,
  ...props
}) {
  let className = 'Component Lini LiniNews';

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
    d: "M14.5 14h-6a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v4a.5.5 0 01-.5.5zM9 13h5v-3H9v3zM6.5 10h-3a.5.5 0 010-1h3a.5.5 0 010 1zM6.5 12h-3a.5.5 0 010-1h3a.5.5 0 010 1zM6.5 14h-3a.5.5 0 010-1h3a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 6a.5.5 0 00-.5.5v9a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h15a.5.5 0 01.5.5v9a.5.5 0 001 0v-9c0-.827-.673-1.5-1.5-1.5h-15C.673 4 0 4.673 0 5.5v10c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-9a.5.5 0 00-.5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 8h-11a.5.5 0 010-1h11a.5.5 0 010 1z"
  })));
}
LiniNews.propTypes = {
  size: PropTypes.number.isRequired
};