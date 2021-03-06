var React = require('react');

var PropTypes = require('prop-types');

function LiniFileVideo({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFileVideo';

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
    d: "M17.854 5.646l-4.5-4.5c-0.094-0.094-0.221-0.146-0.354-0.146h-9.5c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5v-12.5c0-0.133-0.053-0.26-0.146-0.354zM16.793 6h-3.293c-0.276 0-0.5-0.224-0.5-0.5v-3.293l3.793 3.793zM16.5 19h-13c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h8.5v3.5c0 0.827 0.673 1.5 1.5 1.5h3.5v11.5c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.234 10.676c-0.136 0-0.272 0.034-0.405 0.1l-1.829 0.915v-0.191c0-0.827-0.673-1.5-1.5-1.5h-4c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-0.191l1.829 0.915c0.133 0.067 0.269 0.1 0.405 0.1 0.227 0 0.43-0.093 0.574-0.263 0.126-0.149 0.192-0.343 0.192-0.561v-4c0-0.47-0.329-0.824-0.766-0.824zM11 15.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v4zM14 15.191l-1.829-0.915c-0.077-0.038-0.171-0.191-0.171-0.276v-1c0-0.086 0.094-0.238 0.171-0.276l1.829-0.914-0 3.382z"
  }, pathProps))));
}

LiniFileVideo.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFileVideo;