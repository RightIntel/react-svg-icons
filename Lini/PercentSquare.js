var React = require('react');

var PropTypes = require('prop-types');

function LiniPercentSquare({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniPercentSquare';

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
    d: "M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5zM1.5 2c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-16z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 16c-0.119 0-0.239-0.042-0.334-0.128-0.205-0.185-0.222-0.501-0.037-0.706l9-10c0.185-0.205 0.501-0.222 0.706-0.037s0.222 0.501 0.037 0.706l-9 10c-0.099 0.11-0.235 0.166-0.372 0.166z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 10c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM6.5 6c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 16c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM12.5 12c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z",
    fill: color
  })));
}

LiniPercentSquare.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPercentSquare;