var React = require('react');

var PropTypes = require('prop-types');

function LiniPencil2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPencil2';

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
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M0.5 20c-0.13 0-0.258-0.051-0.354-0.146-0.137-0.137-0.183-0.342-0.116-0.524l2-5.5c0.025-0.069 0.065-0.131 0.116-0.183l13.5-13.5c0.195-0.195 0.512-0.195 0.707 0l3.5 3.5c0.195 0.195 0.195 0.512 0 0.707l-13.5 13.5c-0.052 0.052-0.114 0.091-0.183 0.116l-5.5 2c-0.056 0.020-0.113 0.030-0.171 0.030zM2.932 14.275l-1.596 4.389 4.389-1.596 13.068-13.068-2.793-2.793-13.068 13.068z"
  }, pathProps))));
}

LiniPencil2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPencil2;