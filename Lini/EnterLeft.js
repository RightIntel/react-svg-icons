var React = require('react');

var PropTypes = require('prop-types');

function LiniEnterLeft({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniEnterLeft';

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
    d: "M8.354 13.854c0.195-0.195 0.195-0.512 0-0.707l-2.146-2.146h12.293c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-12.293l2.146-2.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-3 3c-0.098 0.098-0.146 0.226-0.146 0.354s0.049 0.256 0.146 0.354l3 3c0.195 0.195 0.512 0.195 0.707 0z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 16.5v-12c0-0.827 0.673-1.5 1.5-1.5h10c0.827 0 1.5 0.673 1.5 1.5v4c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-10c-0.276 0-0.5 0.224-0.5 0.5v12c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.827-0.673 1.5-1.5 1.5h-10c-0.827 0-1.5-0.673-1.5-1.5z",
    fill: color
  })));
}

LiniEnterLeft.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEnterLeft;