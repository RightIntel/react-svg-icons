var React = require('react');

var PropTypes = require('prop-types');

function LiniFileAudio({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFileAudio';

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
    d: "M17.854 5.646l-4.5-4.5c-0.094-0.094-0.221-0.146-0.354-0.146h-9.5c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5v-12.5c0-0.133-0.053-0.26-0.146-0.354zM16.793 6h-3.293c-0.276 0-0.5-0.224-0.5-0.5v-3.293l3.793 3.793zM16.5 19h-13c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h8.5v3.5c0 0.827 0.673 1.5 1.5 1.5h3.5v11.5c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M8.5 17.001c-0.112 0-0.222-0.037-0.312-0.11l-2.363-1.891h-0.325c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h0.325l2.363-1.891c0.15-0.12 0.356-0.143 0.529-0.060s0.283 0.258 0.283 0.451v6c0 0.192-0.11 0.367-0.283 0.451-0.069 0.033-0.143 0.049-0.217 0.049zM6 14c0.114 0 0.224 0.039 0.312 0.11l1.688 1.35v-3.92l-1.688 1.35c-0.089 0.071-0.199 0.11-0.312 0.11v1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.736 16c-0.119 0-0.238-0.042-0.333-0.127-0.206-0.184-0.223-0.5-0.039-0.706 0.411-0.459 0.637-1.050 0.637-1.667s-0.226-1.208-0.637-1.667c-0.184-0.206-0.167-0.522 0.039-0.706s0.522-0.167 0.706 0.039c0.575 0.642 0.891 1.471 0.891 2.334s-0.317 1.691-0.892 2.334c-0.099 0.11-0.235 0.167-0.373 0.167z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13.5 17c-0.105 0-0.21-0.033-0.3-0.1-0.221-0.166-0.265-0.479-0.099-0.7 0.589-0.783 0.9-1.717 0.9-2.7s-0.311-1.916-0.899-2.7c-0.166-0.221-0.121-0.534 0.099-0.7s0.534-0.121 0.7 0.099c0.72 0.958 1.1 2.099 1.1 3.3s-0.38 2.343-1.1 3.301c-0.098 0.131-0.248 0.2-0.4 0.2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M10.366 14.5c-0.085 0-0.171-0.022-0.25-0.067-0.239-0.138-0.321-0.444-0.182-0.683 0.044-0.076 0.067-0.16 0.067-0.25s-0.022-0.173-0.067-0.25c-0.138-0.239-0.057-0.545 0.182-0.683s0.545-0.057 0.683 0.182c0.132 0.227 0.201 0.487 0.201 0.751s-0.070 0.523-0.201 0.751c-0.093 0.16-0.261 0.25-0.433 0.25z"
  }, pathProps))));
}

LiniFileAudio.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFileAudio;