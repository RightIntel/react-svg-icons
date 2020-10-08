var React = require('react');

var PropTypes = require('prop-types');

function LiniMedalSecond({
  size,
  ...props
}) {
  var className = 'Component Lini LiniMedalSecond';

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
    d: "M14.795 4.779l-1.464-1.063-0.559-1.721h-1.809l-1.464-1.063-1.464 1.063h-1.809l-0.559 1.721-1.464 1.063 0.559 1.721-0.559 1.721 1.464 1.063 0.332 1.021v9.195c0 0.184 0.102 0.354 0.264 0.441s0.36 0.077 0.513-0.025l2.723-1.815 2.723 1.815c0.084 0.056 0.18 0.084 0.277 0.084 0.081 0 0.162-0.020 0.236-0.059 0.163-0.087 0.264-0.256 0.264-0.441v-9.195l0.332-1.021 1.464-1.063-0.559-1.721 0.559-1.721zM9.777 17.084c-0.168-0.112-0.387-0.112-0.555 0l-2.223 1.482v-7.561h1.036l1.464 1.063 1.464-1.063h1.036v7.561l-2.223-1.482zM13.62 7.839l-1.139 0.827-0.433 1.334h-0.048v0.004h-1.361l-1.139 0.827-1.139-0.827h-1.407l-0.435-1.339-1.139-0.827 0.435-1.339-0.435-1.339 1.139-0.827 0.435-1.339h1.407l1.139-0.827 1.139 0.827h1.407l0.435 1.339 1.139 0.827-0.435 1.339 0.435 1.339z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 9h-2c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h1.5v-1h-1.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5h-1.5v1h1.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  })));
}

LiniMedalSecond.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMedalSecond;