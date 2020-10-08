var React = require('react');

var PropTypes = require('prop-types');

function LiniTeapot({
  size,
  ...props
}) {
  var className = 'Component Lini LiniTeapot';

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
    d: "M20 6.5c0-0.841-0.878-1.5-2-1.5-0.036 0-0.071 0.001-0.106 0.002-1.603 0.042-2.188 1.036-2.754 1.999-0.257 0.437-0.519 0.882-0.885 1.305-0.172-0.629-0.254-1.216-0.254-1.806 0-0.147-0.063-0.278-0.164-0.369 0.123-0.226 0.164-0.442 0.164-0.631 0-0.455-0.248-1.115-1.427-1.672-0.665-0.314-1.523-0.548-2.503-0.687 0.009-0.094 0.015-0.187 0.015-0.277 0-0.538-0.172-0.993-0.498-1.317-0.365-0.363-0.899-0.547-1.586-0.547s-1.221 0.184-1.586 0.547c-0.326 0.324-0.498 0.78-0.498 1.317 0 0.090 0.005 0.183 0.015 0.277-0.866 0.123-1.636 0.32-2.262 0.581-0.096-0.112-0.216-0.233-0.363-0.343-0.582-0.436-1.283-0.481-1.972-0.126-0.736 0.379-1.545 1.274-1.22 3.385 0.19 1.235 0.687 2.436 0.926 3.013 0.011 0.027 0.022 0.054 0.033 0.081-0.014 0.036-0.029 0.072-0.043 0.108-0.506 1.269-1.030 2.582-1.030 3.659 0 2.106 0.831 3.82 2.404 4.958 1.394 1.009 3.329 1.542 5.596 1.542s4.203-0.533 5.596-1.542c1.572-1.138 2.404-2.853 2.404-4.958 0-0.186-0.015-0.374-0.045-0.571 0.045-0.055 0.089-0.113 0.133-0.172 0.489-0.663 0.884-1.52 1.265-2.348 0.498-1.082 1.012-2.198 1.629-2.596 0.612-0.254 1.019-0.741 1.019-1.313zM19 6.5c0 0.092-0.079 0.202-0.221 0.296-0.084 0.034-0.165 0.073-0.244 0.118-0.149 0.052-0.329 0.086-0.535 0.086-0.61 0-1-0.296-1-0.5 0-0.197 0.365-0.481 0.941-0.499 0.019-0 0.039-0.001 0.059-0.001 0.61 0 1 0.296 1 0.5zM6.923 2.715c0.036-0.333 0.191-0.715 1.077-0.715s1.041 0.382 1.077 0.715c0.022 0.205-0.004 0.448-0.072 0.704-0.002 0.007-0.004 0.014-0.006 0.021-0.068 0.248-0.174 0.509-0.315 0.761-0.276 0.496-0.57 0.753-0.685 0.795-0.115-0.042-0.409-0.299-0.685-0.795-0.141-0.255-0.248-0.517-0.316-0.767-0.001-0.005-0.002-0.009-0.004-0.014-0.068-0.257-0.094-0.5-0.072-0.706zM6.556 4.881c0.26 0.418 0.794 1.119 1.444 1.119s1.184-0.701 1.444-1.119c0.153-0.246 0.282-0.504 0.383-0.764 0.917 0.123 1.73 0.337 2.319 0.615 0.629 0.297 0.854 0.591 0.854 0.767 0 0.238-0.396 0.622-1.282 0.944-0.985 0.358-2.306 0.556-3.718 0.556s-2.733-0.197-3.718-0.556c-0.885-0.322-1.282-0.706-1.282-0.944 0-0.176 0.224-0.47 0.854-0.767 0.589-0.278 1.402-0.493 2.319-0.615 0.101 0.259 0.229 0.517 0.383 0.764zM1.102 6.487c-0.188-1.223 0.044-2.012 0.689-2.344 0.342-0.176 0.626-0.169 0.895 0.022 0.025 0.018 0.049 0.037 0.072 0.056-0.61 0.454-0.758 0.927-0.758 1.278 0 0.188 0.041 0.404 0.164 0.631-0.1 0.091-0.164 0.223-0.164 0.369 0 0.527-0.167 1.166-0.4 1.843-0.195-0.542-0.397-1.2-0.498-1.856zM8 19c-4.383 0-7-2.056-7-5.5 0-0.885 0.487-2.107 0.959-3.288 0.447-1.121 0.907-2.276 1.017-3.283 0.255 0.159 0.571 0.312 0.965 0.455 1.092 0.397 2.534 0.616 4.060 0.616s2.968-0.219 4.060-0.616c0.387-0.141 0.701-0.292 0.953-0.449 0.041 0.685 0.178 1.373 0.422 2.117-0.066 0.048-0.135 0.095-0.207 0.141-0.769 0.497-1.229 1.359-1.229 2.306 0 0.642 0.192 1.251 0.539 1.714 0.375 0.499 0.907 0.786 1.461 0.786 0.351 0 0.682-0.081 0.995-0.245-0.127 3.29-2.721 5.245-6.995 5.245zM16.445 9.99c-0.681 1.48-1.386 3.010-2.445 3.010-0.542 0-1-0.687-1-1.5 0-0.606 0.288-1.154 0.771-1.466 0.203-0.131 0.387-0.267 0.556-0.407 0.003-0.003 0.006-0.005 0.010-0.008 0.828-0.688 1.285-1.465 1.665-2.111 0.070-0.119 0.136-0.232 0.201-0.339 0.253 0.39 0.723 0.679 1.3 0.786-0.388 0.579-0.719 1.297-1.059 2.035z"
  })));
}

LiniTeapot.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTeapot;