import PropTypes from "prop-types";

const SecurityContent = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[44px] max-w-full text-right text-xl-6 text-snow-300 font-text-small mq750:gap-[22px] ${className}`}
    >
      <div className="w-[589px] relative leading-[160%] font-light inline-block max-w-full shrink-0 mq1050:text-6xl mq1050:leading-[40px] mq450:text-lgi mq450:leading-[30px]">
        <p className="[margin-block-start:0] [margin-block-end:4.93px] text-12xl-6">
          Committed to You: 
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4.93px]">
          &nbsp;
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4.93px]">
          We are dedicated to delivering exceptional customer service,
        </p>
        <p className="[margin-block-start:0] [margin-block-end:4.93px]">{` tailored financial advice, and transparent banking solutions `}</p>
        <p className="m-0">that prioritize your needs and aspirations.</p>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full shrink-0 text-10xl-6 text-background-default">
        <div className="w-[1088.1px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <div className="w-[656px] flex flex-row items-start justify-start gap-[21.7px] min-w-[656px] max-w-full mq750:flex-wrap mq1050:flex-1 mq1050:min-w-full">
            <div className="h-[54px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <img
                className="w-[38.3px] flex-1 relative max-h-full object-contain"
                loading="lazy"
                alt=""
                src="/polygon-2.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[31px] min-w-[387px] max-w-full mq750:gap-[15px] mq750:min-w-full">
              <div className="w-[308px] relative leading-[160%] font-light inline-block mq450:text-5xl mq450:leading-[38px]">
                Your Security Matters:
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[38px] text-left text-xl-6">
                <div className="relative leading-[160%] font-light mq450:text-base mq450:leading-[26px]">
                  <p className="[margin-block-start:0] [margin-block-end:4.93px]">
                    Ensuring your peace of mind, we employ rigorous security
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:4.93px]">
                    {" "}
                    measures and adhere to industry-leading standards to
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:4.93px]">{` safeguard your financial information `}</p>
                  <p className="m-0">and transactions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[314.7px] w-[327.1px] flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border min-w-[327.1px] max-w-full mq1050:flex-1">
            <div className="self-stretch flex-1 relative max-w-full max-h-full flex items-center justify-center">
              <img
                className="self-stretch flex-1 overflow-hidden object-contain absolute left-[-1px] top-[35px] w-full h-full [transform:scale(1.263)] mq1050:self-stretch mq1050:w-auto"
                loading="lazy"
                alt=""
                src="/group-23.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SecurityContent.propTypes = {
  className: PropTypes.string,
};

export default SecurityContent;
