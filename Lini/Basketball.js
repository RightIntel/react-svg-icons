var React = require('react');

var PropTypes = require('prop-types');

function LiniBasketball({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBasketball';

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
    d: "M16.218 3.782c-1.794-1.794-4.18-2.782-6.718-2.782s-4.923 0.988-6.717 2.782-2.782 4.18-2.782 6.717c0 2.538 0.988 4.923 2.782 6.717s4.18 2.782 6.717 2.782 4.923-0.988 6.718-2.782c1.794-1.794 2.782-4.18 2.782-6.717s-0.988-4.923-2.782-6.717zM17.985 10h-4.97c0.123-2.078 1.007-4.046 2.482-5.518 1.435 1.43 2.362 3.368 2.488 5.518zM12.855 14.443c0.468 1.024 1.104 1.943 1.893 2.739-1.323 1.042-2.963 1.699-4.748 1.803v-7.985h2.013c0.061 1.197 0.344 2.353 0.842 3.443zM6.145 6.557c-0.468-1.024-1.104-1.943-1.893-2.739 1.323-1.042 2.963-1.699 4.748-1.803v7.985h-2.013c-0.061-1.197-0.344-2.353-0.842-3.443zM12.013 10h-2.013v-7.985c1.785 0.104 3.424 0.761 4.748 1.803-0.79 0.796-1.425 1.715-1.893 2.739-0.498 1.090-0.78 2.247-0.842 3.443zM6.987 11h2.013v7.985c-1.785-0.104-3.424-0.761-4.748-1.803 0.789-0.796 1.425-1.715 1.893-2.739 0.498-1.090 0.78-2.246 0.842-3.443zM3.503 4.482c1.475 1.472 2.359 3.44 2.482 5.518h-4.97c0.125-2.15 1.053-4.088 2.488-5.518zM1.015 11h4.97c-0.123 2.078-1.007 4.046-2.482 5.518-1.435-1.43-2.362-3.368-2.488-5.518zM15.497 16.518c-1.475-1.472-2.359-3.44-2.482-5.518h4.97c-0.125 2.15-1.053 4.088-2.488 5.518z"
  }, pathProps))));
}

LiniBasketball.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBasketball;