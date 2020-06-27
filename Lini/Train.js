import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTrain({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTrain';

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
    d: "M14.5 15h-10A2.503 2.503 0 012 12.5v-10C2 1.122 3.122 0 4.5 0h10C15.878 0 17 1.122 17 2.5v10c0 1.378-1.122 2.5-2.5 2.5zM4.5 1C3.673 1 3 1.673 3 2.5v10c0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5h-10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.947 19.276l-2-4a.5.5 0 00-.895.447l.138.276H2.808l.138-.276a.5.5 0 00-.895-.447l-2 4a.5.5 0 00.895.447l.362-.724H17.69l.362.724a.501.501 0 00.895-.447zM1.809 18l.5-1h14.382l.5 1H1.809zM5.5 13c-.827 0-1.5-.673-1.5-1.5S4.673 10 5.5 10s1.5.673 1.5 1.5S6.327 13 5.5 13zm0-2a.5.5 0 100 1 .5.5 0 000-1zM13.5 13c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM12.5 3h-6a.5.5 0 010-1h6a.5.5 0 010 1zM14.5 4h-10a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5zM5 5h4v3H5V5zm9 3h-4V5h4v3z"
  })));
}
LiniTrain.propTypes = {
  size: PropTypes.number.isRequired
};