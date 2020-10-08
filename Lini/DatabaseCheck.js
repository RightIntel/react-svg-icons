var React = require('react');

var PropTypes = require('prop-types');

function LiniDatabaseCheck({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniDatabaseCheck';

  if (props.className) {
    className += ' ' + props.className;
  }

  const pathProps = {};

  if (color) {
    pathProps.fill = color;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.067 1.609c-0.497-0.326-1.193-0.615-2.069-0.858-1.742-0.484-4.050-0.75-6.498-0.75s-4.756 0.267-6.498 0.75c-0.877 0.243-1.573 0.532-2.069 0.858-0.619 0.407-0.933 0.874-0.933 1.391v12c0 0.517 0.314 0.985 0.933 1.391 0.497 0.326 1.193 0.615 2.069 0.858 1.742 0.484 4.050 0.75 6.498 0.75 0.339 0 0.68-0.005 1.015-0.016 0.276-0.008 0.493-0.239 0.484-0.515s-0.239-0.494-0.515-0.484c-0.325 0.010-0.656 0.015-0.985 0.015-2.36 0-4.573-0.254-6.23-0.714-1.795-0.499-2.27-1.059-2.27-1.286v-2.566c0.492 0.309 1.164 0.583 2.002 0.816 1.742 0.484 4.050 0.75 6.498 0.75s4.756-0.267 6.498-0.751c0.877-0.243 1.573-0.532 2.069-0.858 0.619-0.406 0.933-0.874 0.933-1.391v-8c0-0.517-0.314-0.985-0.933-1.391zM3.27 1.714c1.658-0.46 3.87-0.714 6.23-0.714s4.573 0.254 6.23 0.714c1.795 0.499 2.27 1.059 2.27 1.286s-0.474 0.787-2.27 1.286c-1.658 0.46-3.87 0.714-6.23 0.714s-4.573-0.254-6.23-0.714c-1.795-0.499-2.27-1.059-2.27-1.286s0.474-0.787 2.27-1.286zM15.73 12.286c-1.658 0.46-3.87 0.714-6.23 0.714s-4.573-0.254-6.23-0.714c-1.795-0.499-2.27-1.059-2.27-1.286v-2.566c0.492 0.309 1.164 0.583 2.002 0.816 1.742 0.484 4.050 0.75 6.498 0.75s4.756-0.267 6.498-0.75c0.838-0.233 1.511-0.507 2.002-0.816v2.566c0 0.227-0.474 0.787-2.27 1.286zM15.73 8.286c-1.658 0.46-3.87 0.714-6.23 0.714s-4.573-0.254-6.23-0.714c-1.795-0.499-2.27-1.059-2.27-1.286v-2.566c0.492 0.309 1.164 0.583 2.002 0.816 1.742 0.484 4.050 0.75 6.498 0.75s4.756-0.267 6.498-0.75c0.838-0.233 1.511-0.507 2.002-0.816v2.566c0 0.227-0.474 0.787-2.27 1.286z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.5 19.5c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1.646 1.646 4.646-4.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-5 5c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps))));
}

LiniDatabaseCheck.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDatabaseCheck;