var React = require('react');

var PropTypes = require('prop-types');

function LiniCompare({
  size,
  ...props
}) {
  var className = 'Component Lini LiniCompare';

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
    d: "M18.5 2h-14.5c-0.133 0-0.26 0.053-0.354 0.146l-3.5 3.5c-0.094 0.094-0.146 0.221-0.146 0.354v10.5c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-13c0-0.827-0.673-1.5-1.5-1.5zM4 3.207v2.293c0 0.276-0.224 0.5-0.5 0.5h-2.293l2.793-2.793zM19 16.5c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2c0 0.175 0.031 0.343 0.086 0.5h-5.586c-0.276 0-0.5-0.224-0.5-0.5v-9.5h2.5c0.827 0 1.5-0.673 1.5-1.5v-2.5h4.793l-2.646 2.646c-0.094 0.094-0.146 0.221-0.146 0.354v4.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3.5h2.5c0.827 0 1.5-0.673 1.5-1.5v-2.5h6.5c0.276 0 0.5 0.224 0.5 0.5v13zM11 3.207v2.293c0 0.276-0.224 0.5-0.5 0.5h-2.293l2.793-2.793z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.354 12.146l-2-2c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1.146 1.146h-9.586l1.146-1.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2 2c-0.195 0.195-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1.146-1.146h9.586l-1.146 1.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512 0-0.707z"
  })));
}

LiniCompare.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCompare;