import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniHammer(props = {}) {
  props.name = "Hammer";
  
  return (
    <Lini {...props}>
      <path d="M18.596 14.457l-9.52-8.655c-0.095-0.086-0.148-0.201-0.151-0.325s0.045-0.241 0.136-0.332l2.293-2.293c0.143-0.143 0.186-0.358 0.108-0.545s-0.26-0.309-0.462-0.309c-0.041 0-1.027 0.001-2.092 0.063-2.034 0.12-2.53 0.351-2.762 0.583l-3.5 3.5c-0.094 0.094-0.146 0.221-0.146 0.354v0.5h-0.5c-0.133 0-0.26 0.053-0.354 0.146l-1 1c-0.195 0.195-0.195 0.512 0 0.707l2 2c0.195 0.195 0.512 0.195 0.707 0l1-1c0.094-0.094 0.146-0.221 0.146-0.354v-0.5h0.5c0.133 0 0.26-0.053 0.354-0.146l0.793-0.793c0.088-0.088 0.202-0.136 0.321-0.136 0.127 0 0.246 0.054 0.335 0.151l8.655 9.52c0.277 0.304 0.669 0.479 1.075 0.479 0.387 0 0.752-0.152 1.028-0.429l1.086-1.086c0.286-0.286 0.438-0.663 0.428-1.062s-0.179-0.769-0.478-1.041zM6.467 6.925c-0.387 0-0.752 0.152-1.028 0.429l-0.646 0.646h-0.793c-0.276 0-0.5 0.224-0.5 0.5v0.793l-0.5 0.5-1.293-1.293 0.5-0.5h0.793c0.276 0 0.5-0.224 0.5-0.5v-0.793l3.34-3.34c0.063-0.036 0.46-0.213 2.223-0.311 0.244-0.014 0.483-0.024 0.706-0.032l-1.415 1.415c-0.286 0.286-0.438 0.663-0.428 1.062s0.179 0.769 0.478 1.041l0.872 0.793-0.94 0.94-0.793-0.872c-0.277-0.304-0.669-0.479-1.075-0.479zM17.939 15.854l-1.086 1.086c-0.088 0.088-0.202 0.136-0.321 0.136-0.127 0-0.246-0.054-0.335-0.151l-7.188-7.907 1.008-1.008 7.907 7.188c0.095 0.086 0.148 0.201 0.151 0.325s-0.045 0.241-0.136 0.332z" />
    </Lini>
  );
}

LiniHammer.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
