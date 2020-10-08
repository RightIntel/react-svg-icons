var React = require('react');

var PropTypes = require('prop-types');

function LiniFish({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFish';

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
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 9c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 11c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 13c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.5 10c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.5 12c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13.5 11c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6 9.5c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5zM4.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M19.909 14.213c-0.014-0.020-1.387-1.992-1.892-3.718 0.499-1.834 1.868-3.677 1.882-3.695 0.13-0.173 0.134-0.41 0.009-0.587s-0.349-0.254-0.556-0.191c-0.12 0.037-2.813 0.877-4.851 2.706-0.376-0.351-0.82-0.737-1.323-1.125-0.072-0.056-0.145-0.11-0.218-0.164-0.116-0.899 0.127-1.744 0.724-2.515 0.498-0.643 1.067-0.993 1.072-0.996 0.183-0.11 0.276-0.323 0.232-0.532s-0.216-0.366-0.427-0.393c-0.044-0.005-1.083-0.131-2.507 0.072-1.812 0.258-3.435 0.938-4.71 1.969-0.283-0.029-0.565-0.045-0.845-0.045-0.117 0-0.231 0.003-0.343 0.008-0.003 0-0.007 0-0.011 0-2.582 0.118-4.102 1.52-4.931 2.705-0.924 1.321-1.195 2.633-1.206 2.689-0.013 0.065-0.013 0.131 0 0.196 0.011 0.055 0.281 1.368 1.206 2.689 0.828 1.182 2.343 2.581 4.916 2.704 0.007 0 0.013 0.001 0.020 0.001 0.114 0.005 0.23 0.008 0.349 0.008 0.621 0 1.253-0.074 1.891-0.219 1.345 0.957 2.508 1.206 3.351 1.206 0.156 0 0.302-0.009 0.436-0.023 0.984-0.104 1.56-0.518 1.622-0.565 0.212-0.159 0.263-0.456 0.116-0.677-0.232-0.349-0.801-1.364-0.901-2.202 0.055-0.041 0.11-0.083 0.165-0.125 0.504-0.387 0.947-0.773 1.323-1.124 2.038 1.83 4.73 2.669 4.851 2.706 0.048 0.015 0.098 0.022 0.146 0.022 0.157 0 0.309-0.074 0.405-0.206 0.125-0.173 0.127-0.406 0.005-0.581zM12.166 4.070c0.371-0.054 0.714-0.083 1.016-0.097-0.087 0.095-0.175 0.198-0.262 0.308-0.59 0.75-0.919 1.586-0.976 2.46-0.575-0.361-1.153-0.668-1.729-0.919-0.503-0.219-1.005-0.394-1.504-0.525 1.221-0.763 2.508-1.090 3.455-1.227zM2.054 12.741c-0.679-0.959-0.963-1.936-1.041-2.242 0.076-0.303 0.352-1.257 1.021-2.213 0.945-1.349 2.238-2.107 3.85-2.258 0.731 1.369 1.116 2.908 1.116 4.471s-0.385 3.102-1.116 4.471c-1.6-0.15-2.887-0.898-3.83-2.23zM12.8 15.802c-0.554 0.211-1.656 0.411-3.14-0.401 0.185-0.069 0.37-0.143 0.556-0.223 0.635-0.276 1.272-0.621 1.904-1.030 0.162 0.642 0.459 1.253 0.681 1.655zM12.551 12.618c-1.32 1.012-3.319 2.205-5.554 2.364 0.658-1.394 1.002-2.928 1.002-4.482s-0.345-3.088-1.002-4.482c2.235 0.159 4.234 1.352 5.554 2.364 1.087 0.834 1.895 1.678 2.289 2.118-0.394 0.441-1.202 1.284-2.289 2.118zM15.216 11.568c0.418-0.437 0.654-0.73 0.674-0.755 0.146-0.183 0.146-0.442 0-0.625-0.020-0.025-0.257-0.319-0.674-0.755 0.974-0.861 2.129-1.489 3.015-1.894-0.449 0.775-0.956 1.801-1.216 2.841-0.021 0.083-0.020 0.169 0.002 0.251 0.268 0.996 0.798 2.052 1.255 2.851-0.892-0.404-2.067-1.038-3.056-1.913z"
  }, pathProps))));
}

LiniFish.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFish;