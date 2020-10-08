var React = require('react');

var PropTypes = require('prop-types');

function LiniLink({
  size,
  ...props
}) {
  var className = 'Component Lini LiniLink';

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
    d: "M6.5 14c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l7-7c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-7 7c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11c-0.185 0-0.372-0.010-0.555-0.031-0.274-0.030-0.472-0.277-0.442-0.552s0.278-0.473 0.552-0.442c0.147 0.016 0.296 0.024 0.445 0.024 2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 0.149 0.008 0.298 0.024 0.445 0.030 0.274-0.168 0.522-0.442 0.552s-0.522-0.168-0.552-0.442c-0.020-0.183-0.030-0.37-0.030-0.555 0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 19c-2.757 0-5-2.243-5-5s2.243-5 5-5c0.185 0 0.372 0.010 0.555 0.031 0.274 0.030 0.472 0.277 0.442 0.552s-0.277 0.472-0.552 0.442c-0.147-0.016-0.296-0.024-0.445-0.024-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4c0-0.148-0.008-0.298-0.024-0.445-0.030-0.274 0.168-0.522 0.442-0.552s0.522 0.168 0.552 0.442c0.020 0.183 0.031 0.37 0.031 0.555 0 2.757-2.243 5-5 5z"
  })));
}

LiniLink.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLink;