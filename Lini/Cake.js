var React = require('react');

var PropTypes = require('prop-types');

function LiniCake({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniCake';

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
    d: "M18.010 8.901c-0.633-1.267-1.447-2.294-2.232-2.817-0.145-0.097-0.331-0.111-0.489-0.037l-1.289 0.601v-1.648c0-0.189-0.107-0.363-0.276-0.447l-1-0.5c-0.141-0.070-0.306-0.070-0.447 0l-1 0.5c-0.169 0.085-0.276 0.258-0.276 0.447v3.048l-10.701 4.994c-0.050 0.022-0.096 0.052-0.135 0.088-0.019 0.017-0.036 0.035-0.052 0.055 0 0 0 0 0 0s-0 0-0 0c-0.071 0.087-0.112 0.198-0.111 0.318v5.997c0 0.137 0.057 0.269 0.156 0.363 0.093 0.088 0.216 0.137 0.344 0.137 0.009 0 0.018-0 0.028-0.001l18-1c0.265-0.015 0.472-0.234 0.472-0.499v-6c0-1.028-0.361-2.34-0.99-3.599zM12 5.309l0.5-0.25 0.5 0.25v4.601c-0.15 0.048-0.332 0.090-0.5 0.090s-0.351-0.042-0.5-0.090v-4.601zM11 9.152v1.098c0 0.189 0.107 0.363 0.276 0.447 0.062 0.031 0.623 0.303 1.224 0.303s1.162-0.272 1.224-0.303c0.169-0.085 0.276-0.258 0.276-0.447v-2.498l1.442-0.673c0.575 0.47 1.186 1.295 1.673 2.27 0.459 0.918 0.764 1.884 0.856 2.68l-14.911 0.828 7.94-3.705zM18 13.029v2.998l-17 0.944v-2.998l17-0.944zM1 18.971v-0.998l17-0.944v0.998l-17 0.944z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 4c-0.771 0-1.5-0.729-1.5-1.5 0-0.451 0.234-0.829 0.53-1.308 0.16-0.26 0.342-0.554 0.523-0.916 0.085-0.169 0.258-0.276 0.447-0.276s0.363 0.107 0.447 0.276c0.181 0.362 0.363 0.656 0.523 0.916 0.296 0.479 0.53 0.857 0.53 1.308 0 0.771-0.729 1.5-1.5 1.5zM12.5 1.523c-0.042 0.068-0.082 0.133-0.12 0.195-0.212 0.344-0.38 0.615-0.38 0.782 0 0.224 0.276 0.5 0.5 0.5s0.5-0.276 0.5-0.5c0-0.167-0.168-0.438-0.38-0.782-0.038-0.061-0.078-0.126-0.12-0.195z",
    fill: color
  })));
}

LiniCake.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCake;