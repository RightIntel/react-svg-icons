var React = require('react');

var PropTypes = require('prop-types');

function LiniSortAmountAsc({
  size,
  ...props
}) {
  var className = 'Component Lini LiniSortAmountAsc';

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
    d: "M8.854 14.646c-0.195-0.195-0.512-0.195-0.707 0l-3.146 3.146v-17.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v17.293l-3.146-3.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l4 4c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l4-4c0.195-0.195 0.195-0.512 0-0.707z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 5h-2c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5zM12 4h1v-1h-1v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 9h-4c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5zM12 8h3v-1h-3v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 13h-6c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5zM12 12h5v-1h-5v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 17h-8c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5zM12 16h7v-1h-7v1z"
  })));
}

LiniSortAmountAsc.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSortAmountAsc;