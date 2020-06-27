function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPanorama({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPanorama';

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
    d: "M15.5 8c-.827 0-1.5-.673-1.5-1.5S14.673 5 15.5 5s1.5.673 1.5 1.5S16.327 8 15.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.912 3.211C15.058 2.43 12.603 2 10 2s-5.057.43-6.912 1.211C1.096 4.05 0 5.218 0 6.5v8c0 1.283 1.097 2.451 3.088 3.289C4.942 18.57 7.397 19 10 19s5.057-.43 6.912-1.211C18.904 16.95 20 15.782 20 14.5v-8c0-1.283-1.097-2.451-3.088-3.289zm-13.435.921C5.211 3.402 7.528 3 10 3s4.789.402 6.523 1.132C18.097 4.795 19 5.658 19 6.5s-.903 1.705-2.477 2.368c-.443.187-.925.352-1.437.494L10.538 4.4c-.274-.299-.655-.467-1.045-.459s-.765.189-1.027.499L6.667 6.562l-.129-.146c-.271-.305-.649-.477-1.039-.471s-.763.187-1.025.499l-1.74 2.07C1.623 7.913 1 7.2 1 6.501c0-.842.903-1.705 2.477-2.368zM8.33 9.937c-1.744-.132-3.352-.472-4.656-.989l1.565-1.861c.076-.091.173-.141.274-.143s.199.047.278.135l2.54 2.858zm1.392.061L7.338 7.316l1.891-2.23c.078-.092.179-.144.283-.146s.208.046.289.135l4.171 4.551A20.486 20.486 0 019.999 10l-.278-.002zm6.801 6.87C14.789 17.598 12.472 18 10 18s-4.789-.402-6.523-1.132C1.903 16.205 1 15.342 1 14.5v-1.987c.41.382.94.732 1.58 1.045 1.524.745 3.615 1.239 5.886 1.391l.034.001a.5.5 0 00.032-.999c-2.145-.143-4.103-.602-5.514-1.291C1.716 12.024.999 11.256.999 10.5V8.512c.512.477 1.214.909 2.088 1.277C4.941 10.57 7.396 11 9.999 11s5.057-.43 6.912-1.211c.874-.368 1.576-.8 2.088-1.277V10.5c0 .81-.846 1.648-2.322 2.301-1.624.718-3.822 1.142-6.189 1.194a.5.5 0 00-.148.974l3 1.005a.5.5 0 00.318-.948l-.667-.224c1.538-.209 2.943-.579 4.091-1.087.795-.352 1.439-.759 1.917-1.205v1.99c0 .842-.903 1.705-2.476 2.368z"
  })));
}
LiniPanorama.propTypes = {
  size: PropTypes.number.isRequired
};