var React = require('react');

var PropTypes = require('prop-types');

function LiniPencil({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPencil';

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
    d: "M19.104 0.896c-0.562-0.562-1.309-0.871-2.104-0.871s-1.542 0.309-2.104 0.871l-12.75 12.75c-0.052 0.052-0.091 0.114-0.116 0.183l-2 5.5c-0.066 0.183-0.021 0.387 0.116 0.524 0.095 0.095 0.223 0.146 0.354 0.146 0.057 0 0.115-0.010 0.171-0.030l5.5-2c0.069-0.025 0.131-0.065 0.183-0.116l12.75-12.75c0.562-0.562 0.871-1.309 0.871-2.104s-0.309-1.542-0.871-2.104zM5.725 17.068l-4.389 1.596 1.596-4.389 11.068-11.068 2.793 2.793-11.068 11.068zM18.396 4.396l-0.896 0.896-2.793-2.793 0.896-0.896c0.373-0.373 0.869-0.578 1.396-0.578s1.023 0.205 1.396 0.578c0.373 0.373 0.578 0.869 0.578 1.396s-0.205 1.023-0.578 1.396z"
  }, pathProps))));
}

LiniPencil.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPencil;