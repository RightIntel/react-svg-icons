var React = require('react');

var PropTypes = require('prop-types');

function Lini3dGlasses({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini Lini3dGlasses';

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
    d: "M18.5 15h-5.5c-0.743 0-1.561-0.532-1.863-1.211l-1.137-2.558-1.137 2.558c-0.302 0.679-1.12 1.211-1.863 1.211h-5.5c-0.827 0-1.5-0.673-1.5-1.5v-6c0-0.827 0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5v6c0 0.827-0.673 1.5-1.5 1.5zM10 10.037c0.169 0 0.593 0.066 0.863 0.674l1.188 2.672c0.143 0.323 0.596 0.617 0.949 0.617h5.5c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5h-17c-0.276 0-0.5 0.224-0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5h5.5c0.353 0 0.806-0.294 0.949-0.617l1.188-2.672c0.27-0.608 0.694-0.674 0.863-0.674z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17.5 13h-4c-0.189 0-0.363-0.107-0.447-0.276l-2-4c-0.077-0.155-0.069-0.339 0.022-0.486s0.252-0.237 0.425-0.237h6c0.276 0 0.5 0.224 0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5zM13.809 12h3.191v-3h-4.691l1.5 3z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.5 13h-4c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h6c0.173 0 0.334 0.090 0.425 0.237s0.099 0.331 0.022 0.486l-2 4c-0.085 0.169-0.258 0.276-0.447 0.276zM3 12h3.191l1.5-3h-4.691v3z"
  }, pathProps))));
}

Lini3dGlasses.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = Lini3dGlasses;