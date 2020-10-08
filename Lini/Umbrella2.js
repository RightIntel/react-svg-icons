var React = require('react');

var PropTypes = require('prop-types');

function LiniUmbrella2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniUmbrella2';

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
    d: "M16.51 6.49c-1.605-1.605-3.74-2.49-6.010-2.49s-4.405 0.884-6.010 2.49-2.49 3.74-2.49 6.010c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5v6c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-6c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.27-0.884-4.405-2.49-6.010zM16.5 10c-0.817 0-1.544 0.394-2 1.002-0.456-0.608-1.183-1.002-2-1.002s-1.544 0.394-2 1.002c-0.456-0.608-1.183-1.002-2-1.002s-1.544 0.394-2 1.002c-0.456-0.608-1.183-1.002-2-1.002-0.422 0-0.819 0.105-1.168 0.29 0.945-3.060 3.801-5.29 7.168-5.29s6.222 2.23 7.168 5.29c-0.349-0.185-0.746-0.29-1.168-0.29z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 6c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l1-2c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-1 2c-0.088 0.175-0.264 0.277-0.448 0.277z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 4c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l1-2c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-1 2c-0.088 0.175-0.264 0.277-0.448 0.277z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 4c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l1-2c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-1 2c-0.088 0.175-0.264 0.277-0.448 0.277z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.5 7c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l1-2c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-1 2c-0.088 0.175-0.264 0.277-0.448 0.277z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 3c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l1-2c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-1 2c-0.088 0.175-0.264 0.277-0.448 0.277z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l1-2c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-1 2c-0.088 0.175-0.264 0.277-0.448 0.277z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 3c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l1-2c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-1 2c-0.088 0.175-0.264 0.277-0.448 0.277z",
    fill: "#000000"
  })));
}

LiniUmbrella2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniUmbrella2;