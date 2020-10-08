var React = require('react');

var PropTypes = require('prop-types');

function LiniEnterRight2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniEnterRight2';

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
    d: "M20 2.5v16c0 0.827-0.673 1.5-1.5 1.5h-1c-0.827 0-1.5-0.673-1.5-1.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h1c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-5c0-0.827 0.673-1.5 1.5-1.5h1c0.827 0 1.5 0.673 1.5 1.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.647 5.147c-0.195 0.195-0.195 0.512 0 0.707l4.146 4.146h-14.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h14.293l-4.146 4.146c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l5-5c0.098-0.098 0.146-0.226 0.146-0.354s-0.049-0.256-0.147-0.354l-5-5c-0.195-0.195-0.512-0.195-0.707 0z",
    fill: "#000000"
  })));
}

LiniEnterRight2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEnterRight2;