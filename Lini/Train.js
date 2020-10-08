var React = require('react');

var PropTypes = require('prop-types');

function LiniTrain({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniTrain';

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
    d: "M14.5 15h-10c-1.378 0-2.5-1.122-2.5-2.5v-10c0-1.378 1.122-2.5 2.5-2.5h10c1.378 0 2.5 1.122 2.5 2.5v10c0 1.378-1.122 2.5-2.5 2.5zM4.5 1c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5h-10z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.947 19.276l-2-4c-0.123-0.247-0.424-0.347-0.671-0.224s-0.347 0.424-0.224 0.671l0.138 0.276h-13.382l0.138-0.276c0.123-0.247 0.023-0.547-0.224-0.671s-0.547-0.023-0.671 0.224l-2 4c-0.123 0.247-0.023 0.547 0.224 0.671 0.072 0.036 0.148 0.053 0.223 0.053 0.183 0 0.36-0.101 0.448-0.277l0.362-0.724h16.382l0.362 0.724c0.088 0.175 0.264 0.277 0.448 0.277 0.075 0 0.151-0.017 0.223-0.053 0.247-0.123 0.347-0.424 0.224-0.671zM1.809 18l0.5-1h14.382l0.5 1h-15.382z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 13c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM5.5 11c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 13c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM13.5 11c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 3h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 4h-10c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5zM5 5h4v3h-4v-3zM14 8h-4v-3h4v3z",
    fill: color
  })));
}

LiniTrain.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTrain;