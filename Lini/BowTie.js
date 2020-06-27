function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBowTie({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBowTie';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.426 6.846a1.67 1.67 0 00-2.039-.724l-4.53 1.793a3.492 3.492 0 00-4.714 0l-4.53-1.793a1.67 1.67 0 00-2.039.724C.515 6.951 0 7.943 0 10.5s.516 3.549.574 3.654c.295.525.869.835 1.453.835.198 0 .397-.036.587-.111l4.53-1.793a3.492 3.492 0 004.714 0l4.53 1.793c.19.075.389.111.587.111.584 0 1.158-.31 1.453-.835.059-.105.574-1.097.574-3.654s-.516-3.549-.574-3.654zm-16.18 7.102a.682.682 0 01-.797-.28c-.023-.046-.449-.93-.449-3.169s.426-3.123.449-3.169a.683.683 0 01.797-.28l4.237 1.677a3.473 3.473 0 00-.447 1.272H4.5a.5.5 0 000 1h1.536c.066.458.221.888.447 1.272l-4.237 1.677zM9.5 13C8.122 13 7 11.878 7 10.5S8.122 8 9.5 8 12 9.122 12 10.5 10.878 13 9.5 13zm8.051.669a.683.683 0 01-.797.28l-4.237-1.677c.226-.383.381-.813.447-1.272H14.5a.5.5 0 000-1h-1.536a3.486 3.486 0 00-.447-1.272l4.237-1.677a.682.682 0 01.797.28c.023.046.449.93.449 3.169s-.426 3.123-.449 3.169z"
  })));
}
LiniBowTie.propTypes = {
  size: PropTypes.number.isRequired
};