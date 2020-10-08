var React = require('react');

var PropTypes = require('prop-types');

function LiniLinearicons({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniLinearicons';

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
    d: "M19.5 16h-0.5c-0.579 0-1 0.631-1 1.5 0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5-0.138 0-0.263 0.056-0.354 0.147-0.196-0.094-0.415-0.147-0.646-0.147-0.827 0-1.5 0.673-1.5 1.5 0 0.175 0.031 0.343 0.086 0.5h-1.086c-0.406 0-1.019-0.277-1.288-0.58l-1.044-1.181 9.207-10.408c0.161-0.182 0.165-0.447 0.024-0.633l-2.999-3.998c-0.094-0.126-0.243-0.2-0.4-0.2h-13c-0.157 0-0.306 0.074-0.4 0.2l-2.999 3.998c-0.141 0.186-0.136 0.451 0.024 0.633l9.207 10.408-1.044 1.181c-0.289 0.327-0.795 0.58-1.038 0.58h-0.25v-0.5c0-0.827-0.673-1.5-1.5-1.5-0.282 0-0.545 0.078-0.77 0.213-0.127-0.135-0.292-0.213-0.48-0.213-0.308 0-0.537 0.243-0.702 0.455-0.152 0.195-0.309 0.449-0.442 0.716l-0.106 0.211v-0.882c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3c0 0.827 0.673 1.5 1.5 1.5 0.282 0 0.545-0.078 0.77-0.214 0.127 0.135 0.292 0.214 0.48 0.214 0.308 0 0.537-0.243 0.702-0.455 0.152-0.195 0.309-0.449 0.442-0.716l0.106-0.211v0.882c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5h0.75c0.556 0 1.324-0.395 1.787-0.918l0.963-1.089 0.963 1.088c0.463 0.523 1.339 0.918 2.037 0.918h2.5c0.384 0 0.734-0.145 1-0.383 0.266 0.238 0.616 0.383 1 0.383 0.827 0 1.5-0.673 1.5-1.5 0-0.249 0.061-0.422 0.103-0.5h0.397c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM1.145 5.474l2.605-3.474h12.5l2.605 3.474-8.855 10.011-8.855-10.011zM15.5 18c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M2.5 15c0.132 0 0.261-0.053 0.353-0.147s0.147-0.222 0.147-0.353-0.053-0.26-0.147-0.353c-0.093-0.093-0.222-0.147-0.353-0.147s-0.26 0.053-0.353 0.147c-0.093 0.093-0.147 0.222-0.147 0.353s0.053 0.261 0.147 0.353c0.093 0.093 0.222 0.147 0.353 0.147z"
  }, pathProps))));
}

LiniLinearicons.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLinearicons;