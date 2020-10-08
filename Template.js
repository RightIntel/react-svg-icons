var React = require('react');
var PropTypes = require('prop-types');
function Lini__Name__({ size, ...props }) {
    var className = 'Component Lini Lini__Name__';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">__paths__</svg>
        </span>
    );
}
Lini__Name__.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string
};
module.exports = Lini__Name__;
