var React = require('react');

var PropTypes = require('prop-types');

function LiniCloudGear({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCloudGear';

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
    d: "M17.5 15.663c-0.187 0-0.366-0.105-0.452-0.286-0.118-0.249-0.012-0.548 0.237-0.666 1.042-0.495 1.714-1.559 1.714-2.712 0-1.654-1.346-3-3-3-0.343 0-0.679 0.057-1 0.17-0.217 0.077-0.458-0.005-0.584-0.197s-0.105-0.446 0.051-0.614c0.344-0.371 0.533-0.853 0.533-1.359 0-1.103-0.897-2-2-2-1.055 0-1.931 0.823-1.996 1.875-0.013 0.212-0.159 0.393-0.363 0.45s-0.423-0.020-0.545-0.194c-0.937-1.334-2.468-2.131-4.096-2.131-2.757 0-5 2.243-5 5 0 1.888 1.045 3.595 2.727 4.455 0.246 0.126 0.343 0.427 0.218 0.673s-0.427 0.343-0.673 0.218c-0.969-0.495-1.787-1.246-2.364-2.17-0.594-0.951-0.908-2.049-0.908-3.175 0-3.308 2.692-6 6-6 1.611 0 3.143 0.65 4.261 1.776 0.471-1.050 1.527-1.776 2.739-1.776 1.654 0 3 1.346 3 3 0 0.346-0.059 0.685-0.172 1.004 0.057-0.002 0.115-0.004 0.172-0.004 2.206 0 4 1.794 4 4 0 0.771-0.22 1.52-0.636 2.166-0.405 0.628-0.975 1.129-1.649 1.449-0.069 0.033-0.142 0.048-0.214 0.048z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM10.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.017 19.776c-0.050 0-0.1-0.007-0.148-0.022-0.775-0.24-1.502-0.661-2.101-1.215-0.107-0.099-0.166-0.24-0.16-0.385s0.074-0.282 0.188-0.373c0.383-0.305 0.486-0.856 0.241-1.281-0.178-0.309-0.51-0.5-0.867-0.5-0.125 0-0.247 0.023-0.363 0.069-0.136 0.053-0.288 0.045-0.417-0.023s-0.222-0.19-0.254-0.332c-0.089-0.397-0.135-0.805-0.135-1.213s0.045-0.817 0.135-1.213c0.032-0.142 0.125-0.264 0.254-0.332s0.281-0.077 0.417-0.023c0.116 0.046 0.238 0.069 0.363 0.069 0.357 0 0.689-0.192 0.867-0.5 0.245-0.425 0.142-0.976-0.241-1.281-0.114-0.091-0.183-0.227-0.188-0.373s0.053-0.286 0.16-0.385c0.6-0.554 1.326-0.974 2.101-1.215 0.139-0.043 0.291-0.023 0.414 0.054s0.207 0.205 0.229 0.349c0.072 0.485 0.498 0.85 0.989 0.85s0.916-0.366 0.989-0.85c0.022-0.144 0.105-0.272 0.229-0.349s0.275-0.097 0.414-0.054c0.775 0.241 1.502 0.661 2.101 1.215 0.107 0.099 0.166 0.24 0.16 0.385s-0.074 0.282-0.188 0.373c-0.383 0.305-0.486 0.856-0.241 1.281 0.178 0.309 0.51 0.5 0.867 0.5 0.125-0 0.247-0.023 0.363-0.069 0.136-0.053 0.288-0.045 0.417 0.023s0.222 0.19 0.254 0.332c0.089 0.397 0.135 0.805 0.135 1.213s-0.045 0.817-0.135 1.213c-0.032 0.142-0.125 0.264-0.254 0.332s-0.281 0.077-0.417 0.023c-0.116-0.046-0.238-0.069-0.363-0.069-0.357 0-0.689 0.192-0.867 0.5-0.245 0.425-0.142 0.976 0.241 1.281 0.114 0.091 0.183 0.227 0.188 0.373s-0.053 0.286-0.16 0.385c-0.599 0.554-1.326 0.974-2.101 1.215-0.139 0.043-0.291 0.023-0.414-0.054s-0.207-0.205-0.229-0.349c-0.072-0.485-0.498-0.85-0.989-0.85s-0.916 0.366-0.989 0.85c-0.022 0.144-0.105 0.272-0.229 0.349-0.081 0.051-0.173 0.077-0.266 0.077zM7.827 18.12c0.272 0.201 0.566 0.371 0.874 0.506 0.117-0.241 0.282-0.457 0.488-0.636 0.363-0.316 0.829-0.49 1.311-0.49s0.948 0.174 1.311 0.49c0.205 0.178 0.371 0.395 0.488 0.636 0.308-0.135 0.602-0.305 0.874-0.506-0.15-0.222-0.255-0.473-0.306-0.74-0.092-0.472-0.009-0.962 0.232-1.38 0.356-0.617 1.020-1 1.733-1 0.047 0 0.094 0.002 0.14 0.005 0.019-0.167 0.028-0.336 0.028-0.505s-0.009-0.337-0.028-0.505c-0.047 0.003-0.093 0.005-0.14 0.005-0.713 0-1.377-0.383-1.733-1-0.241-0.417-0.323-0.907-0.232-1.379 0.052-0.267 0.157-0.519 0.306-0.74-0.272-0.201-0.566-0.371-0.874-0.506-0.117 0.241-0.282 0.457-0.488 0.636-0.364 0.316-0.829 0.49-1.311 0.49s-0.948-0.174-1.311-0.49c-0.205-0.178-0.371-0.395-0.488-0.636-0.308 0.135-0.602 0.305-0.874 0.506 0.15 0.222 0.255 0.473 0.306 0.74 0.092 0.472 0.009 0.962-0.232 1.379-0.356 0.617-1.020 1-1.733 1-0.047 0-0.094-0.002-0.14-0.005-0.019 0.167-0.028 0.336-0.028 0.505s0.009 0.337 0.028 0.505c0.047-0.003 0.093-0.005 0.14-0.005 0.713 0 1.377 0.383 1.733 1 0.241 0.417 0.323 0.907 0.232 1.379-0.052 0.267-0.157 0.518-0.306 0.74z"
  }, pathProps))));
}

LiniCloudGear.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCloudGear;