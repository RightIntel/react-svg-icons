import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFlipHorizontal({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFlipHorizontal';

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
    d: "M8.5 20h-8a.5.5 0 01-.461-.694l8-19A.5.5 0 019 .5v19a.5.5 0 01-.5.5zm-7.247-1H8V2.976L1.253 19zM19.5 20h-8a.5.5 0 01-.5-.5V.5a.5.5 0 01.961-.194l8 19A.498.498 0 0119.5 20zM12 19h6.747L12 2.976V19z"
  })));
}
LiniFlipHorizontal.propTypes = {
  size: PropTypes.number.isRequired
};