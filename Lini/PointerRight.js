import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPointerRight({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPointerRight';

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
    d: "M12 17a1.99 1.99 0 00-.339-1.113A2.003 2.003 0 0013 14a1.99 1.99 0 00-.339-1.113A2.003 2.003 0 0014 11c0-.364-.098-.706-.269-1H17c1.103 0 2-.897 2-2s-.897-2-2-2H9.627l2.333-1.346c.475-.261.813-.687.953-1.199a1.866 1.866 0 00-.202-1.462c-.544-.907-1.774-1.253-2.742-.77-.061.03-1.368.668-5.35 2.66C2.744 4.821 1.403 5.85.635 6.942.032 7.799.001 8.391.001 8.501v5c0 .848.245 1.632.73 2.331.468.676 1.152 1.259 2.033 1.734 1.743.939 4.246 1.435 7.237 1.435 1.103 0 2-.897 2-2zm-8.763-.315C2.216 16.136 1 15.137 1 13.5V8.51c.003-.039.05-.46.525-1.095.474-.633 1.472-1.605 3.54-2.638 4.054-2.027 5.331-2.65 5.343-2.656l.004-.002c.503-.251 1.162-.073 1.439.389a.876.876 0 01.095.685.956.956 0 01-.472.587l-.01.006-2.705 1.561c-.583.319-.828.678-.729 1.067.099.39.489.587 1.157.587h7.812c.551 0 1 .449 1 1s-.449 1-1 1h-6.5a.5.5 0 000 1h1.5c.551 0 1 .449 1 1s-.449 1-1 1h-1.5a.5.5 0 000 1h.5c.551 0 1 .449 1 1s-.449 1-1 1h-1.5a.5.5 0 000 1h.5c.551 0 1 .449 1 1s-.449 1-1 1c-2.826 0-5.165-.455-6.763-1.315z"
  })));
}
LiniPointerRight.propTypes = {
  size: PropTypes.number.isRequired
};