var React = require('react');

var PropTypes = require('prop-types');

function LiniChartGrowth({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniChartGrowth';

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
    d: "M3.5 20h-3c-0.276 0-0.5-0.224-0.5-0.5v-7c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v7c0 0.276-0.224 0.5-0.5 0.5zM1 19h2v-6h-2v6z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 20h-3c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v10c0 0.276-0.224 0.5-0.5 0.5zM6 19h2v-9h-2v9z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 20h-3c-0.276 0-0.5-0.224-0.5-0.5v-9c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v9c0 0.276-0.224 0.5-0.5 0.5zM11 19h2v-8h-2v8z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 20h-3c-0.276 0-0.5-0.224-0.5-0.5v-13c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v13c0 0.276-0.224 0.5-0.5 0.5zM16 19h2v-12h-2v12z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.854 1.146c-0.134-0.134-0.332-0.181-0.512-0.121l-3 1c-0.262 0.087-0.404 0.37-0.316 0.632s0.371 0.404 0.632 0.316l0.991-0.33-4.295 4.295c-0.213 0.213-0.612 0.242-0.854 0.061l-2.4-1.8c-0.624-0.468-1.587-0.448-2.191 0.046l-4.726 3.867c-0.214 0.175-0.245 0.49-0.070 0.704 0.099 0.121 0.242 0.183 0.387 0.183 0.111 0 0.223-0.037 0.316-0.113l4.726-3.867c0.246-0.202 0.703-0.211 0.957-0.020l2.4 1.8c0.643 0.482 1.592 0.415 2.161-0.154l4.295-4.295-0.33 0.991c-0.087 0.262 0.054 0.545 0.316 0.632 0.052 0.018 0.106 0.026 0.158 0.026 0.209 0 0.404-0.133 0.474-0.342l1-3c0.060-0.18 0.013-0.378-0.121-0.512z",
    fill: color
  })));
}

LiniChartGrowth.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniChartGrowth;