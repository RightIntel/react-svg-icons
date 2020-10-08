var React = require('react');

var PropTypes = require('prop-types');

function LiniFan({
  size,
  ...props
}) {
  var className = 'Component Lini LiniFan';

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
    d: "M9.5 19c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.718c0-2.538 0.988-4.923 2.782-6.717s4.18-2.782 6.718-2.782c2.538 0 4.923 0.988 6.718 2.782s2.782 4.18 2.782 6.717-0.988 4.923-2.782 6.718c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 1c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.914 8.439c-0.127-0.773-0.39-1.509-0.783-2.19-0.138-0.239-0.444-0.321-0.683-0.182s-0.321 0.444-0.182 0.683c0.232 0.402 0.411 0.826 0.534 1.268-0.098-0.012-0.197-0.018-0.298-0.018h-3.001c-0.042-0.055-0.086-0.109-0.132-0.161 1.071-0.821 1.633-1.964 1.633-3.339 0-1.378-1.122-2.5-2.5-2.5-0.854 0-1.609 0.431-2.061 1.086-0.773 0.127-1.509 0.39-2.19 0.783-0.239 0.138-0.321 0.444-0.182 0.683 0.093 0.16 0.261 0.25 0.433 0.25 0.085 0 0.171-0.022 0.25-0.067 0.402-0.232 0.826-0.411 1.268-0.534-0.012 0.098-0.018 0.197-0.018 0.298v3.001c-0.055 0.042-0.109 0.086-0.161 0.132-0.821-1.071-1.964-1.633-3.339-1.633-1.378 0-2.5 1.122-2.5 2.5 0 0.854 0.431 1.609 1.086 2.061 0.127 0.773 0.39 1.509 0.783 2.19 0.093 0.16 0.261 0.25 0.433 0.25 0.085 0 0.171-0.022 0.25-0.067 0.239-0.138 0.321-0.444 0.182-0.683-0.232-0.402-0.411-0.826-0.534-1.268 0.098 0.012 0.197 0.018 0.298 0.018h3.001c0.042 0.055 0.086 0.109 0.132 0.161-1.071 0.821-1.633 1.963-1.633 3.339 0 1.378 1.122 2.5 2.5 2.5 0.854 0 1.609-0.431 2.061-1.086 0.773-0.127 1.509-0.39 2.19-0.783 0.239-0.138 0.321-0.444 0.182-0.683s-0.444-0.321-0.683-0.182c-0.402 0.232-0.826 0.411-1.268 0.534 0.012-0.098 0.018-0.197 0.018-0.298v-3.001c0.055-0.042 0.109-0.086 0.161-0.132 0.821 1.071 1.963 1.633 3.339 1.633 1.378 0 2.5-1.122 2.5-2.5 0-0.854-0.431-1.609-1.086-2.061zM9.5 11c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM9 4.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 1.158-0.499 2.071-1.483 2.717-0.311-0.139-0.655-0.217-1.017-0.217-0.171 0-0.338 0.017-0.5 0.050v-2.55zM4.5 10c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c1.158 0 2.071 0.499 2.717 1.483-0.139 0.311-0.217 0.655-0.217 1.017 0 0.171 0.017 0.338 0.050 0.5h-2.55zM10 14.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5c0-1.158 0.499-2.071 1.483-2.717 0.311 0.139 0.655 0.217 1.017 0.217 0.171 0 0.338-0.017 0.5-0.050v2.55zM14.5 12c-1.158 0-2.071-0.499-2.717-1.483 0.139-0.311 0.217-0.655 0.217-1.017 0-0.171-0.017-0.338-0.050-0.5h2.55c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5z",
    fill: "#000000"
  })));
}

LiniFan.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFan;