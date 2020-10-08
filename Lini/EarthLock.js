var React = require('react');

var PropTypes = require('prop-types');

function LiniEarthLock({
  size,
  ...props
}) {
  var className = 'Component Lini LiniEarthLock';

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
    d: "M17.071 2.929c-1.889-1.889-4.4-2.929-7.071-2.929-0.893 0-1.778 0.118-2.631 0.35-0.266 0.073-0.424 0.347-0.351 0.614s0.347 0.424 0.614 0.351c0.768-0.209 1.565-0.315 2.369-0.315 1.578 0 3.061 0.409 4.352 1.125-0.441-0.192-0.847-0.169-1.215-0.147-0.447 0.027-0.869 0.052-1.477-0.272-1.13-0.602-2.048-0.811-3.394-0.1-0.244 0.129-0.338 0.431-0.209 0.676s0.431 0.338 0.676 0.209c0.896-0.473 1.424-0.452 2.457 0.099 0.856 0.456 1.494 0.418 2.006 0.388 0.429-0.026 0.647-0.029 0.922 0.158 0.385 0.263 0.585 0.844 0.796 1.458 0.32 0.932 0.683 1.988 1.835 2.38 0.155 0.053 0.421 0.143 0.61 0.222-0.163 0.168-0.435 0.411-0.702 0.649-0.172 0.154-0.367 0.328-0.583 0.525-0.624 0.569-0.55 1.235-0.484 1.822 0.076 0.677 0.154 1.378-0.687 2.322-0.227 0.255-0.36 0.61-0.501 0.986-0.326 0.871-0.634 1.694-1.946 1.706-0.037-0.044-0.141-0.21-0.234-0.733-0.085-0.482-0.134-1.106-0.187-1.765-0.080-1.012-0.171-2.16-0.421-3.112-0.32-1.217-0.857-1.936-1.641-2.198-0.6-0.2-1.128-0.184-1.521-0.147-0.275 0.026-0.477 0.27-0.451 0.545s0.27 0.477 0.545 0.451c0.329-0.031 0.692-0.040 1.111 0.1 0.439 0.147 0.763 0.639 0.991 1.504s0.314 1.966 0.391 2.936c0.064 0.81 0.124 1.574 0.257 2.151 0.081 0.35 0.185 0.616 0.32 0.813 0.201 0.294 0.489 0.456 0.811 0.456 0.884 0 1.59-0.285 2.099-0.847 0.423-0.467 0.639-1.044 0.813-1.508 0.102-0.273 0.208-0.556 0.311-0.672 1.137-1.277 1.020-2.329 0.934-3.098-0.063-0.564-0.064-0.764 0.164-0.972 0.212-0.193 0.405-0.366 0.575-0.518 0.363-0.324 0.625-0.558 0.809-0.758 0.126-0.138 0.422-0.461 0.34-0.865-0.001-0.004-0.002-0.007-0.002-0.010 0.343 0.951 0.53 1.976 0.53 3.044 0 4.963-4.037 9-9 9-3.427 0-6.415-1.907-7.934-4.739 0.261-0.495 0.754-1.606 0.525-2.578 0.016-0.097 0.181-0.331 0.28-0.472 0.125-0.177 0.254-0.36 0.34-0.554 0.112-0.252-0.002-0.548-0.254-0.66s-0.548 0.002-0.66 0.254c-0.046 0.104-0.147 0.247-0.243 0.384-0.247 0.351-0.555 0.788-0.438 1.269 0.080 0.327 0.011 0.73-0.105 1.1-0.285-0.809-0.458-1.673-0.501-2.574-0.013-0.276-0.247-0.489-0.523-0.476s-0.489 0.247-0.476 0.523c0.121 2.57 1.214 4.967 3.077 6.749 1.869 1.788 4.324 2.773 6.912 2.773 2.671 0 5.182-1.040 7.071-2.929s2.929-4.4 2.929-7.071c0-2.671-1.040-5.182-2.929-7.071zM17.072 6.026c-0.687-0.234-0.93-0.94-1.211-1.758-0.244-0.71-0.496-1.443-1.095-1.899 1.639 1.027 2.924 2.567 3.631 4.393-0.195-0.351-0.685-0.518-1.325-0.736z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 3.086v-0.586c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v0.586c-0.582 0.206-1 0.762-1 1.414v3c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-3c0-0.652-0.418-1.208-1-1.414zM3.5 1c0.827 0 1.5 0.673 1.5 1.5v0.5h-3v-0.5c0-0.827 0.673-1.5 1.5-1.5zM6 7.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3z"
  })));
}

LiniEarthLock.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEarthLock;