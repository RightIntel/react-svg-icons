var React = require('react');

var PropTypes = require('prop-types');

function LiniCandy({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniCandy';

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
    d: "M18.916 6.223l-0.5-0.75c-0.245-0.367-0.553-1.084-0.674-1.564l-0.015-0.060c-0.177-0.707-0.869-1.4-1.576-1.577l-0.060-0.015c-0.48-0.12-1.197-0.428-1.564-0.673l-0.75-0.5c-0.153-0.102-0.351-0.112-0.513-0.025s-0.264 0.256-0.264 0.441v3.525c-1.011-0.648-2.212-1.025-3.5-1.025-3.584 0-6.5 2.916-6.5 6.5 0 1.288 0.376 2.489 1.025 3.5h-3.525c-0.184 0-0.354 0.102-0.441 0.264s-0.077 0.36 0.025 0.513l0.5 0.75c0.245 0.368 0.553 1.084 0.673 1.564l0.015 0.060c0.177 0.707 0.869 1.4 1.576 1.576l0.060 0.015c0.48 0.12 1.197 0.428 1.564 0.673l0.75 0.5c0.084 0.056 0.18 0.084 0.277 0.084 0.081 0 0.162-0.020 0.236-0.059 0.163-0.087 0.264-0.256 0.264-0.441v-3.525c1.011 0.649 2.212 1.025 3.5 1.025 3.584 0 6.5-2.916 6.5-6.5 0-1.288-0.376-2.489-1.025-3.5h3.525c0.184 0 0.354-0.102 0.441-0.264s0.078-0.36-0.025-0.513zM9 15.977c-0.714-0.065-1.39-0.266-2-0.579v-9.797c0.61-0.313 1.286-0.514 2-0.579v10.954zM10 5.023c0.714 0.065 1.39 0.266 2 0.579v9.797c-0.61 0.313-1.286 0.514-2 0.579v-10.954zM6 6.26v8.479c-1.221-1.010-2-2.535-2-4.24s0.779-3.23 2-4.24zM5 18.566c-0.466-0.303-1.269-0.649-1.849-0.793l-0.060-0.015c-0.355-0.089-0.76-0.493-0.849-0.849l-0.015-0.060c-0.145-0.58-0.49-1.383-0.794-1.849h3.38c0.061 0.063 0.123 0.125 0.186 0.186v3.38zM13 14.74v-8.479c1.221 1.010 2 2.535 2 4.24s-0.779 3.23-2 4.24zM14.186 6c-0.061-0.063-0.123-0.125-0.186-0.186v-3.38c0.466 0.303 1.269 0.649 1.849 0.794l0.060 0.015c0.355 0.089 0.76 0.493 0.849 0.849l0.015 0.060c0.145 0.58 0.49 1.383 0.794 1.849h-3.38z",
    fill: color
  })));
}

LiniCandy.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCandy;