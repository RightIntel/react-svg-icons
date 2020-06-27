import React from 'react';
import PropTypes from 'prop-types';
export default function LiniClubs({
  size,
  ...props
}) {
  let className = 'Component Lini LiniClubs';

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
    d: "M13.5 20h-8a.5.5 0 01-.224-.947c1.483-.742 2.159-1.939 2.466-2.87A5.006 5.006 0 01-.001 12c0-1.319.509-2.564 1.434-3.505a4.962 4.962 0 012.79-1.435A5.506 5.506 0 019.499 0a5.506 5.506 0 015.276 7.06 4.968 4.968 0 012.79 1.435A4.97 4.97 0 0118.999 12a5.006 5.006 0 01-7.744 4.182c.029.09.062.182.099.276a4.752 4.752 0 002.368 2.595.5.5 0 01-.224.947zm-6.399-1h4.798a5.824 5.824 0 01-1.491-2.22c-.403-1.054-.408-1.916-.408-1.952a.502.502 0 01.889-.314A3.986 3.986 0 0014 16c2.206 0 4-1.794 4-4 0-2.166-1.761-3.96-3.926-3.999a.5.5 0 01-.449-.7A4.505 4.505 0 009.5 1a4.505 4.505 0 00-4.125 6.301.5.5 0 01-.449.7C2.761 8.04 1 9.834 1 12c0 2.206 1.794 4 4 4a3.986 3.986 0 003.111-1.486.5.5 0 01.889.314c0 .036-.005.897-.408 1.952A5.84 5.84 0 017.101 19z"
  })));
}
LiniClubs.propTypes = {
  size: PropTypes.number.isRequired
};