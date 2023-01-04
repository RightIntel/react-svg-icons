import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniSpades(props = {}) {
  props.name = "Spades";
  
  return (
    <Lini {...props}>
      <path d="M13.5 20h-8c-0.232 0-0.433-0.159-0.487-0.385s0.056-0.458 0.263-0.562c1.117-0.559 1.914-1.432 2.368-2.595 0.037-0.094 0.069-0.186 0.099-0.276-0.805 0.529-1.753 0.818-2.744 0.818-2.757 0-5-2.243-5-5 0-1.392 0.523-2.641 1.598-3.819 0.915-1.002 2.116-1.835 3.278-2.641 2.121-1.471 4.124-2.861 4.124-5.040 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 2.179 2.003 3.569 4.124 5.040 1.162 0.806 2.363 1.639 3.278 2.641 1.075 1.177 1.598 2.426 1.598 3.819 0 2.757-2.243 5-5 5-0.991 0-1.939-0.289-2.744-0.818 0.029 0.090 0.062 0.182 0.099 0.276 0.454 1.163 1.251 2.037 2.368 2.595 0.207 0.104 0.316 0.336 0.263 0.562s-0.255 0.385-0.487 0.385zM7.101 19h4.798c-0.654-0.604-1.16-1.353-1.491-2.22-0.403-1.055-0.408-1.916-0.408-1.952 0-0.212 0.133-0.401 0.333-0.471s0.422-0.008 0.556 0.157c0.764 0.944 1.898 1.486 3.112 1.486 2.206 0 4-1.794 4-4 0-2.554-2.159-4.052-4.446-5.638-1.607-1.115-3.253-2.257-4.054-3.811-0.802 1.555-2.448 2.697-4.054 3.811-2.286 1.586-4.446 3.084-4.446 5.638 0 2.206 1.794 4 4 4 1.213 0 2.347-0.542 3.112-1.486 0.133-0.165 0.356-0.228 0.556-0.157s0.333 0.26 0.333 0.471c0 0.036-0.005 0.897-0.408 1.952-0.331 0.866-0.837 1.616-1.491 2.22z" />
    </Lini>
  );
}

LiniSpades.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
