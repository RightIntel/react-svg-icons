import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAim({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAim';

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
    d: "M9.5 1a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zM9.5 15a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zM5 10.5a.5.5 0 00-.5-.5h-4a.5.5 0 000 1h4a.5.5 0 00.5-.5zM18.5 10h-4a.5.5 0 000 1h4a.5.5 0 000-1zM16.21 9a.5.5 0 01-.479-.357 6.475 6.475 0 00-4.374-4.374.5.5 0 01.285-.959 7.51 7.51 0 015.047 5.047.5.5 0 01-.48.643zM11.5 17.71a.5.5 0 01-.142-.979 6.479 6.479 0 004.374-4.374.5.5 0 01.959.285c-.353 1.187-1.006 2.28-1.886 3.161s-1.973 1.533-3.161 1.886a.51.51 0 01-.143.021zM7.5 17.71a.51.51 0 01-.143-.021 7.516 7.516 0 01-5.047-5.047.5.5 0 11.959-.285 6.475 6.475 0 004.374 4.373.5.5 0 01-.142.98zM2.79 9a.5.5 0 01-.48-.643c.353-1.187 1.006-2.28 1.886-3.161S6.169 3.663 7.357 3.31a.5.5 0 11.285.959 6.475 6.475 0 00-4.373 4.374.502.502 0 01-.479.358z"
  })));
}
LiniAim.propTypes = {
  size: PropTypes.number.isRequired
};