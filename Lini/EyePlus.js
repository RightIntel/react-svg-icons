var React = require('react');

var PropTypes = require('prop-types');

function LiniEyePlus({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniEyePlus';

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
    d: "M19.872 9.166c-0.047-0.053-1.182-1.305-2.956-2.572-1.047-0.748-2.1-1.344-3.13-1.773-0.264-0.11-0.526-0.208-0.787-0.296-0.019-0.008-0.038-0.014-0.057-0.019-1.010-0.335-1.997-0.505-2.942-0.505s-1.932 0.17-2.943 0.505c-0.019 0.005-0.038 0.011-0.057 0.019-0.261 0.088-0.523 0.186-0.787 0.296-1.030 0.429-2.083 1.026-3.13 1.773-1.774 1.267-2.909 2.52-2.956 2.572-0.171 0.19-0.171 0.479 0 0.669 0.044 0.049 1.105 1.22 2.778 2.444 0.986 0.721 1.982 1.31 2.958 1.751 1.237 0.558 2.449 0.878 3.603 0.954 0.011 0.001 0.022 0.001 0.033 0.001 0.261 0 0.481-0.203 0.498-0.468 0.018-0.276-0.191-0.513-0.466-0.531-2.351-0.153-4.57-1.445-6.019-2.501-1.074-0.783-1.895-1.558-2.32-1.984 0.447-0.448 1.332-1.281 2.489-2.106 0.53-0.378 1.156-0.78 1.85-1.145-0.347 0.688-0.533 1.455-0.533 2.251 0 1.239 0.456 2.427 1.285 3.346 0.822 0.912 1.945 1.489 3.16 1.623 0.019 0.002 0.037 0.003 0.056 0.003 0.252 0 0.468-0.189 0.496-0.445 0.030-0.274-0.168-0.522-0.442-0.552-2.027-0.224-3.555-1.933-3.555-3.976 0-1.188 0.519-2.299 1.426-3.062 0.822-0.268 1.691-0.438 2.574-0.438s1.752 0.17 2.574 0.438c0.907 0.763 1.426 1.873 1.426 3.062 0 0.3-0.033 0.6-0.099 0.889-0.061 0.269 0.108 0.537 0.377 0.598 0.037 0.008 0.074 0.012 0.111 0.012 0.228 0 0.434-0.157 0.487-0.389 0.082-0.362 0.124-0.736 0.124-1.111 0-0.796-0.186-1.563-0.533-2.251 0.694 0.365 1.32 0.768 1.85 1.145 1.157 0.825 2.043 1.658 2.49 2.106-0.161 0.161-0.378 0.372-0.643 0.613-0.204 0.186-0.219 0.502-0.033 0.706s0.502 0.219 0.706 0.033c0.647-0.589 1.020-1.001 1.035-1.019 0.171-0.19 0.171-0.479-0-0.669z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 15h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 20c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zM15.5 12c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z",
    fill: color
  })));
}

LiniEyePlus.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEyePlus;