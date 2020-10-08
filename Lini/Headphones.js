var React = require('react');

var PropTypes = require('prop-types');

function LiniHeadphones({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniHeadphones';

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
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.5 15.028c-0.276 0-0.5-0.224-0.5-0.5v-3.528c0-5.084-2.916-8-8-8s-8 2.916-8 8v3.528c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-3.528c0-1.514 0.237-2.874 0.704-4.045 0.445-1.116 1.102-2.068 1.953-2.828 1.557-1.392 3.75-2.127 6.344-2.127s4.787 0.736 6.344 2.127c0.85 0.76 1.507 1.712 1.953 2.828 0.467 1.17 0.704 2.531 0.704 4.045v3.528c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6.5 10c-0.657 0-1.216 0.424-1.418 1.013-1.103 0.068-1.894 0.414-2.409 1.052-0.459 0.57-0.673 1.344-0.673 2.435s0.214 1.865 0.673 2.435c0.515 0.639 1.305 0.984 2.409 1.052 0.203 0.589 0.762 1.013 1.418 1.013 0.827 0 1.5-0.673 1.5-1.5v-6c0-0.827-0.673-1.5-1.5-1.5zM3 14.5c0-1.411 0.35-2.331 2-2.479v4.958c-1.65-0.148-2-1.068-2-2.479zM7 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M17.327 12.065c-0.515-0.639-1.305-0.984-2.408-1.052-0.203-0.589-0.762-1.013-1.418-1.013-0.827 0-1.5 0.673-1.5 1.5v6c0 0.827 0.673 1.5 1.5 1.5 0.657 0 1.216-0.424 1.418-1.013 1.103-0.068 1.894-0.414 2.408-1.052 0.459-0.57 0.673-1.344 0.673-2.435s-0.214-1.865-0.673-2.435zM13.5 18c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5zM15 16.979v-4.958c1.65 0.148 2 1.068 2 2.479s-0.35 2.331-2 2.479z"
  }, pathProps))));
}

LiniHeadphones.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniHeadphones;