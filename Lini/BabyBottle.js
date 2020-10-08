var React = require('react');

var PropTypes = require('prop-types');

function LiniBabyBottle({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBabyBottle';

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
    d: "M8.5 17h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 15h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 13h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.9 6.055c-0.253-1.184-0.976-2.215-1.998-2.861 0.065-0.225 0.098-0.459 0.098-0.694 0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5c0 0.235 0.034 0.469 0.098 0.694-1.023 0.646-1.745 1.677-1.998 2.861-0.633 0.176-1.1 0.757-1.1 1.445v1c0 0.652 0.418 1.208 1 1.414v7.586c0 1.378 1.122 2.5 2.5 2.5h4c1.378 0 2.5-1.122 2.5-2.5v-7.586c0.582-0.206 1-0.762 1-1.414v-1c0-0.689-0.467-1.27-1.1-1.445zM7.945 3.864c0.12-0.060 0.211-0.165 0.253-0.292s0.031-0.266-0.031-0.385c-0.111-0.214-0.167-0.445-0.167-0.687 0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.242-0.056 0.473-0.167 0.687-0.061 0.119-0.073 0.258-0.031 0.385s0.133 0.233 0.253 0.292c0.878 0.436 1.525 1.214 1.8 2.136h-6.71c0.274-0.922 0.922-1.7 1.8-2.136zM11.5 19h-4c-0.827 0-1.5-0.673-1.5-1.5v-7.5h7v7.5c0 0.827-0.673 1.5-1.5 1.5zM14 8.5c0 0.276-0.224 0.5-0.5 0.5h-8c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5v1z"
  })));
}

LiniBabyBottle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBabyBottle;