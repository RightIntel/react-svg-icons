var React = require('react');

var PropTypes = require('prop-types');

function LiniCrown({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCrown';

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
    d: "M19 7.5c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.55 0.298 1.032 0.741 1.293-0.279 1.116-1.011 4.163-1.431 7.089-0.594-0.205-1.409-0.353-2.307-0.453 0.050-2.665 0.673-7.978 0.854-9.472 0.655-0.161 1.143-0.753 1.143-1.457 0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.599 0.353 1.117 0.861 1.357-0.186 1.528-0.796 6.726-0.856 9.481-0.668-0.049-1.353-0.075-2.005-0.084v-12.339c0.582-0.206 1-0.762 1-1.414 0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.652 0.418 1.208 1 1.414v12.339c-0.652 0.009-1.337 0.036-2.005 0.084-0.060-2.755-0.671-7.953-0.856-9.481 0.508-0.24 0.861-0.758 0.861-1.357 0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.704 0.488 1.296 1.143 1.457 0.181 1.494 0.804 6.807 0.854 9.472-0.898 0.101-1.713 0.248-2.307 0.453-0.421-2.926-1.152-5.973-1.431-7.089 0.443-0.261 0.741-0.743 0.741-1.293 0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.751 0.554 1.374 1.275 1.483 0.373 1.493 1.725 7.146 1.725 10.517 0 0.173 0.090 0.334 0.237 0.425s0.331 0.099 0.486 0.022c0.834-0.417 3.155-0.697 5.776-0.697s4.942 0.28 5.776 0.697c0.071 0.035 0.147 0.053 0.224 0.053 0.091 0 0.183-0.025 0.263-0.075 0.147-0.091 0.237-0.252 0.237-0.425 0-3.371 1.353-9.024 1.725-10.517 0.721-0.109 1.275-0.733 1.275-1.483zM13.5 4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5zM5.5 4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5zM9.5 1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5zM1 7.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM9.5 18.25c-1.865 0-4.131 0.147-5.517 0.541-0.026-0.594-0.083-1.233-0.16-1.89 0.908-0.391 3.153-0.651 5.677-0.651s4.768 0.26 5.677 0.651c-0.077 0.657-0.134 1.295-0.16 1.89-1.386-0.393-3.652-0.541-5.517-0.541zM17.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniCrown.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCrown;