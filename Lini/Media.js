var React = require('react');

var PropTypes = require('prop-types');

function LiniMedia({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniMedia';

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
    d: "M19.817 11.113c-0.116-0.095-0.268-0.133-0.415-0.104l-5 1c-0.234 0.047-0.402 0.252-0.402 0.49v2.695c-0.293-0.124-0.633-0.195-1-0.195-1.122 0-2 0.659-2 1.5s0.878 1.5 2 1.5 2-0.659 2-1.5v-3.59l4-0.8v2.085c-0.293-0.124-0.633-0.195-1-0.195-1.122 0-2 0.659-2 1.5s0.878 1.5 2 1.5 2-0.659 2-1.5v-4c0-0.15-0.067-0.292-0.183-0.387zM13 17c-0.61 0-1-0.296-1-0.5s0.39-0.5 1-0.5 1 0.296 1 0.5-0.39 0.5-1 0.5zM18 16c-0.61 0-1-0.296-1-0.5s0.39-0.5 1-0.5 1 0.296 1 0.5-0.39 0.5-1 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 11c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM13.5 9c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 6h-4.5v-3.5c0-0.276-0.224-0.5-0.5-0.5h-11c-0.276 0-0.5 0.224-0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5h4.5v3.5c0 0.276 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.775l-3.187-3.585c-0.272-0.306-0.65-0.476-1.039-0.466s-0.758 0.199-1.014 0.519l-0.485 0.606v-2.075h10v3c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3.5c0-0.276-0.224-0.5-0.5-0.5zM10 5h1v1h-1v-1zM11 4h-1v-1h1v1zM1 5h1v1h-1v-1zM2 3v1h-1v-1h1zM1 7h1v1h-1v-1zM7.266 9.093c0.073-0.091 0.165-0.142 0.259-0.144s0.189 0.044 0.266 0.131l2.596 2.92h-4.387v-1.325l1.266-1.582zM5.5 6c-0.276 0-0.5 0.224-0.5 0.5v1.5h-2v-5h6v3h-3.5z",
    fill: color
  })));
}

LiniMedia.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMedia;