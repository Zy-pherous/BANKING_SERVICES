import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border min-w-[554px] max-w-full text-left text-21xl-7 text-background-default font-text-small mq750:min-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[26px] shrink-0 max-w-full">
        <div className="w-[499px] flex flex-col items-start justify-start pt-5 pb-0 pr-5 pl-[121px] box-border relative gap-[42px] max-w-full mq450:gap-[21px] mq450:pl-5 mq450:box-border">
          <img
            className="w-[561px] h-[166px] absolute !m-[0] top-[0px] left-[-116px]"
            alt=""
            src="/ellipse-2.svg"
          />
          <div className="w-[256.7px] relative leading-[66px] font-light inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[1] mq1050:text-14xl mq1050:leading-[52px] mq450:text-5xl mq450:leading-[39px]">
            About Us.....
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[22px] relative text-12xl-7 text-snow-100">
            <div className="relative leading-[51px] font-light z-[1] mq1050:text-6xl mq1050:leading-[41px] mq450:text-lgi mq450:leading-[30px]">
              Our Mission:
            </div>
            <img
              className="h-[51px] w-[38.3px] absolute !m-[0] bottom-[-6px] left-[-38px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/polygon-2.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full text-xl-6 text-snow-200">
          <div className="w-[694px] relative leading-[160%] font-light inline-block max-w-full box-border pl-5 mq450:text-base mq450:leading-[26px]">
            <p className="[margin-block-start:0] [margin-block-end:4.93px]">{`At FIRST Bank, our mission is to empower our customers by providing `}</p>
            <p className="[margin-block-start:0] [margin-block-end:4.93px]">{`innovative financial solutions that enhance their financial well-being `}</p>
            <p className="m-0">and future security.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
