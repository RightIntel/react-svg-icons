var React = require('react');

var PropTypes = require('prop-types');

function LiniFolderStar({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFolderStar';

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
    d: "M18.5 18h-17c-0.827 0-1.5-0.673-1.5-1.5v-10.5c0-0.352 0.119-0.856 0.276-1.171l0.553-1.106c0.206-0.413 0.71-0.724 1.171-0.724h7c0.461 0 0.964 0.311 1.171 0.724l0.553 1.106c0.038 0.077 0.191 0.171 0.276 0.171h7.5c0.827 0 1.5 0.673 1.5 1.5v10c0 0.827-0.673 1.5-1.5 1.5zM2 4c-0.086 0-0.238 0.094-0.276 0.171l-0.553 1.106c-0.088 0.176-0.171 0.527-0.171 0.724v10.5c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5h-7.5c-0.461 0-0.965-0.311-1.171-0.724l-0.553-1.106c-0.038-0.077-0.191-0.171-0.276-0.171h-7z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.5 15c-0.076 0-0.153-0.017-0.224-0.053l-1.776-0.888-1.776 0.888c-0.173 0.086-0.379 0.066-0.531-0.053s-0.222-0.314-0.18-0.503l0.446-2.006-1.337-1.56c-0.127-0.148-0.156-0.357-0.075-0.534s0.259-0.291 0.454-0.291h1.689l0.862-1.746c0.084-0.171 0.258-0.279 0.448-0.279s0.364 0.108 0.448 0.279l0.862 1.746h1.689c0.195 0 0.373 0.114 0.454 0.291s0.052 0.386-0.075 0.534l-1.337 1.56 0.446 2.006c0.042 0.188-0.028 0.384-0.18 0.503-0.090 0.070-0.198 0.106-0.308 0.106zM9.5 13c0.077 0 0.153 0.018 0.224 0.053l1.060 0.53-0.272-1.225c-0.034-0.154 0.006-0.314 0.108-0.434l0.793-0.925h-0.913c-0.19 0-0.364-0.108-0.448-0.279l-0.552-1.117-0.552 1.117c-0.084 0.171-0.258 0.279-0.448 0.279h-0.913l0.793 0.925c0.102 0.119 0.143 0.28 0.108 0.434l-0.272 1.225 1.060-0.53c0.070-0.035 0.147-0.053 0.224-0.053z"
  }, pathProps))));
}

LiniFolderStar.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFolderStar;