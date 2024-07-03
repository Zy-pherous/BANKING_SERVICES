import Saly21Icon from "../components/Saly21Icon";

const Root = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-13xl-1 text-background-default font-text-small">
      <div className="flex-1 bg-gray-100 flex flex-col items-start justify-start pt-[26px] px-[45px] pb-[107px] box-border relative gap-[130px] max-w-full lg:gap-[65px] lg:pl-[22px] lg:pr-[22px] lg:box-border mq450:gap-[16px] mq450:pb-[45px] mq450:box-border mq750:gap-[32px] mq1050:pt-5 mq1050:pb-[70px] mq1050:box-border">
        <Saly21Icon />
        <div className="w-[1110px] flex flex-row items-start justify-start py-0 px-[51px] box-border max-w-full lg:pl-[25px] lg:pr-[25px] lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[233px] w-[370px] absolute !m-[0] bottom-[-316.43px] left-[-342px] bg-navy [transform:_rotate(-60deg)] [transform-origin:0_0]" />
            <div className="h-[647px] flex-1 relative leading-[160%] font-light inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[1] mq450:text-19xl mq450:leading-[61px] mq1050:text-[51px] mq1050:leading-[82px]">
              <p className="[margin-block-start:0] [margin-block-end:5px] text-[64px]">{`Welcome to SecureBank: `}</p>
              <p className="[margin-block-start:0] [margin-block-end:5px]">
                &nbsp;
              </p>
              <p className="[margin-block-start:0] [margin-block-end:5px]">
                &nbsp;
              </p>
              <p className="[margin-block-start:0] [margin-block-end:5px]">
                Your Trusted Partner in Financial Services.
              </p>
              <p className="[margin-block-start:0] [margin-block-end:5px]">
                At SecureBank, we are committed to delivering
              </p>
              <p className="[margin-block-start:0] [margin-block-end:5px]">
                {" "}
                unparalleled financial solutions tailored to meet
              </p>
              <p className="m-0"> your needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
