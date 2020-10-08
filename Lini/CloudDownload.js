var React = require('react');

var PropTypes = require('prop-types');

function LiniCloudDownload({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCloudDownload';

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
    d: "M12.853 13.647c-0.195-0.195-0.512-0.195-0.707 0l-1.146 1.146v-4.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4.293l-1.146-1.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.353-0.147l2-2c0.195-0.195 0.195-0.512 0-0.707z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.006 16h-2.506c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2.506c1.651 0 2.994-1.343 2.994-2.994s-1.343-2.994-2.994-2.994c-0.354 0-0.699 0.061-1.026 0.18-0.218 0.080-0.462-0.001-0.59-0.195s-0.104-0.45 0.056-0.619c0.357-0.376 0.554-0.865 0.554-1.379 0-1.103-0.897-2-2-2-0.642 0-1.229 0.297-1.61 0.814-0.23 0.312-0.365 0.678-0.388 1.057-0.013 0.212-0.159 0.392-0.363 0.45s-0.423-0.020-0.545-0.193c-0.11-0.156-0.229-0.307-0.354-0.447-0.949-1.068-2.312-1.681-3.74-1.681-2.757 0-5 2.243-5 5s2.243 5 5 5h1.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1.5c-3.308 0-6-2.692-6-6s2.692-6 6-6c1.602 0 3.137 0.643 4.26 1.775 0.088-0.194 0.196-0.38 0.325-0.555 0.564-0.764 1.467-1.22 2.415-1.22 1.654 0 3 1.346 3 3 0 0.351-0.061 0.694-0.178 1.017 0.061-0.003 0.122-0.004 0.184-0.004 2.202 0 3.994 1.792 3.994 3.994s-1.792 3.994-3.994 3.994z"
  }, pathProps))));
}

LiniCloudDownload.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCloudDownload;