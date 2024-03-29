import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPushpin(props = {}) {
  props.name = "Pushpin";
  
  return (
    <Lini {...props}>
      <path d="M18 6.793l-5.293-5.293c-0.188-0.188-0.44-0.292-0.707-0.292s-0.519 0.104-0.707 0.292l-0.293 0.293c-0.29 0.29-0.5 0.797-0.5 1.207v1c0 0.142-0.106 0.399-0.207 0.5l-2.793 2.793c-0.101 0.101-0.358 0.207-0.5 0.207h-1c-0.41 0-0.917 0.21-1.207 0.5l-0.293 0.293c-0.39 0.39-0.39 1.024 0 1.414l1.553 1.553-4.95 6.435c-0.153 0.199-0.135 0.481 0.043 0.658 0.097 0.097 0.225 0.146 0.354 0.146 0.107 0 0.214-0.034 0.305-0.104l6.435-4.95 1.553 1.553c0.188 0.188 0.44 0.292 0.707 0.292s0.519-0.104 0.707-0.292l0.293-0.293c0.29-0.29 0.5-0.797 0.5-1.207v-1c0-0.142 0.106-0.399 0.207-0.5l2.793-2.793c0.101-0.101 0.358-0.207 0.5-0.207h1c0.41 0 0.917-0.21 1.207-0.5l0.293-0.293c0.188-0.188 0.292-0.44 0.292-0.707s-0.104-0.519-0.292-0.707zM4.234 15.266l2.533-3.293 0.76 0.76-3.293 2.533zM17 7.793c-0.101 0.101-0.358 0.207-0.5 0.207h-1c-0.41 0-0.917 0.21-1.207 0.5l-2.793 2.793c-0.29 0.29-0.5 0.797-0.5 1.207v1c0 0.142-0.106 0.399-0.207 0.5l-0.292 0.292c-0 0-0.001 0-0.001 0v0.001l-5.293-5.293 0.293-0.293c0.101-0.101 0.358-0.207 0.5-0.207h1c0.41 0 0.917-0.21 1.207-0.5l2.793-2.793c0.29-0.29 0.5-0.797 0.5-1.207v-1c0-0.142 0.106-0.399 0.207-0.5l0.293-0.293 5.293 5.293-0.293 0.293z" />
    </Lini>
  );
}

LiniPushpin.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
