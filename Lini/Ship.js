var React = require('react');

var PropTypes = require('prop-types');

function LiniShip({
  size,
  ...props
}) {
  var className = 'Component Lini LiniShip';

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
    d: "M5.5 7c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 7h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 7h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 7c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.172 20.010c-0.594 0-1.11-0.223-1.533-0.664-0.78-0.813-0.841-2.14-0.138-3.021 0.471-0.591 1.332-0.997 2.464-0.623-0.057-0.569-0.203-1.14-0.562-1.441-0.291-0.244-0.721-0.311-1.316-0.205-0.916 0.162-1.625 0.837-2.447 1.617-1.148 1.091-2.449 2.328-4.641 2.328-1.207 0-1.843-0.636-2.354-1.146-0.477-0.477-0.854-0.854-1.646-0.854-1.061 0-2.631 1.338-3.146 1.854-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707c0.022-0.022 0.536-0.534 1.247-1.051 1-0.727 1.877-1.096 2.607-1.096 1.207 0 1.843 0.636 2.354 1.146 0.477 0.477 0.854 0.854 1.646 0.854 1.792 0 2.89-1.044 3.952-2.053 0.86-0.817 1.749-1.662 2.961-1.877 0.892-0.158 1.609-0.015 2.133 0.424 0.846 0.709 0.954 1.979 0.954 3.006 0 0.18-0.097 0.346-0.254 0.435s-0.349 0.086-0.504-0.006c-0.836-0.501-1.55-0.494-1.96 0.020-0.34 0.427-0.407 1.2 0.078 1.705 0.24 0.25 0.507 0.363 0.841 0.356 1.088-0.023 2.479-1.336 2.923-1.84 0.182-0.207 0.498-0.227 0.706-0.045s0.228 0.498 0.046 0.705c-0.019 0.022-0.471 0.534-1.126 1.054-0.92 0.731-1.77 1.109-2.524 1.126-0.018 0-0.035 0.001-0.053 0.001z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 20.010c-0.052 0-0.104-0.008-0.156-0.025-0.38-0.125-0.686-0.29-0.982-0.449-0.534-0.288-0.995-0.536-1.862-0.536-0.645 0-1.408 0.617-1.647 0.854-0.196 0.194-0.512 0.194-0.707-0.002s-0.195-0.511 0-0.706c0.117-0.117 1.18-1.146 2.354-1.146 1.119 0 1.766 0.349 2.337 0.656 0.269 0.145 0.523 0.282 0.819 0.379 0.262 0.086 0.405 0.369 0.319 0.631-0.069 0.211-0.265 0.344-0.475 0.344z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.608 9.012c-0.034-0.008-0.207-0.046-0.489-0.103l0.864-3.281c0.067-0.255-0.075-0.518-0.325-0.602l-3-1c-0.051-0.017-0.104-0.026-0.158-0.026h-0.88c-0.268-0.138-1.018-0.531-1.776-1-1.662-1.028-1.83-1.461-1.844-1.511v-0.989c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.989c-0.014 0.050-0.182 0.483-1.844 1.511-0.757 0.468-1.507 0.862-1.776 1h-0.88c-0.054 0-0.107 0.009-0.158 0.026l-3 1c-0.25 0.083-0.393 0.347-0.325 0.602l0.864 3.281c-0.282 0.057-0.455 0.096-0.489 0.103-0.229 0.051-0.392 0.254-0.392 0.488 0 1.578 0.288 3.311 0.857 5.148 0.066 0.215 0.264 0.352 0.478 0.352 0.049 0 0.099-0.007 0.148-0.022 0.264-0.082 0.412-0.362 0.33-0.625-0.49-1.584-0.76-3.078-0.805-4.448 1.101-0.225 4.28-0.828 6.993-0.898v6.493c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-6.493c2.712 0.070 5.892 0.673 6.993 0.898-0.026 0.791-0.128 1.629-0.303 2.497-0.055 0.271 0.12 0.534 0.391 0.589s0.534-0.12 0.589-0.391c0.219-1.083 0.33-2.125 0.33-3.099 0-0.234-0.163-0.437-0.392-0.488zM11.235 3.799c0.11 0.069 0.22 0.136 0.328 0.201h-1.563v-1.062c0.327 0.264 0.741 0.552 1.235 0.861zM7.765 3.799c0.494-0.309 0.908-0.597 1.235-0.861v1.062h-1.563c0.108-0.065 0.218-0.132 0.328-0.201zM2.103 5.826l2.478-0.826h9.838l2.478 0.826-0.762 2.892c-1.629-0.299-4.325-0.718-6.635-0.718s-5.006 0.419-6.635 0.718l-0.762-2.892z",
    fill: "#000000"
  })));
}

LiniShip.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniShip;