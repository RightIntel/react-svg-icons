var React = require('react');

var PropTypes = require('prop-types');

function LiniBathtub({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniBathtub';

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
    d: "M16.5 20h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 20h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 12.5c0-0.827-0.673-1.5-1.5-1.5h-15.5v-9.5c0-0.276 0.224-0.5 0.5-0.5h1.5c0.142 0 0.399 0.106 0.5 0.207l0.126 0.126c-0.929 1.27-0.821 3.068 0.326 4.215 0.094 0.094 0.221 0.146 0.354 0.146s0.26-0.053 0.354-0.146l3.889-3.889c0.195-0.195 0.195-0.512 0-0.707-0.614-0.614-1.43-0.952-2.298-0.952-0.699 0-1.364 0.219-1.918 0.625l-0.125-0.125c-0.29-0.29-0.797-0.5-1.207-0.5h-1.5c-0.827 0-1.5 0.673-1.5 1.5v9.5h-0.5c-0.827 0-1.5 0.673-1.5 1.5 0 0.652 0.418 1.208 1 1.414v2.586c0 1.378 1.122 2.5 2.5 2.5h13c1.378 0 2.5-1.122 2.5-2.5v-2.586c0.582-0.206 1-0.762 1-1.414zM9.448 1.345l-3.103 3.103c-0.546-0.869-0.442-2.033 0.314-2.789 0.425-0.425 0.99-0.659 1.591-0.659 0.431 0 0.843 0.12 1.198 0.345zM16.5 18h-13c-0.827 0-1.5-0.673-1.5-1.5v-2.5h16v2.5c0 0.827-0.673 1.5-1.5 1.5zM18.5 13h-17c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 4.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 4.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 4.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 6.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  })));
}

LiniBathtub.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBathtub;