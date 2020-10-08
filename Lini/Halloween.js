var React = require('react');

var PropTypes = require('prop-types');

function LiniHalloween({
  size,
  ...props
}) {
  var className = 'Component Lini LiniHalloween';

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
    d: "M7.501 12c-0 0-0 0-0.001 0h-3c-0.154 0-0.299-0.071-0.394-0.192s-0.128-0.28-0.091-0.429c0.006-0.023 0.141-0.559 0.413-1.102 0.527-1.055 1.146-1.276 1.572-1.276s1.045 0.221 1.572 1.276c0.238 0.475 0.371 0.946 0.405 1.071 0.015 0.048 0.024 0.099 0.024 0.153 0 0.276-0.224 0.5-0.5 0.5zM5.196 11h1.609c-0.217-0.517-0.528-1-0.804-1s-0.587 0.483-0.804 1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.501 12c-0 0-0 0-0.001 0h-3c-0.154 0-0.299-0.071-0.394-0.192s-0.128-0.28-0.091-0.429c0.006-0.023 0.141-0.559 0.413-1.102 0.527-1.055 1.146-1.276 1.572-1.276s1.045 0.221 1.572 1.276c0.238 0.475 0.371 0.946 0.405 1.071 0.015 0.048 0.024 0.099 0.024 0.153 0 0.276-0.224 0.5-0.5 0.5zM12.196 11h1.609c-0.217-0.517-0.528-1-0.804-1s-0.588 0.483-0.804 1z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 13h-10c-0.276 0-0.5 0.224-0.5 0.5 0 0.095 0.021 0.956 0.743 1.821 0.418 0.5 0.985 0.895 1.687 1.175 0.839 0.335 1.877 0.504 3.084 0.504h0c0 0 0 0 0 0s0 0 0 0 0.001 0 0.002 0 0.004-0 0.006-0c0 0 0 0 0 0 1.198-0.001 2.228-0.17 3.061-0.505 0.698-0.28 1.263-0.676 1.678-1.176 0.718-0.864 0.739-1.724 0.739-1.82 0-0.276-0.224-0.5-0.5-0.5zM10.007 15.989l-0.007-0.496c-0.004-0.276-0.231-0.495-0.507-0.493-0.276 0.004-0.497 0.231-0.493 0.507l0.007 0.481c-2.795-0.127-3.641-1.296-3.896-1.989h1.889v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5h3v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5h1.889c-0.256 0.691-1.1 1.865-3.882 1.989z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.763 7.302c-0.833-1.457-1.964-2.271-3.193-2.301-1.369-0.359-2.221-1.245-2.526-1.614l0.442-1.766c0.043-0.17-0.007-0.351-0.132-0.475l-1-1c-0.12-0.12-0.292-0.17-0.458-0.135s-0.303 0.153-0.363 0.312c-0.004 0.009-0.37 0.956-1.31 2.002-1.241 1.382-2.849 2.282-4.779 2.676-1.234 0.024-2.371 0.839-3.206 2.301-0.798 1.396-1.237 3.242-1.237 5.198 0 1.981 0.61 3.849 1.718 5.259 1.136 1.445 2.656 2.241 4.282 2.241 0.685 0 1.353-0.142 1.991-0.421 0.479 0.278 0.988 0.421 1.509 0.421s1.030-0.143 1.509-0.421c0.638 0.28 1.306 0.421 1.991 0.421 1.626 0 3.147-0.796 4.282-2.241 1.108-1.41 1.718-3.277 1.718-5.259 0-1.955-0.439-3.801-1.237-5.198zM9.999 2.957c0.542-0.609 0.911-1.186 1.144-1.607l0.303 0.303-0.431 1.725c-0.034 0.137-0.009 0.281 0.069 0.399 0.034 0.051 0.66 0.972 1.893 1.655-0.344 0.202-0.672 0.472-0.976 0.806-0.728-0.805-1.59-1.238-2.501-1.238s-1.772 0.432-2.501 1.238c-0.253-0.278-0.523-0.512-0.804-0.699 1.817-0.675 3.045-1.728 3.804-2.582zM13 19c-0.366 0-0.727-0.052-1.079-0.153 0.010-0.010 0.020-0.021 0.029-0.031 0.188-0.202 0.178-0.518-0.024-0.707s-0.518-0.178-0.707 0.024c-0.369 0.395-0.967 0.866-1.72 0.866s-1.351-0.471-1.719-0.866c-0.188-0.202-0.505-0.213-0.707-0.024s-0.213 0.505-0.024 0.707c0.010 0.010 0.020 0.021 0.029 0.031-0.352 0.101-0.713 0.153-1.079 0.153-2.757 0-5-2.916-5-6.5 0-1.784 0.393-3.454 1.106-4.702 0.661-1.158 1.51-1.796 2.389-1.798 0.002 0 0.004-0 0.006-0 0.809 0.001 1.447 0.526 1.884 1.055-0.040 0.063-0.079 0.127-0.117 0.192-0.139 0.239-0.058 0.545 0.18 0.684 0.079 0.046 0.166 0.068 0.251 0.068 0.172 0 0.339-0.089 0.432-0.248 0.659-1.13 1.499-1.752 2.367-1.752s1.709 0.622 2.367 1.752c0.139 0.239 0.445 0.319 0.684 0.18s0.319-0.445 0.18-0.684c-0.038-0.066-0.077-0.129-0.117-0.192 0.437-0.529 1.073-1.053 1.881-1.055 0.002 0 0.004 0 0.006 0s0.003-0 0.004-0c0.88 0.002 1.728 0.641 2.39 1.798 0.713 1.248 1.106 2.918 1.106 4.702 0 3.584-2.243 6.5-5 6.5z",
    fill: "#000000"
  })));
}

LiniHalloween.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniHalloween;