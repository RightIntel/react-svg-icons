var React = require('react');

var PropTypes = require('prop-types');

function LiniLampshade({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniLampshade';

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
    d: "M16.981 8.363l-1.986-6.95c-0.076-0.667-1.028-0.944-1.862-1.11-0.976-0.195-2.266-0.303-3.634-0.303s-2.658 0.107-3.634 0.303c-0.834 0.167-1.785 0.443-1.862 1.11l-1.986 6.95c-0.013 0.045-0.019 0.091-0.019 0.137 0 0.562 0.647 0.781 0.89 0.863 0.382 0.129 0.916 0.243 1.589 0.339 1.005 0.144 2.256 0.239 3.613 0.278-0.060 0.162-0.093 0.337-0.093 0.52 0 0.281 0.078 0.544 0.213 0.769-0.828 0.395-1.213 1.146-1.213 1.731 0 0.933 0.329 1.665 0.619 2.311 0.204 0.454 0.381 0.847 0.381 1.189 0 0.304-0.61 0.672-1.013 0.915-0.53 0.32-0.987 0.596-0.987 1.085 0 1.101 2.093 1.5 3.5 1.5s3.5-0.399 3.5-1.5c0-0.489-0.457-0.765-0.987-1.085-0.403-0.243-1.013-0.612-1.013-0.915 0-0.342 0.176-0.735 0.381-1.189 0.29-0.646 0.619-1.378 0.619-2.311 0-0.584-0.385-1.336-1.213-1.731 0.135-0.225 0.213-0.488 0.213-0.769 0-0.183-0.033-0.358-0.093-0.52 1.132-0.033 2.19-0.104 3.093-0.211v3.23c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3.374c0.452-0.079 0.824-0.167 1.11-0.264 0.243-0.082 0.89-0.301 0.89-0.863 0-0.046-0.006-0.093-0.019-0.137zM10.468 14.901c-0.241 0.536-0.468 1.042-0.468 1.599 0 0.868 0.865 1.39 1.496 1.771 0.12 0.072 0.278 0.168 0.395 0.249-0.316 0.193-1.153 0.48-2.391 0.48s-2.076-0.286-2.391-0.48c0.116-0.081 0.275-0.176 0.395-0.249 0.632-0.381 1.496-0.903 1.496-1.771 0-0.557-0.228-1.063-0.468-1.599-0.261-0.581-0.532-1.183-0.532-1.901 0-0.211 0.255-1 1.5-1s1.5 0.789 1.5 1c0 0.719-0.27 1.32-0.532 1.901zM10 10.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5zM13.984 8.764c-1.245 0.152-2.838 0.236-4.484 0.236s-3.239-0.084-4.484-0.236c-1.201-0.147-1.735-0.313-1.955-0.406l1.92-6.721c0.001-0.002 0.001-0.004 0.002-0.005 0.095-0.065 0.431-0.245 1.396-0.407 0.87-0.145 1.978-0.225 3.122-0.225s2.252 0.080 3.122 0.225c0.965 0.161 1.302 0.342 1.396 0.407 0.001 0.002 0.001 0.004 0.002 0.005l1.92 6.721c-0.221 0.093-0.755 0.259-1.955 0.406z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15 14.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps))));
}

LiniLampshade.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLampshade;