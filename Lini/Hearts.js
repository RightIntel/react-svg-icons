import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHearts({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHearts';

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
    d: "M9.5 19a.5.5 0 01-.5-.5c0-2.179-2.003-3.569-4.124-5.04-1.162-.806-2.363-1.639-3.278-2.641C.523 9.642 0 8.393 0 7c0-2.757 2.243-5 5-5a5.006 5.006 0 014.5 2.821A5.005 5.005 0 0114 2a4.97 4.97 0 013.535 1.459A4.966 4.966 0 0119 7c0 1.392-.523 2.641-1.598 3.819-.915 1.002-2.116 1.836-3.278 2.641C12.003 14.932 10 16.321 10 18.5a.5.5 0 01-.5.5zM5 3C2.794 3 1 4.794 1 7c0 2.554 2.159 4.052 4.446 5.638 1.607 1.115 3.253 2.257 4.054 3.811.802-1.555 2.448-2.697 4.054-3.811C15.84 11.052 18 9.554 18 7c0-2.206-1.794-4-4-4s-4 1.794-4 4a.5.5 0 01-1 0c0-2.206-1.794-4-4-4z"
  })));
}
LiniHearts.propTypes = {
  size: PropTypes.number.isRequired
};