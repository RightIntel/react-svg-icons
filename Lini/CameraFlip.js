var React = require('react');

var PropTypes = require('prop-types');

function LiniCameraFlip({
  size,
  ...props
}) {
  var className = 'Component Lini LiniCameraFlip';

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
    d: "M16 10.55v-5.050c0-0.827-0.673-1.5-1.5-1.5h-0.793l-0.854-0.854c-0.094-0.094-0.221-0.146-0.354-0.146h-5c-0.133 0-0.26 0.053-0.354 0.146l-0.854 0.854h-0.793c-0.827 0-1.5 0.673-1.5 1.5v5.051c-1.913 0.398-4 1.134-4 2.449 0 1.93 4.568 2.805 8.479 2.969 0.007 0 0.014 0 0.021 0 0.267 0 0.488-0.21 0.499-0.479 0.012-0.276-0.203-0.509-0.479-0.52-2.167-0.090-4.147-0.381-5.575-0.817-1.539-0.47-1.946-0.96-1.946-1.153 0-0.143 0.214-0.417 0.815-0.717 0.537-0.268 1.286-0.51 2.187-0.709 0.038 0.793 0.696 1.427 1.498 1.427h9c0.803 0 1.46-0.634 1.498-1.427 0.901 0.199 1.649 0.441 2.187 0.709 0.602 0.3 0.815 0.574 0.815 0.717 0 0.214-0.471 0.749-2.253 1.242-1.643 0.454-3.864 0.722-6.254 0.755-0.244 0.003-0.45 0.182-0.487 0.423s0.104 0.474 0.335 0.551l3 1.003c0.053 0.018 0.106 0.026 0.159 0.026 0.209 0 0.404-0.132 0.474-0.342 0.088-0.262-0.054-0.545-0.316-0.633l-0.495-0.166c1.446-0.132 2.764-0.354 3.85-0.654 1.982-0.548 2.987-1.29 2.987-2.206 0-1.315-2.087-2.051-4-2.45zM14.5 12h-9c-0.276 0-0.5-0.224-0.5-0.5v-0.529c0-0.001 0-0.002 0-0.002v-5.469c0-0.276 0.224-0.5 0.5-0.5h1c0.133 0 0.26-0.053 0.354-0.146l0.854-0.854h4.586l0.854 0.854c0.094 0.094 0.221 0.146 0.354 0.146h1c0.276 0 0.5 0.224 0.5 0.5v5.47c0 0 0 0 0 0.001v0.53c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM10 6c-1.103 0-2 0.897-2 2s0.897 2 2 2c1.103 0 2-0.897 2-2s-0.897-2-2-2z"
  })));
}

LiniCameraFlip.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCameraFlip;