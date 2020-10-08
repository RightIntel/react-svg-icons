var React = require('react');

var PropTypes = require('prop-types');

function LiniPaste({
  size,
  ...props
}) {
  var className = 'Component Lini LiniPaste';

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
    d: "M8.5 3c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.26 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 7h-0.5v-2.5c0-0.827-0.673-1.5-1.5-1.5h-0.946c-0.209-0.29-0.487-0.526-0.831-0.697-0.275-0.138-0.547-0.213-0.764-0.254-0.213-1.164-1.235-2.049-2.459-2.049s-2.246 0.885-2.459 2.049c-0.218 0.041-0.489 0.116-0.764 0.254-0.343 0.172-0.622 0.408-0.831 0.697h-0.946c-0.827 0-1.5 0.673-1.5 1.5v11c0 0.827 0.673 1.5 1.5 1.5h2.5v1.5c0 0.827 0.673 1.5 1.5 1.5h8c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM5.698 3.21c0.389-0.203 0.8-0.21 0.802-0.21 0.276 0 0.5-0.224 0.5-0.5 0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.276 0.221 0.5 0.497 0.5 0.004 0 0.416 0.007 0.805 0.21 0.331 0.173 0.542 0.433 0.638 0.79h-6.88c0.096-0.356 0.307-0.617 0.638-0.79zM3.5 16c-0.276 0-0.5-0.224-0.5-0.5v-11c0-0.276 0.224-0.5 0.5-0.5h0.54c-0.027 0.159-0.040 0.326-0.040 0.5 0 0.276 0.224 0.5 0.5 0.5h8c0 0 0 0 0.001 0 0.276 0 0.5-0.224 0.5-0.5 0-0.009-0-0.018-0.001-0.027-0.001-0.164-0.015-0.322-0.040-0.473h0.54c0.276 0 0.5 0.224 0.5 0.5v2.5h-5c-0.133 0-0.26 0.053-0.354 0.146l-2.5 2.5c-0.094 0.094-0.146 0.221-0.146 0.354v6h-2.5zM9 8.207v1.293c0 0.276-0.224 0.5-0.5 0.5h-1.293l1.793-1.793zM16 18.5c0 0.276-0.224 0.5-0.5 0.5h-8c-0.276 0-0.5-0.224-0.5-0.5v-7.5h1.5c0.827 0 1.5-0.673 1.5-1.5v-1.5h5.5c0.276 0 0.5 0.224 0.5 0.5v10z"
  })));
}

LiniPaste.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPaste;