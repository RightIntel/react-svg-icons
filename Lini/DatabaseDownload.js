var React = require('react');

var PropTypes = require('prop-types');

function LiniDatabaseDownload({
  size,
  ...props
}) {
  var className = 'Component Lini LiniDatabaseDownload';

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
    d: "M11.854 15.646c-0.195-0.195-0.512-0.195-0.707 0l-1.146 1.146v-4.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4.293l-1.146-1.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512-0-0.707z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.067 1.609c-0.497-0.326-1.193-0.615-2.069-0.858-1.742-0.484-4.050-0.75-6.498-0.75s-4.756 0.267-6.498 0.75c-0.877 0.243-1.573 0.532-2.069 0.858-0.619 0.407-0.933 0.874-0.933 1.391v12c0 0.762 0.676 1.41 2.009 1.925 1.123 0.434 2.659 0.756 4.442 0.931 0.017 0.002 0.033 0.002 0.049 0.002 0.254 0 0.472-0.193 0.497-0.451 0.027-0.275-0.174-0.519-0.449-0.546-1.67-0.164-3.154-0.472-4.18-0.868-1.011-0.39-1.369-0.778-1.369-0.992v-2.565c0.353 0.221 0.798 0.424 1.335 0.609 1.31 0.45 3.134 0.768 5.134 0.894 0.011 0.001 0.021 0.001 0.032 0.001 0.262 0 0.482-0.204 0.499-0.469 0.017-0.276-0.192-0.513-0.468-0.531-1.914-0.121-3.644-0.419-4.872-0.841-1.31-0.45-1.66-0.902-1.66-1.098v-2.566c0.492 0.309 1.164 0.583 2.002 0.816 1.742 0.484 4.050 0.75 6.498 0.75s4.756-0.267 6.498-0.75c0.838-0.233 1.511-0.507 2.002-0.816v2.566c0 0.196-0.35 0.647-1.659 1.098-1.228 0.422-2.958 0.721-4.872 0.841-0.276 0.017-0.485 0.255-0.468 0.53 0.017 0.265 0.237 0.469 0.499 0.469 0.011 0 0.021-0 0.032-0.001 2.001-0.126 3.824-0.443 5.134-0.894 0.537-0.184 0.982-0.388 1.334-0.609v2.565c0 0.214-0.359 0.602-1.369 0.992-1.025 0.396-2.51 0.704-4.18 0.868-0.275 0.027-0.476 0.272-0.449 0.546 0.025 0.258 0.243 0.451 0.497 0.451 0.016 0 0.033-0.001 0.049-0.002 1.783-0.175 3.319-0.497 4.442-0.931 1.333-0.515 2.009-1.162 2.009-1.925v-12c0-0.517-0.314-0.985-0.933-1.391zM3.27 1.714c1.658-0.46 3.87-0.714 6.23-0.714s4.573 0.254 6.23 0.714c1.795 0.499 2.27 1.059 2.27 1.286s-0.474 0.787-2.27 1.286c-1.658 0.46-3.87 0.714-6.23 0.714s-4.573-0.254-6.23-0.714c-1.795-0.499-2.27-1.059-2.27-1.286s0.474-0.787 2.27-1.286zM15.73 8.286c-1.658 0.46-3.87 0.714-6.23 0.714s-4.573-0.254-6.23-0.714c-1.795-0.499-2.27-1.059-2.27-1.286v-2.566c0.492 0.309 1.164 0.583 2.002 0.816 1.742 0.484 4.050 0.75 6.498 0.75s4.756-0.267 6.498-0.75c0.838-0.233 1.511-0.507 2.002-0.816v2.566c0 0.227-0.474 0.787-2.27 1.286z",
    fill: "#000000"
  })));
}

LiniDatabaseDownload.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDatabaseDownload;