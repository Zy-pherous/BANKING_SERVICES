import PropTypes from "prop-types";

const Saly1Icon = ({ className = "" }) => {
  return (
    <img
      className={`h-full w-full z-[2] object-contain absolute left-[8px] top-[5px] [transform:scale(1.101)] ${className}`}
      alt=""
      src="/saly1@2x.png"
    />
  );
};

Saly1Icon.propTypes = {
  className: PropTypes.string,
};

export default Saly1Icon;
