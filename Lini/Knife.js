import React from 'react';
import PropTypes from 'prop-types';
export default function LiniKnife({
  size,
  ...props
}) {
  let className = 'Component Lini LiniKnife';

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
    d: "M3.5 17c-.132 0-.261-.053-.353-.147S3 16.631 3 16.5a.5.5 0 11.5.5zM16.5 17c-.132 0-.261-.053-.353-.147S16 16.631 16 16.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 11H8.823l1.591-3.413A5.506 5.506 0 007.754.278a.503.503 0 00-.664.241L.328 15.02l-.003.008A3.483 3.483 0 000 16.499c0 1.93 1.57 3.5 3.5 3.5h13c1.93 0 3.5-1.57 3.5-3.5v-2c0-1.93-1.57-3.5-3.5-3.5zm0 1c1.209 0 2.219.862 2.45 2.003A3.489 3.489 0 0016.5 13H7.891l.466-1H16.5zM9.508 7.165L6.787 13H3.5a3.47 3.47 0 00-1.231.224L7.773 1.421a4.507 4.507 0 011.735 5.744zM16.5 19h-13C2.122 19 1 17.878 1 16.5S2.122 14 3.5 14h12.999c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5z"
  })));
}
LiniKnife.propTypes = {
  size: PropTypes.number.isRequired
};