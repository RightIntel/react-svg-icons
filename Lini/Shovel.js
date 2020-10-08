var React = require('react');

var PropTypes = require('prop-types');

function LiniShovel({
  size,
  ...props
}) {
  var className = 'Component Lini LiniShovel';

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
    d: "M19.561 3.439l-3-3c-0.283-0.283-0.66-0.439-1.061-0.439s-0.777 0.156-1.061 0.439c-0.283 0.283-0.439 0.66-0.439 1.061v2.293l-4 4-0.146-0.146c-0.195-0.195-0.512-0.195-0.707 0l-0.74 0.74-1.939-1.939c-0.283-0.283-0.659-0.438-1.061-0.438s-0.778 0.156-1.061 0.438l-2.699 2.699c-1.016 1.016-1.646 2.099-1.646 4.354 0 2.058 0.984 5.032 1.026 5.158 0.050 0.149 0.167 0.266 0.316 0.316 0.126 0.042 3.101 1.026 5.158 1.026 2.254 0 3.337-0.63 4.354-1.646l2.699-2.699c0.283-0.283 0.438-0.659 0.438-1.061s-0.156-0.778-0.438-1.061l-1.939-1.939 0.74-0.74c0.094-0.094 0.146-0.221 0.146-0.354s-0.053-0.26-0.146-0.354l-0.146-0.146 4-4h2.293c0.401 0 0.777-0.156 1.061-0.439s0.439-0.66 0.439-1.061-0.156-0.777-0.439-1.061zM9.5 8.707l1.793 1.793-3.211 3.211c-0.188 0.188-0.439 0.291-0.707 0.291s-0.519-0.103-0.707-0.291l-0.379-0.379c-0.39-0.39-0.39-1.024 0-1.414l3.211-3.211zM12.846 14.24c0.195 0.195 0.195 0.512 0 0.707l-2.699 2.699c-0.878 0.878-1.719 1.354-3.646 1.354-1.577 0-3.863-0.668-4.602-0.898-0.23-0.739-0.898-3.023-0.898-4.602 0-1.927 0.476-2.769 1.354-3.646l2.699-2.699c0.195-0.195 0.512-0.195 0.707 0l1.939 1.939-2.117 2.117c-0.78 0.78-0.78 2.049 0 2.828l0.379 0.379c0.377 0.377 0.879 0.584 1.414 0.584s1.038-0.207 1.414-0.584l2.117-2.117 1.939 1.939zM10.707 8.5l3.793-3.793 0.793 0.793-3.793 3.793-0.793-0.793zM18.854 4.854c-0.094 0.094-0.22 0.146-0.354 0.146h-2.293l-1.207-1.207v-2.293c0-0.134 0.052-0.259 0.147-0.354s0.22-0.146 0.353-0.146 0.259 0.052 0.354 0.146l3 3c0.094 0.094 0.146 0.22 0.146 0.354s-0.052 0.259-0.147 0.354z",
    fill: "#000000"
  })));
}

LiniShovel.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniShovel;