var React = require('react');

var PropTypes = require('prop-types');

function LiniTennis({
  size,
  ...props
}) {
  var className = 'Component Lini LiniTennis';

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
    d: "M19.994 17.42c-0.026-0.159-0.126-0.295-0.27-0.367l-0.927-0.464-3.443-3.443c-0.044-0.044-0.089-0.088-0.135-0.134-1.001-0.994-2.514-2.496-3.359-6.613l-0 0c-0.301-1.44-1.064-2.851-2.126-3.913-1.627-1.627-3.367-2.487-5.034-2.487-1.248 0-2.39 0.483-3.304 1.397-1.031 1.031-1.518 2.385-1.37 3.811 0.156 1.507 1.007 3.073 2.46 4.526 1.068 1.068 2.488 1.826 3.913 2.125l-0 0.001c4.117 0.844 5.619 2.357 6.613 3.359 0.046 0.046 0.091 0.091 0.134 0.135l3.443 3.443 0.464 0.927c0.072 0.144 0.208 0.244 0.367 0.27 0.027 0.004 0.053 0.006 0.080 0.006 0.132 0 0.259-0.052 0.353-0.146l2-2c0.114-0.114 0.166-0.275 0.14-0.434zM9.36 10.653l-1.403-1.403 1.293-1.293 1.403 1.403c-0.139 0.284-0.317 0.538-0.536 0.757-0.233 0.233-0.491 0.407-0.757 0.536zM5.957 7.25l1.293-1.293 1.293 1.293-1.293 1.293-1.293-1.293zM6.543 9.25l-1.221 1.221c-0.571-0.249-1.118-0.58-1.609-0.977l1.536-1.537 1.293 1.293zM10.885 6.624c0.017 0.082 0.032 0.165 0.045 0.247 0.080 0.493 0.091 0.96 0.038 1.39l-1.012-1.012 0.872-0.872c0.019 0.077 0.037 0.154 0.053 0.231 0.001 0.005 0.002 0.010 0.003 0.015zM9.25 6.543l-1.293-1.293 1.537-1.537c0.396 0.489 0.727 1.036 0.976 1.609l-1.22 1.22zM7.25 4.543l-1.293-1.293 1.403-1.403c0.485 0.301 0.971 0.681 1.45 1.136l-1.56 1.56zM6.543 5.25l-1.293 1.293-1.293-1.293 1.293-1.293 1.293 1.293zM6.428 1.365l-1.178 1.178-1.434-1.434c0.285-0.072 0.581-0.109 0.884-0.109 0.563 0 1.142 0.124 1.728 0.365zM2.824 1.531l1.719 1.719-1.293 1.293-1.721-1.721c0.157-0.252 0.348-0.492 0.574-0.718 0.224-0.224 0.465-0.415 0.72-0.573zM1.105 3.813l1.438 1.437-1.176 1.176c-0.378-0.913-0.468-1.801-0.262-2.613zM1.849 7.358l1.401-1.401 1.293 1.293-1.56 1.56c-0.456-0.481-0.834-0.967-1.134-1.452zM6.377 10.83l0.873-0.873 1.010 1.010c-0.194 0.024-0.379 0.033-0.547 0.033-0.337 0-0.682-0.035-1.028-0.102-0.028-0.006-0.056-0.012-0.084-0.018l-0 0c-0.074-0.016-0.149-0.032-0.223-0.051zM9.461 11.698c0.521-0.198 0.979-0.491 1.362-0.874 0.384-0.384 0.677-0.843 0.874-1.361 0.824 2.146 1.843 3.281 2.594 4.038l-0.792 0.792c-0.757-0.751-1.893-1.771-4.039-2.595zM17.637 18.656l-0.19-0.38c-0.024-0.048-0.056-0.092-0.094-0.13l-3.146-3.146 0.793-0.793 3.146 3.146c0.038 0.038 0.082 0.070 0.13 0.094l0.38 0.19-1.019 1.019z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 20c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM2.5 16c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z",
    fill: "#000000"
  })));
}

LiniTennis.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTennis;