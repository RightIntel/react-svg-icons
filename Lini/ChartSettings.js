var React = require('react');

var PropTypes = require('prop-types');

function LiniChartSettings({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniChartSettings';

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
    d: "M2.5 15h-2c-0.276 0-0.5-0.224-0.5-0.5v-9c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v9c0 0.276-0.224 0.5-0.5 0.5zM1 14h1v-8h-1v8z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8.5 11c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-3.5h-1v7.5c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6.5 15h-2c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5zM5 14h1v-4h-1v4z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13.5 15c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM13.5 13c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M12.017 18.776c-0.050 0-0.1-0.007-0.148-0.022-0.775-0.24-1.502-0.661-2.101-1.215-0.107-0.099-0.166-0.24-0.16-0.385s0.074-0.282 0.188-0.373c0.383-0.305 0.486-0.856 0.241-1.281-0.178-0.309-0.51-0.5-0.867-0.5-0.125 0-0.247 0.023-0.363 0.069-0.136 0.053-0.288 0.045-0.417-0.023s-0.222-0.19-0.254-0.332c-0.089-0.397-0.135-0.805-0.135-1.213s0.045-0.817 0.135-1.213c0.032-0.142 0.125-0.264 0.254-0.332s0.281-0.077 0.417-0.023c0.116 0.046 0.238 0.069 0.363 0.069 0.357 0 0.689-0.192 0.867-0.5 0.245-0.425 0.142-0.976-0.241-1.281-0.114-0.091-0.183-0.227-0.188-0.373s0.053-0.286 0.16-0.385c0.6-0.554 1.326-0.974 2.101-1.215 0.139-0.043 0.291-0.023 0.414 0.054s0.207 0.205 0.229 0.349c0.072 0.485 0.498 0.85 0.989 0.85s0.916-0.366 0.989-0.85c0.022-0.144 0.105-0.272 0.229-0.349s0.275-0.097 0.414-0.054c0.775 0.241 1.502 0.661 2.101 1.215 0.107 0.099 0.166 0.24 0.16 0.385s-0.074 0.282-0.188 0.373c-0.383 0.305-0.486 0.856-0.241 1.281 0.178 0.309 0.51 0.5 0.867 0.5 0.125-0 0.247-0.023 0.363-0.069 0.136-0.053 0.288-0.045 0.417 0.023s0.222 0.19 0.254 0.332c0.089 0.397 0.135 0.805 0.135 1.213s-0.045 0.817-0.135 1.213c-0.032 0.142-0.125 0.264-0.254 0.332s-0.281 0.077-0.417 0.023c-0.116-0.046-0.238-0.069-0.363-0.069-0.357 0-0.689 0.192-0.867 0.5-0.245 0.425-0.142 0.976 0.241 1.281 0.114 0.091 0.183 0.227 0.188 0.373s-0.053 0.286-0.16 0.385c-0.599 0.554-1.326 0.974-2.101 1.215-0.139 0.043-0.291 0.023-0.414-0.054s-0.207-0.205-0.229-0.349c-0.072-0.485-0.498-0.85-0.989-0.85s-0.916 0.366-0.989 0.85c-0.022 0.144-0.105 0.272-0.229 0.349-0.081 0.051-0.173 0.077-0.266 0.077zM10.827 17.12c0.272 0.201 0.566 0.371 0.874 0.506 0.117-0.241 0.282-0.457 0.488-0.636 0.363-0.316 0.829-0.49 1.311-0.49s0.948 0.174 1.311 0.49c0.205 0.178 0.371 0.395 0.488 0.636 0.308-0.135 0.602-0.305 0.874-0.506-0.15-0.222-0.255-0.473-0.306-0.74-0.092-0.472-0.009-0.962 0.232-1.38 0.356-0.617 1.020-1 1.733-1 0.047 0 0.094 0.002 0.14 0.005 0.019-0.167 0.028-0.336 0.028-0.505s-0.009-0.337-0.028-0.505c-0.047 0.003-0.093 0.005-0.14 0.005-0.713 0-1.377-0.383-1.733-1-0.241-0.417-0.323-0.907-0.232-1.379 0.052-0.267 0.157-0.519 0.306-0.74-0.272-0.201-0.566-0.371-0.874-0.506-0.117 0.241-0.282 0.457-0.488 0.636-0.364 0.316-0.829 0.49-1.311 0.49s-0.948-0.174-1.311-0.49c-0.205-0.178-0.371-0.395-0.488-0.636-0.308 0.135-0.602 0.305-0.874 0.506 0.15 0.222 0.255 0.473 0.306 0.74 0.092 0.472 0.009 0.962-0.232 1.379-0.356 0.617-1.020 1-1.733 1-0.047 0-0.094-0.002-0.14-0.005-0.019 0.167-0.028 0.336-0.028 0.505s0.009 0.337 0.028 0.505c0.047-0.003 0.093-0.005 0.14-0.005 0.713 0 1.377 0.383 1.733 1 0.241 0.417 0.323 0.907 0.232 1.379-0.052 0.267-0.157 0.519-0.306 0.74z"
  }, pathProps))));
}

LiniChartSettings.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniChartSettings;