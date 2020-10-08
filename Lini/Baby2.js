var React = require('react');

var PropTypes = require('prop-types');

function LiniBaby2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBaby2';

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
    d: "M13.5 11c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5c0 0.827-0.673 1.5-1.5 1.5zM13.5 9c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 11c-0.827 0-1.5-0.669-1.5-1.491s0.673-1.491 1.5-1.491 1.5 0.669 1.5 1.491c0 0.822-0.673 1.491-1.5 1.491zM6.5 9.018c-0.276 0-0.5 0.22-0.5 0.491s0.224 0.491 0.5 0.491 0.5-0.22 0.5-0.491-0.224-0.491-0.5-0.491z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.42 7.815c-0.63-1.666-1.729-3.094-3.186-4.137-1.533-1.098-3.342-1.678-5.234-1.678s-3.701 0.58-5.234 1.678c-1.457 1.043-2.556 2.471-3.186 4.137-0.993 0.755-1.58 1.934-1.58 3.185s0.588 2.43 1.58 3.185c0.63 1.666 1.729 3.094 3.186 4.137 1.533 1.098 3.342 1.678 5.234 1.678s3.701-0.58 5.234-1.678c1.457-1.043 2.556-2.471 3.186-4.137 0.993-0.755 1.58-1.934 1.58-3.185s-0.588-2.43-1.58-3.185zM17.716 13.461c-0.085 0.059-0.149 0.144-0.184 0.241-1.137 3.169-4.164 5.298-7.532 5.298s-6.395-2.129-7.532-5.298c-0.035-0.097-0.099-0.182-0.184-0.241-0.804-0.562-1.284-1.482-1.284-2.461s0.48-1.899 1.284-2.461c0.085-0.059 0.149-0.144 0.184-0.241 1.027-2.864 3.598-4.879 6.57-5.24 1.141 0.25 1.962 1.264 1.962 2.442 0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.937-0.372-1.8-0.986-2.435 2.949 0.379 5.496 2.386 6.518 5.233 0.035 0.097 0.099 0.182 0.184 0.241 0.804 0.562 1.284 1.482 1.284 2.461s-0.48 1.899-1.284 2.461z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 16c-1.672 0-3.226-0.831-4.158-2.222-0.154-0.229-0.092-0.54 0.137-0.694s0.54-0.092 0.694 0.137c0.745 1.113 1.989 1.778 3.327 1.778s2.581-0.665 3.327-1.778c0.154-0.229 0.464-0.291 0.694-0.137s0.291 0.464 0.137 0.694c-0.931 1.391-2.486 2.222-4.158 2.222z",
    fill: "#000000"
  })));
}

LiniBaby2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBaby2;