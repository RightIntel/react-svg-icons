import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLoading({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLoading';

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
    d: "M3.519 10l-.038-.001a.5.5 0 01-.461-.537c.126-1.663.847-3.229 2.03-4.412s2.749-1.903 4.412-2.03a.5.5 0 11.076.998c-2.925.223-5.298 2.596-5.52 5.52A.5.5 0 013.52 10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 15c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 19c-2.404 0-4.664-.936-6.364-2.636S1 12.404 1 10s.936-4.664 2.636-6.364S7.596 1 10 1s4.664.936 6.364 2.636S19 7.596 19 10s-.936 4.664-2.636 6.364A8.94 8.94 0 0110 19zm0-17c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
  })));
}
LiniLoading.propTypes = {
  size: PropTypes.number.isRequired
};