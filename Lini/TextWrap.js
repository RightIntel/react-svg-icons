var React = require('react');

var PropTypes = require('prop-types');

function LiniTextWrap({
  size,
  ...props
}) {
  var className = 'Component Lini LiniTextWrap';

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
    d: "M17.5 5h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 17h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 8h-13c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h13c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5h-5.293l1.146-1.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2 2c-0.195 0.195-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1.146-1.146h5.293c1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 13h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  })));
}

LiniTextWrap.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTextWrap;