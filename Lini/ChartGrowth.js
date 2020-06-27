import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChartGrowth({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChartGrowth';

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
    d: "M3.5 20h-3a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v7a.5.5 0 01-.5.5zM1 19h2v-6H1v6zM8.5 20h-3a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v10a.5.5 0 01-.5.5zM6 19h2v-9H6v9zM13.5 20h-3a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zM11 19h2v-8h-2v8zM18.5 20h-3a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v13a.5.5 0 01-.5.5zM16 19h2V7h-2v12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.854 1.146a.5.5 0 00-.512-.121l-3 1a.499.499 0 10.316.948l.991-.33-4.295 4.295a.693.693 0 01-.854.061l-2.4-1.8c-.624-.468-1.587-.448-2.191.046L1.183 9.112a.5.5 0 00.633.774l4.726-3.867c.246-.202.703-.211.957-.02l2.4 1.8a1.683 1.683 0 002.161-.154l4.295-4.295-.33.991a.5.5 0 10.948.316l1-3a.5.5 0 00-.121-.512z"
  })));
}
LiniChartGrowth.propTypes = {
  size: PropTypes.number.isRequired
};