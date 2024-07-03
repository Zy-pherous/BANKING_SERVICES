import PropTypes from "prop-types";

const Saly21Icon = ({ className = "" }) => {
  return (
    <img
      className={`w-[1481.8px] h-[1373.9px] absolute !m-[0] top-[-175px] right-[-538.8px] object-contain ${className}`}
      alt=""
      src="/saly21@2x.png"
    />
  );
};

Saly21Icon.propTypes = {
  className: PropTypes.string,
};

export default Saly21Icon;
