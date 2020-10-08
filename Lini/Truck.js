var React = require('react');

var PropTypes = require('prop-types');

function LiniTruck({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniTruck';

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
    d: "M19.794 13.421l-0.004-0.021c-0-0.001-0-0.002-0.001-0.003l-0.399-1.997c-0-0.001-0-0.002-0.001-0.003l-0.203-1.015c-0.155-0.775-0.896-1.383-1.686-1.383h-4c-0.175 0-0.343 0.031-0.5 0.086v-0.586c0-0.827-0.673-1.5-1.5-1.5h-10c-0.827 0-1.5 0.673-1.5 1.5v8c0 0.827 0.673 1.5 1.5 1.5h1.5c0 1.103 0.897 2 2 2s2-0.897 2-2h5.086c0.206 0.582 0.762 1 1.414 1h0.769c0.346 0.597 0.992 1 1.731 1s1.385-0.403 1.731-1h0.769c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.579-0.092-1.511-0.206-2.079zM18.69 13h-2.69v-1h2.49l0.2 1zM5 19c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM6.731 17c-0.346-0.597-0.992-1-1.731-1s-1.385 0.403-1.731 1h-1.769c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5v8.5h-5.269zM16 19c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM18.5 18h-0.5c0-1.103-0.897-2-2-2s-2 0.897-2 2h-0.5c-0.276 0-0.5-0.224-0.5-0.5v-7c0-0.276 0.224-0.5 0.5-0.5h4c0.314 0 0.644 0.27 0.706 0.579l0.084 0.421h-2.79c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h3.378c0.045 0.313 0.082 0.675 0.103 1h-0.481c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1.5c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniTruck.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTruck;