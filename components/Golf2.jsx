import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniGolf2(props = {}) {
  props.name = "Golf2";
  
  return (
    <Lini {...props}>
      <path d="M17.5 9c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM17.5 5c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z" />
      <path d="M6.5 17c-0.899 0-1.751-0.238-2.399-0.67-0.71-0.473-1.101-1.123-1.101-1.83 0-0.755 0.46-1.459 1.262-1.931 0.238-0.14 0.544-0.061 0.684 0.177s0.061 0.544-0.177 0.684c-0.489 0.288-0.769 0.677-0.769 1.069 0 0.813 1.145 1.5 2.5 1.5s2.5-0.687 2.5-1.5c0-0.392-0.28-0.782-0.769-1.069-0.238-0.14-0.317-0.446-0.177-0.684s0.447-0.317 0.684-0.177c0.802 0.472 1.262 1.176 1.262 1.931 0 0.707-0.391 1.357-1.101 1.83-0.648 0.432-1.5 0.67-2.399 0.67z" />
      <path d="M6.5 15c-0.276 0-0.5-0.224-0.5-0.5v-7.989c-0-0.007-0-0.014 0-0.021v-5.99c0-0.173 0.090-0.334 0.237-0.425s0.331-0.099 0.486-0.022l6 3c0.169 0.085 0.276 0.258 0.276 0.447s-0.107 0.363-0.276 0.447l-5.724 2.862v7.691c0 0.276-0.224 0.5-0.5 0.5zM7 1.309v4.382l4.382-2.191-4.382-2.191z" />
      <path d="M9 20c-2.358 0-4.583-0.545-6.264-1.533-1.764-1.038-2.736-2.447-2.736-3.967 0-1.954 1.618-3.715 4.327-4.712 0.259-0.095 0.547 0.037 0.642 0.297s-0.038 0.547-0.297 0.642c-1.13 0.416-2.068 0.989-2.713 1.659-0.628 0.652-0.959 1.383-0.959 2.114 0 1.151 0.797 2.254 2.243 3.105 1.53 0.9 3.574 1.395 5.757 1.395s4.227-0.496 5.757-1.395c1.447-0.851 2.243-1.953 2.243-3.105s-0.797-2.254-2.243-3.105c-1.53-0.9-3.574-1.395-5.757-1.395-0.161 0-0.323 0.003-0.483 0.008-0.276 0.010-0.507-0.207-0.517-0.483s0.207-0.507 0.483-0.517c0.171-0.006 0.345-0.009 0.517-0.009 2.358 0 4.583 0.545 6.264 1.533 1.764 1.038 2.736 2.447 2.736 3.967s-0.972 2.929-2.736 3.967c-1.681 0.989-3.906 1.533-6.264 1.533z" />
    </Lini>
  );
}

LiniGolf2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
