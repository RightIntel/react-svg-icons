var React = require('react');

var PropTypes = require('prop-types');

function LiniCar2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCar2';

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
    d: "M5.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM5.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M14.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM14.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.958 11.907c-0.13-0.792-0.553-3.214-1.011-4.131-0.305-0.61-1.088-1.077-2.326-1.386-1.006-0.251-2.292-0.39-3.621-0.39s-2.615 0.138-3.621 0.39c-1.238 0.31-2.021 0.776-2.326 1.386-0.458 0.916-0.881 3.339-1.011 4.131-0.699 0.479-1.042 1.172-1.042 2.093v2.5c0 0.652 0.418 1.208 1 1.414v1.086c0 0.551 0.449 1 1 1h1c0.551 0 1-0.449 1-1v-1h8v1c0 0.551 0.449 1 1 1h1c0.551 0 1-0.449 1-1v-1.086c0.582-0.206 1-0.762 1-1.414v-2.5c0-0.921-0.343-1.614-1.042-2.093zM4.947 8.224c0.297-0.593 2.168-1.224 5.053-1.224s4.756 0.63 5.053 1.224c0.287 0.575 0.606 2.096 0.803 3.183-0.098-0.029-0.199-0.056-0.303-0.080-0.267-0.063-0.555-0.114-0.863-0.156l-2.899-2.077c-0.224-0.161-0.537-0.109-0.698 0.115s-0.109 0.537 0.115 0.698l1.566 1.122c-0.85-0.028-1.782-0.028-2.775-0.028-0.117 0-0.233 0-0.349 0l-2.874-1.916c-0.23-0.153-0.54-0.091-0.693 0.139s-0.091 0.54 0.139 0.693l1.644 1.096c-1.341 0.024-2.507 0.097-3.42 0.314-0.104 0.025-0.205 0.052-0.303 0.080 0.198-1.087 0.516-2.608 0.804-3.183zM5 19h-1v-1h1v1zM15 19v-1h1v1h-1zM17 16.5c0 0.276-0.224 0.5-0.5 0.5h-13c-0.276 0-0.5-0.224-0.5-0.5v-2.5c0-0.924 0.486-1.417 1.678-1.701 1.255-0.299 3.14-0.299 5.322-0.299s4.066 0 5.322 0.299c1.192 0.284 1.678 0.777 1.678 1.701v2.5z"
  }, pathProps))));
}

LiniCar2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCar2;