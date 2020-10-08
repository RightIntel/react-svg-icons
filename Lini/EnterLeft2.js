var React = require('react');

var PropTypes = require('prop-types');

function LiniEnterLeft2({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniEnterLeft2';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 18.5v-16c0-0.827 0.673-1.5 1.5-1.5h1c0.827 0 1.5 0.673 1.5 1.5v5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h1c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.827-0.673 1.5-1.5 1.5h-1c-0.827 0-1.5-0.673-1.5-1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.353 15.853c0.195-0.195 0.195-0.512 0-0.707l-4.146-4.146h14.293c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-14.293l4.146-4.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5 5c-0.098 0.098-0.146 0.226-0.146 0.354s0.049 0.256 0.147 0.354l5 5c0.195 0.195 0.512 0.195 0.707-0z",
    fill: color
  })));
}

LiniEnterLeft2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEnterLeft2;