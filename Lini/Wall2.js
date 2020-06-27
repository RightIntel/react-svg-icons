import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWall2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWall2';

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
    d: "M2.5 20h-2a.5.5 0 010-1H2v-2H.5a.5.5 0 010-1h2a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM11.5 20h-7a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM5 19h6v-2H5v2zM18.5 20h-5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5a.5.5 0 010 1H14v2h4.5a.5.5 0 010 1zM14.5 15h-7a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM8 14h6v-2H8v2zM18.5 15h-2a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h2a.5.5 0 010 1H17v2h1.5a.5.5 0 010 1zM5.5 15h-5a.5.5 0 010-1H5v-2H.5a.5.5 0 010-1h5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM2.5 10h-2a.5.5 0 010-1H2V7H.5a.5.5 0 010-1h2a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM11.5 10h-7a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM5 9h6V7H5v2zM18.5 10h-5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5a.5.5 0 010 1H14v2h4.5a.5.5 0 010 1zM14.5 5h-7a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM8 4h6V2H8v2zM18.5 5h-2a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h2a.5.5 0 010 1H17v2h1.5a.5.5 0 010 1zM5.5 5h-5a.5.5 0 010-1H5V2H.5a.5.5 0 010-1h5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5z"
  })));
}
LiniWall2.propTypes = {
  size: PropTypes.number.isRequired
};