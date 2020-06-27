import React from 'react';
import PropTypes from 'prop-types';
export default function LiniResizeHandle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniResizeHandle';

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
    d: "M16.5 19c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM9.5 19C8.122 19 7 17.878 7 16.5S8.122 14 9.5 14s2.5 1.122 2.5 2.5S10.878 19 9.5 19zm0-4c-.827 0-1.5.673-1.5 1.5S8.673 18 9.5 18s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM16.5 12c-1.378 0-2.5-1.122-2.5-2.5S15.122 7 16.5 7 19 8.122 19 9.5 17.878 12 16.5 12zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S17.327 8 16.5 8zM16.5 5C15.122 5 14 3.878 14 2.5S15.122 0 16.5 0 19 1.122 19 2.5 17.878 5 16.5 5zm0-4c-.827 0-1.5.673-1.5 1.5S15.673 4 16.5 4 18 3.327 18 2.5 17.327 1 16.5 1zM9.5 12C8.122 12 7 10.878 7 9.5S8.122 7 9.5 7 12 8.122 12 9.5 10.878 12 9.5 12zm0-4C8.673 8 8 8.673 8 9.5S8.673 11 9.5 11s1.5-.673 1.5-1.5S10.327 8 9.5 8zM2.5 19C1.122 19 0 17.878 0 16.5S1.122 14 2.5 14 5 15.122 5 16.5 3.878 19 2.5 19zm0-4c-.827 0-1.5.673-1.5 1.5S1.673 18 2.5 18 4 17.327 4 16.5 3.327 15 2.5 15z"
  })));
}
LiniResizeHandle.propTypes = {
  size: PropTypes.number.isRequired
};