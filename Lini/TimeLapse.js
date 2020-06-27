import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTimeLapse({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTimeLapse';

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
    d: "M5.5 8a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l2 2A.5.5 0 015.499 8zM13.5 18h-7c-.827 0-1.5-.673-1.5-1.5v-2a.5.5 0 011 0v2a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-1a.5.5 0 010-1h1c.827 0 1.5.673 1.5 1.5v7c0 .827-.673 1.5-1.5 1.5zM18.968 17.148c-.193 0-.39-.05-.586-.148l-1.211-.606C16.514 16.066 16 15.234 16 14.5v-3c0-.734.514-1.566 1.171-1.894L18.382 9c.196-.098.393-.148.586-.148.598 0 1.032.483 1.032 1.148v6c0 .316-.092.592-.267.799a.984.984 0 01-.765.349zm0-7.296a.328.328 0 00-.139.042l-1.211.606c-.323.162-.618.638-.618 1v3c0 .362.295.838.618 1l1.211.606a.328.328 0 00.139.042h.005A.315.315 0 0019 16v-6a.315.315 0 00-.027-.148h-.005z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 13A5.506 5.506 0 01.599 5.001 5.53 5.53 0 011.258 4H.5a.5.5 0 010-1h2a.5.5 0 01.3.9A4.466 4.466 0 001 7.5C1 9.981 3.019 12 5.5 12S10 9.981 10 7.5 7.981 3 5.5 3a.5.5 0 010-1C8.533 2 11 4.467 11 7.5S8.533 13 5.5 13z"
  })));
}
LiniTimeLapse.propTypes = {
  size: PropTypes.number.isRequired
};