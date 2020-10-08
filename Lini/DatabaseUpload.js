var React = require('react');

var PropTypes = require('prop-types');

function LiniDatabaseUpload({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniDatabaseUpload';

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
    d: "M11.854 13.646l-2-2c-0.195-0.195-0.512-0.195-0.707 0l-2 2c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l1.146-1.146v4.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.293l1.146 1.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.067 1.609c-0.497-0.326-1.193-0.615-2.069-0.858-1.742-0.484-4.050-0.75-6.498-0.75s-4.756 0.267-6.498 0.75c-0.877 0.243-1.573 0.532-2.069 0.858-0.619 0.407-0.933 0.874-0.933 1.391v12c0 0.824 0.785 1.511 2.335 2.043 1.31 0.45 3.134 0.768 5.134 0.894 0.011 0.001 0.021 0.001 0.032 0.001 0.262 0 0.482-0.204 0.499-0.469 0.017-0.276-0.192-0.513-0.468-0.531-1.914-0.121-3.644-0.419-4.872-0.841-1.31-0.45-1.659-0.902-1.659-1.098v-2.566c0.2 0.125 0.429 0.245 0.688 0.359 0.926 0.407 2.221 0.733 3.744 0.943 0.023 0.003 0.046 0.005 0.069 0.005 0.246 0 0.46-0.181 0.495-0.432 0.038-0.274-0.153-0.526-0.427-0.564-1.433-0.198-2.636-0.498-3.479-0.868-0.804-0.353-1.090-0.693-1.090-0.877v-2.566c0.492 0.309 1.164 0.583 2.002 0.816 1.742 0.484 4.050 0.75 6.498 0.75s4.756-0.267 6.498-0.75c0.838-0.233 1.511-0.507 2.002-0.816v2.566c0 0.184-0.285 0.524-1.090 0.877-0.843 0.37-2.045 0.67-3.479 0.868-0.274 0.038-0.465 0.29-0.427 0.564 0.035 0.25 0.249 0.432 0.495 0.432 0.023 0 0.046-0.002 0.069-0.005 1.523-0.21 2.818-0.536 3.744-0.943 0.259-0.114 0.488-0.233 0.688-0.359v2.566c0 0.196-0.35 0.647-1.659 1.098-1.228 0.422-2.958 0.721-4.872 0.841-0.276 0.017-0.485 0.255-0.468 0.531 0.017 0.265 0.237 0.469 0.499 0.469 0.011 0 0.021-0 0.032-0.001 2.001-0.126 3.824-0.443 5.134-0.894 1.549-0.532 2.334-1.22 2.334-2.043v-12c0-0.517-0.314-0.985-0.933-1.391zM3.27 1.714c1.658-0.46 3.87-0.714 6.23-0.714s4.573 0.254 6.23 0.714c1.795 0.499 2.27 1.059 2.27 1.286s-0.474 0.787-2.27 1.286c-1.658 0.46-3.87 0.714-6.23 0.714s-4.573-0.254-6.23-0.714c-1.795-0.499-2.27-1.059-2.27-1.286s0.474-0.787 2.27-1.286zM15.73 8.286c-1.658 0.46-3.87 0.714-6.23 0.714s-4.573-0.254-6.23-0.714c-1.795-0.499-2.27-1.059-2.27-1.286v-2.566c0.492 0.309 1.164 0.583 2.002 0.816 1.742 0.484 4.050 0.75 6.498 0.75s4.756-0.267 6.498-0.75c0.838-0.233 1.511-0.507 2.002-0.816v2.566c0 0.227-0.474 0.787-2.27 1.286z"
  }, pathProps))));
}

LiniDatabaseUpload.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDatabaseUpload;