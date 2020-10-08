var React = require('react');

var PropTypes = require('prop-types');

function LiniPencil5({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniPencil5';

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
    d: "M19.103 0.896c-0.562-0.562-1.309-0.871-2.103-0.871s-1.542 0.309-2.103 0.871l-9.75 9.75c-0.052 0.052-0.091 0.114-0.116 0.183l-2 5.5c-0.066 0.183-0.021 0.387 0.116 0.524 0.095 0.096 0.223 0.147 0.354 0.147 0.057 0 0.115-0.010 0.171-0.030l5.5-2c0.069-0.025 0.131-0.065 0.183-0.116l9.75-9.75c0.562-0.562 0.871-1.309 0.871-2.104s-0.309-1.542-0.871-2.104zM8.725 14.068l-4.389 1.596 1.596-4.389 8.068-8.068 2.793 2.793-8.068 8.068zM18.397 4.396l-0.897 0.896-2.793-2.793 0.897-0.896c0.373-0.373 0.869-0.578 1.396-0.578s1.023 0.205 1.397 0.578c0.373 0.373 0.578 0.869 0.578 1.396s-0.205 1.023-0.578 1.396z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v10c0 0.827-0.673 1.5-1.5 1.5z",
    fill: color
  })));
}

LiniPencil5.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPencil5;