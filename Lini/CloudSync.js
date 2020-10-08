var React = require('react');

var PropTypes = require('prop-types');

function LiniCloudSync({
  size,
  ...props
}) {
  var className = 'Component Lini LiniCloudSync';

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
    d: "M4.481 15.787c-0.046 0-0.092-0.006-0.138-0.019-1.227-0.352-2.332-1.107-3.111-2.126-0.805-1.053-1.231-2.312-1.231-3.642 0-3.308 2.692-6 6-6 1.611 0 3.143 0.65 4.261 1.776 0.471-1.050 1.527-1.776 2.739-1.776 1.654 0 3 1.346 3 3 0 0.346-0.059 0.685-0.172 1.004 0.057-0.002 0.115-0.004 0.172-0.004 2.206 0 4 1.794 4 4 0 0.771-0.22 1.52-0.636 2.166-0.405 0.628-0.975 1.129-1.649 1.449-0.249 0.118-0.548 0.012-0.666-0.237s-0.012-0.548 0.237-0.666c1.042-0.495 1.714-1.559 1.714-2.712 0-1.654-1.346-3-3-3-0.343 0-0.68 0.057-1 0.17-0.217 0.077-0.458-0.005-0.584-0.197s-0.105-0.446 0.051-0.615c0.344-0.371 0.533-0.854 0.533-1.359 0-1.103-0.897-2-2-2-1.055 0-1.931 0.823-1.996 1.875-0.013 0.212-0.159 0.393-0.363 0.45s-0.423-0.020-0.545-0.194c-0.937-1.334-2.468-2.131-4.096-2.131-2.757 0-5 2.243-5 5 0 2.219 1.488 4.196 3.618 4.807 0.265 0.076 0.419 0.353 0.343 0.618-0.063 0.219-0.263 0.362-0.48 0.362z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.854 15.146c-0.195-0.195-0.512-0.195-0.707 0l-0.146 0.146v-0.293c0-2.206-1.794-4-4-4-0.6 0-1.177 0.13-1.715 0.385-0.249 0.118-0.356 0.417-0.237 0.666s0.417 0.356 0.666 0.237c0.403-0.191 0.835-0.288 1.286-0.288 1.654 0 3 1.346 3 3v0.293l-0.146-0.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1 1c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l1-1c0.195-0.195 0.195-0.512 0-0.707z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.952 17.949c-0.118-0.249-0.417-0.356-0.666-0.237-0.403 0.191-0.836 0.288-1.286 0.288-1.654 0-3-1.346-3-3v-0.293l0.146 0.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1-1c-0.195-0.195-0.512-0.195-0.707 0l-1 1c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l0.146-0.146v0.293c0 2.206 1.794 4 4 4 0.6 0 1.177-0.13 1.715-0.385 0.249-0.118 0.356-0.417 0.237-0.666z"
  })));
}

LiniCloudSync.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCloudSync;