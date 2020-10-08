var React = require('react');

var PropTypes = require('prop-types');

function LiniUsers({
  size,
  ...props
}) {
  var className = 'Component Lini LiniUsers';

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
    d: "M18.927 16.158c-0.357-0.381-0.791-0.713-1.296-0.997-0.303-0.604-0.898-1.399-2.058-2.033-0.475-0.26-1.012-0.475-1.607-0.646 1.213-0.688 2.034-1.991 2.034-3.482 0-1.619-0.967-3.017-2.354-3.645-0.297-0.658-0.763-1.221-1.36-1.637-0.203-0.142-0.418-0.263-0.64-0.364-0.297-0.657-0.763-1.22-1.36-1.636-0.673-0.469-1.463-0.717-2.286-0.717-2.206 0-4 1.794-4 4 0 0.823 0.248 1.613 0.717 2.286 0.416 0.597 0.979 1.063 1.636 1.36 0.101 0.223 0.222 0.437 0.364 0.64 0.188 0.269 0.406 0.511 0.648 0.724-1.498 0.047-2.797 0.263-3.869 0.644-1.009 0.359-1.824 0.865-2.424 1.504-1.061 1.131-1.073 2.293-1.073 2.342 0 0.827 0.673 1.5 1.5 1.5h0.568c-0.066 0.291-0.068 0.481-0.068 0.5 0 0.827 0.673 1.5 1.5 1.5h0.568c-0.066 0.291-0.068 0.481-0.068 0.5 0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5 0-0.049-0.012-1.211-1.073-2.342zM15 9c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zM5 5c0-1.654 1.346-3 3-3 0.866 0 1.679 0.382 2.24 1.008-0.080-0.005-0.159-0.008-0.24-0.008-2.206 0-4 1.794-4 4 0 0.080 0.003 0.16 0.008 0.24-0.626-0.561-1.008-1.374-1.008-2.24zM7 7c0-1.654 1.346-3 3-3 0.865 0 1.678 0.382 2.239 1.007-0.079-0.005-0.159-0.007-0.239-0.007-2.206 0-4 1.794-4 4 0 0.080 0.003 0.16 0.007 0.239-0.626-0.561-1.007-1.374-1.007-2.239zM1.5 15c-0.275 0-0.498-0.223-0.5-0.497 0.001-0.055 0.037-0.879 0.855-1.716 0.797-0.815 2.51-1.787 6.145-1.787 0.183 0 0.364 0.003 0.542 0.008 0.22 0.378 0.5 0.716 0.827 1.002-1.499 0.047-2.799 0.263-3.872 0.644-1.009 0.359-1.824 0.865-2.424 1.504-0.267 0.285-0.467 0.572-0.618 0.842h-0.955zM3.5 17c-0.275 0-0.498-0.223-0.5-0.497 0.002-0.056 0.038-0.88 0.855-1.716 0.797-0.815 2.51-1.787 6.145-1.787 3.035 0 4.753 0.668 5.725 1.417-1.067-0.277-2.315-0.417-3.725-0.417-1.768 0-3.283 0.22-4.503 0.654-1.009 0.359-1.824 0.865-2.424 1.504-0.267 0.285-0.467 0.572-0.618 0.842h-0.955zM18.5 19h-13c-0.275 0-0.498-0.223-0.5-0.497 0.001-0.055 0.037-0.879 0.855-1.716 0.797-0.815 2.51-1.787 6.145-1.787s5.348 0.972 6.145 1.787c0.818 0.837 0.853 1.661 0.855 1.716-0.002 0.274-0.225 0.497-0.5 0.497z"
  })));
}

LiniUsers.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniUsers;