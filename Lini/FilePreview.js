var React = require('react');

var PropTypes = require('prop-types');

function LiniFilePreview({
  size,
  ...props
}) {
  var className = 'Component Lini LiniFilePreview';

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
    d: "M17.854 5.646l-4.5-4.5c-0.094-0.094-0.221-0.146-0.354-0.146h-9.5c-0.827 0-1.5 0.673-1.5 1.5v6c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5h8.5v3.5c0 0.827 0.673 1.5 1.5 1.5h3.5v11.5c0 0.276-0.224 0.5-0.5 0.5h-13c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1c0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5v-12.5c0-0.133-0.053-0.26-0.146-0.354zM13 5.5v-3.293l3.793 3.793h-3.293c-0.276 0-0.5-0.224-0.5-0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.872 12.666c-0.034-0.038-0.838-0.929-2.139-1.828-0.985-0.68-1.992-1.179-2.985-1.484-0.033-0.014-0.068-0.024-0.103-0.031-0.728-0.214-1.448-0.324-2.146-0.324s-1.419 0.11-2.147 0.324c-0.035 0.006-0.069 0.017-0.102 0.030-0.993 0.305-2 0.804-2.985 1.484-1.301 0.898-2.105 1.79-2.139 1.828-0.17 0.19-0.17 0.477 0 0.667 0.034 0.038 0.838 0.929 2.139 1.828 1.741 1.203 3.551 1.839 5.234 1.839s3.493-0.636 5.234-1.839c1.301-0.898 2.105-1.79 2.139-1.828 0.17-0.19 0.17-0.477 0-0.667zM9.298 10.263c0.453 0.468 0.702 1.080 0.702 1.737 0 1.378-1.122 2.5-2.5 2.5s-2.5-1.122-2.5-2.5c0-0.658 0.25-1.271 0.705-1.739 0.572-0.162 1.175-0.261 1.795-0.261 0.624 0 1.228 0.101 1.798 0.263zM7.5 16c-1.86 0-3.553-0.896-4.645-1.648-0.743-0.511-1.319-1.028-1.654-1.352 0.514-0.497 1.597-1.448 2.994-2.146-0.127 0.366-0.194 0.753-0.194 1.146 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-0.392-0.067-0.779-0.194-1.145 0.507 0.252 0.959 0.531 1.339 0.792 0.743 0.511 1.319 1.028 1.654 1.352-0.874 0.845-3.389 3-6.3 3z"
  })));
}

LiniFilePreview.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFilePreview;