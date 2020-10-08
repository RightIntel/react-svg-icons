var React = require('react');

var PropTypes = require('prop-types');

function LiniArchive2({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniArchive2';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.5 16h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 11h-13c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h13c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.557 11.383l-2.698-6.168c-0.159-0.364-0.475-0.699-0.859-0.925l0-3.791c0-0.133-0.053-0.26-0.146-0.354s-0.221-0.146-0.354-0.146h-11c-0.133 0-0.26 0.053-0.354 0.146s-0.146 0.221-0.146 0.354l0 3.791c-0.384 0.226-0.699 0.56-0.859 0.925l-2.698 6.168c-0.248 0.568-0.443 1.497-0.443 2.117v4c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.619-0.194-1.549-0.443-2.117zM15 1l-0 7h-10l-0-7h10zM4 5.747v2.753c0 0.276 0.224 0.5 0.5 0.5h11c0.276 0 0.5-0.224 0.5-0.5l0-2.752 2.641 6.037c0.030 0.069 0.060 0.148 0.089 0.233-0.075-0.012-0.152-0.018-0.23-0.018h-17c-0.078 0-0.155 0.006-0.23 0.018 0.029-0.085 0.058-0.164 0.089-0.233l2.641-6.037zM19 17.5c0 0.276-0.224 0.5-0.5 0.5h-17c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v4z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 7h-7c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 5h-7c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 3h-7c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniArchive2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArchive2;