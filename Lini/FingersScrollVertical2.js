import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFingersScrollVertical2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFingersScrollVertical2';

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
    d: "M16.5 6a.5.5 0 110 1 .5.5 0 010-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 4a1.502 1.502 0 00-1.394 2.053A1.501 1.501 0 007.086 8H2.5a1.501 1.501 0 00-.395 2.947A1.502 1.502 0 003.5 13h5.966l-1.113 1.406c-.241.304-.361.694-.339 1.098s.186.779.46 1.053a1.508 1.508 0 002.12.003l3.523-3.479c.227.54.762.919 1.383.919h2c.827 0 1.5-.673 1.5-1.5v-7c0-.827-.673-1.5-1.5-1.5h-2a1.5 1.5 0 00-1.28.719C13.584 4.391 12.422 4 10.5 4h-1zm-.318 11.85a.653.653 0 01-.044-.823l1.754-2.216a.499.499 0 00-.392-.81h-7a.5.5 0 010-1h5a.5.5 0 000-1h-6a.5.5 0 010-1h6a.5.5 0 000-1 .5.5 0 010-1h1a.5.5 0 000-1 .5.5 0 010-1h1c2.102 0 3.139.516 3.5.748v6.043l-4.108 4.057a.512.512 0 01-.71.002zM17.5 5a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2zM3.146 1.646l-2 2a.5.5 0 00.707.707l1.146-1.146V6.5a.5.5 0 001 0V3.207l1.146 1.146a.5.5 0 00.707-.708l-2-2a.5.5 0 00-.707 0zM3 14.5v3.293l-1.146-1.146a.5.5 0 00-.707.707l2 2a.5.5 0 00.707 0l2-2a.498.498 0 000-.708.5.5 0 00-.707 0l-1.146 1.146v-3.293a.5.5 0 00-1 0z"
  })));
}
LiniFingersScrollVertical2.propTypes = {
  size: PropTypes.number.isRequired
};