import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPointerDown({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPointerDown';

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
    d: "M17 12a1.99 1.99 0 01-1.113-.339A2.003 2.003 0 0114 13a1.99 1.99 0 01-1.113-.339A2.003 2.003 0 0111 14c-.364 0-.706-.098-1-.269V17c0 1.103-.897 2-2 2s-2-.897-2-2V9.627L4.654 11.96a1.947 1.947 0 01-1.199.953 1.866 1.866 0 01-1.462-.202c-.907-.544-1.253-1.774-.77-2.742.03-.061.668-1.368 2.66-5.35C4.821 2.744 5.85 1.403 6.942.635 7.799.032 8.391.001 8.501.001h5c.848 0 1.632.245 2.331.73.676.468 1.259 1.152 1.734 2.033.939 1.743 1.435 4.246 1.435 7.237 0 1.103-.897 2-2 2zm-.315-8.763C16.136 2.216 15.137 1 13.5 1H8.51c-.039.003-.46.05-1.095.525-.633.474-1.605 1.472-2.638 3.54-2.027 4.054-2.65 5.331-2.656 5.343l-.002.004c-.251.503-.073 1.162.389 1.439a.876.876 0 00.685.095.956.956 0 00.587-.472l.006-.01 1.561-2.705c.319-.583.678-.828 1.067-.729.39.099.587.489.587 1.157v7.812c0 .551.449 1 1 1s1-.449 1-1v-6.5a.5.5 0 011 0v1.5c0 .551.449 1 1 1s1-.449 1-1v-1.5a.5.5 0 011 0v.5c0 .551.449 1 1 1s1-.449 1-1v-1.5a.5.5 0 011 0v.5c0 .551.449 1 1 1s1-.449 1-1c0-2.826-.455-5.165-1.315-6.763z"
  })));
}
LiniPointerDown.propTypes = {
  size: PropTypes.number.isRequired
};