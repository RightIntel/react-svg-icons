import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGraph({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGraph';

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
    d: "M19.5 20H.5a.5.5 0 01-.5-.5V.5A.5.5 0 01.947.276l1 2a.5.5 0 01-.895.447l-.053-.106v16.382h16.382l-.106-.053a.5.5 0 01.447-.895l2 1a.5.5 0 01-.224.947z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 4.5c0-.827-.673-1.5-1.5-1.5S14 3.673 14 4.5c0 .48.227.908.579 1.182L12.473 12a1.49 1.49 0 00-.764.226L8.917 9.992a1.502 1.502 0 00-1.416-1.993c-.827 0-1.5.673-1.5 1.5 0 .404.161.77.421 1.04l-1.736 3.472a1.502 1.502 0 00-1.685 1.488c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.404-.161-.77-.421-1.04l1.736-3.472a1.483 1.483 0 00.976-.215l2.792 2.234a1.502 1.502 0 001.416 1.993 1.5 1.5 0 00.921-2.683l2.106-6.318A1.502 1.502 0 0017 4.499zM15.5 4a.5.5 0 110 1 .5.5 0 010-1zm-8 5a.5.5 0 110 1 .5.5 0 010-1zm-3 7a.5.5 0 110-1 .5.5 0 010 1zm8-2a.5.5 0 110-1 .5.5 0 010 1z"
  })));
}
LiniGraph.propTypes = {
  size: PropTypes.number.isRequired
};