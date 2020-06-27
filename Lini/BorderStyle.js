import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBorderStyle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBorderStyle';

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
    d: "M9 2h1v1H9V2zM17 18h1v1h-1v-1zM9 18h1v1H9v-1zM3 2h1v1H3V2zM15 2h1v1h-1V2zM3 18h1v1H3v-1zM5 18h1v1H5v-1zM7 18h1v1H7v-1zM11 18h1v1h-1v-1zM13 18h1v1h-1v-1zM15 18h1v1h-1v-1zM1.5 19a.5.5 0 01-.5-.5v-16a.5.5 0 011 0v16a.5.5 0 01-.5.5zM7.5 3h-2a.5.5 0 010-1h2a.5.5 0 010 1zM13.5 3h-2a.5.5 0 010-1h2a.5.5 0 010 1zM17.5 5a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM17.5 9a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM17.5 13a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM17.5 17a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5z"
  })));
}
LiniBorderStyle.propTypes = {
  size: PropTypes.number.isRequired
};