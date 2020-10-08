var React = require('react');

var PropTypes = require('prop-types');

function LiniCloudFog({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCloudFog';

  if (props.className) {
    className += ' ' + props.className;
  }

  const pathProps = {};

  if (color) {
    pathProps.fill = color;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.006 7.013c-0.062 0-0.123 0.001-0.184 0.004 0.117-0.323 0.178-0.666 0.178-1.017 0-1.654-1.346-3-3-3-0.948 0-1.851 0.456-2.415 1.22-0.129 0.174-0.237 0.36-0.325 0.555-1.123-1.132-2.658-1.775-4.26-1.775-3.308 0-6 2.692-6 6v4c0 3.308 2.692 6 6 6h10.006c2.202 0 3.994-1.792 3.994-3.994v-4c0-2.202-1.792-3.994-3.994-3.994zM6 4c1.428 0 2.791 0.613 3.74 1.681 0.125 0.141 0.244 0.291 0.354 0.447 0.122 0.174 0.341 0.251 0.545 0.193s0.35-0.238 0.363-0.45c0.023-0.379 0.158-0.745 0.388-1.057 0.382-0.517 0.969-0.814 1.611-0.814 1.103 0 2 0.897 2 2 0 0.513-0.197 1.003-0.554 1.379-0.16 0.168-0.183 0.425-0.056 0.619s0.372 0.275 0.59 0.195c0.326-0.12 0.671-0.18 1.026-0.18 1.651 0 2.994 1.343 2.994 2.994s-1.343 2.994-2.994 2.994h-10.006c-2.757 0-5-2.243-5-5s2.243-5 5-5zM18.907 13.749c-0.331 1.293-1.506 2.251-2.901 2.251h-10.006c-2.145 0-3.978-1.358-4.687-3.259 1.1 1.376 2.792 2.259 4.687 2.259h10.006c1.141 0 2.172-0.481 2.901-1.251zM16.006 18h-10.006c-2.145 0-3.978-1.358-4.687-3.259 1.1 1.376 2.792 2.259 4.687 2.259h10.006c1.141 0 2.172-0.481 2.901-1.251-0.331 1.293-1.506 2.251-2.901 2.251z"
  }, pathProps))));
}

LiniCloudFog.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCloudFog;