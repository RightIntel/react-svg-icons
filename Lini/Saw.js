var React = require('react');

var PropTypes = require('prop-types');

function LiniSaw({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSaw';

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
    d: "M13 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M19.844 0.501c-0.196-0.318-0.561-0.5-1-0.5h-0.008c-2.811 0-4.669 0-6.168 0.46-1.555 0.477-2.649 1.426-3.775 3.276l-8.626 13.651c-0.438 0.694-0.276 1.604 0.361 2.028l0.75 0.5c0.082 0.055 0.179 0.084 0.277 0.084h2.844c0.276 0 0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5v-4.5c0-1.103 0.897-2 2-2h0.844c0.734 0 1.566-0.514 1.895-1.171l0.105-0.211c0.197-0.393 0.197-0.8 0-1.118zM12.5 9c-0.276 0-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v1.5h-2.192l-0.624-0.416c-0.187-0.124-0.219-0.428-0.071-0.662l8.371-13.248 4.516 2.615v1.712h-1.5zM18.949 1.172l-0.105 0.211c-0.162 0.323-0.639 0.618-1 0.618h-0.844c-1.654 0-3 1.346-3 3v1.133l-3.981-2.305c1.869-2.827 3.609-2.827 8.817-2.827h0.008c0.084 0 0.131 0.017 0.148 0.027 0.001 0.020-0.005 0.069-0.042 0.144z"
  }, pathProps))));
}

LiniSaw.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSaw;