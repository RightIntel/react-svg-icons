var React = require('react');

var PropTypes = require('prop-types');

function LiniUmbrella({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniUmbrella';

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
    d: "M15.51 3.49c-1.605-1.605-3.74-2.49-6.010-2.49s-4.405 0.884-6.010 2.49-2.49 3.74-2.49 6.010c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5v8c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.27-0.884-4.405-2.49-6.010zM15.5 7c-0.817 0-1.544 0.394-2 1.002-0.456-0.608-1.183-1.002-2-1.002s-1.544 0.394-2 1.002c-0.456-0.608-1.183-1.002-2-1.002s-1.544 0.394-2 1.002c-0.456-0.608-1.183-1.002-2-1.002-0.422 0-0.819 0.105-1.168 0.29 0.945-3.060 3.801-5.29 7.168-5.29s6.222 2.23 7.168 5.29c-0.349-0.185-0.746-0.29-1.168-0.29z",
    fill: color
  })));
}

LiniUmbrella.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniUmbrella;