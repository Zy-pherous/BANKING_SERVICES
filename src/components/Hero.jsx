import Content from "./Content";
import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-21xl-7 text-background-default font-text-small lg:flex-wrap ${className}`}
    >
      <Content />
      <div className="h-[291.7px] w-[588.1px] relative min-w-[588.1px] shrink-0 max-w-full lg:flex-1 mq750:min-w-full">
        <div className="absolute top-[105px] left-[259.1px] w-[339.5px] h-[186.7px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[-2px] top-[45px] [transform:scale(1.479)]"
            loading="lazy"
            alt=""
            src="/group-26.svg"
          />
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[386.2px] h-[155.5px] z-[1]"
          alt=""
          src="/polygon-3.svg"
        />
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
