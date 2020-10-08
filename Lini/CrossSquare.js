var React = require('react');

var PropTypes = require('prop-types');

function LiniCrossSquare({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCrossSquare';

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
    d: "M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5zM1.5 2c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-16z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.332 14.126l-4.080-3.626 4.080-3.626c0.206-0.183 0.225-0.499 0.042-0.706s-0.499-0.225-0.706-0.042l-4.168 3.705-4.168-3.705c-0.206-0.183-0.522-0.165-0.706 0.042s-0.165 0.522 0.042 0.706l4.080 3.626-4.080 3.626c-0.206 0.183-0.225 0.499-0.042 0.706 0.099 0.111 0.236 0.168 0.374 0.168 0.118 0 0.237-0.042 0.332-0.126l4.168-3.705 4.168 3.705c0.095 0.085 0.214 0.126 0.332 0.126 0.138 0 0.275-0.057 0.374-0.168 0.183-0.206 0.165-0.522-0.042-0.706z"
  }, pathProps))));
}

LiniCrossSquare.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCrossSquare;