var React = require('react');

var PropTypes = require('prop-types');

function LiniShoe({
  size,
  ...props
}) {
  var className = 'Component Lini LiniShoe';

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
    d: "M17.244 4.712c-0.18-0.184-0.359-0.346-0.484-0.456-0.074-0.542-0.376-1.080-0.906-1.61-1.601-1.6-2.729-1.646-2.853-1.646-0.002 0-0.004 0-0.006 0-0.167 0.002-0.322 0.087-0.414 0.227-1.379 2.115-3.44 5.227-4.585 6.861 0.036-0.308 0.039-0.54-0.016-0.728-0.339-1.156-1.857-1.348-1.921-1.356-0.216-0.026-0.423 0.091-0.513 0.288-0.208 0.455-0.396 1.651-0.711 3.725-0.055 0.362-0.112 0.738-0.171 1.12-0.494 3.197-0.554 3.259-2.092 4.84-0.191 0.196-0.407 0.419-0.647 0.671-0.405 0.425-0.703 0.956-0.84 1.494-0.141 0.555-0.091 1.040 0.135 1.332 0.365 0.469 0.79 0.52 0.871 0.526 0.011 0.001 0.022 0.001 0.033 0.001 0.054 0 0.108-0.009 0.159-0.026 0.101-0.034 2.497-0.86 5.447-3.807 2.778-2.774 3.373-3.944 3.767-4.718 0.137-0.269 0.227-0.446 0.379-0.622 0.257-0.296 0.822-0.911 1.476-1.622 0.041-0.045 0.083-0.090 0.125-0.136l0.635 0.777c0.090 0.11 0.222 0.176 0.363 0.183 0.008 0 0.016 0.001 0.024 0.001 0.133 0 0.261-0.053 0.355-0.148 0.008-0.008 0.766-0.774 1.514-1.592 1.508-1.649 1.631-2.013 1.631-2.29 0-0.357-0.233-0.754-0.756-1.288zM11.122 10.173c-0.232 0.268-0.363 0.525-0.515 0.823-0.365 0.717-0.917 1.802-3.583 4.464-2.356 2.353-4.35 3.279-4.906 3.507-0.028-0.020-0.061-0.050-0.098-0.094-0.058-0.165 0.017-0.894 0.628-1.536 0.236-0.248 0.451-0.469 0.64-0.663 0.798-0.821 1.279-1.316 1.61-2.052 0.312-0.696 0.478-1.552 0.753-3.333 0.059-0.383 0.116-0.759 0.171-1.123 0.181-1.197 0.368-2.426 0.517-3.071 0.277 0.096 0.595 0.268 0.678 0.54 0.025 0.139-0.056 0.632-0.099 0.898-0.115 0.707-0.178 1.096 0.054 1.37 0.107 0.125 0.262 0.197 0.426 0.197 0.239 0 0.406-0.149 0.461-0.197 0.119-0.106 0.398-0.354 3.029-4.298 0.993-1.489 1.955-2.956 2.346-3.553 0.34 0.103 1.017 0.408 1.91 1.301 0.882 0.881 0.725 1.482 0.219 2.114-0.451 0.562-1.725 1.948-2.748 3.061-0.659 0.717-1.229 1.337-1.495 1.644zM15.53 7.725c-0.37 0.402-0.735 0.784-0.997 1.055l-0.372-0.455c0.835-0.912 1.627-1.787 1.984-2.232 0.174-0.217 0.312-0.434 0.414-0.651 0.206 0.215 0.365 0.411 0.423 0.53-0.083 0.147-0.385 0.594-1.452 1.752z",
    fill: "#000000"
  })));
}

LiniShoe.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniShoe;