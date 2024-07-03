const Blogs = () => {
  return (
    <div className="w-full h-[1024px] relative bg-gray-100 overflow-hidden leading-[normal] tracking-[normal] text-left text-8xl-3 text-background-default font-text-small">
      <div className="absolute top-[1px] left-[0px] w-[404px] h-[310px] text-[46.3px]">
        <div className="absolute h-full top-[0px] bottom-[0px] left-[-210px] max-h-full w-[614px] flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(2.29)]"
            loading="lazy"
            alt=""
            src="/polygon-4.svg"
          />
        </div>
        <div className="absolute top-[93px] left-[79px] leading-[75px] font-light inline-block w-[278px] h-[75px] z-[1] mq450:text-9xl mq450:leading-[44px] mq767:text-[37px] mq767:leading-[59px]">
          Blogs
        </div>
      </div>
      <div className="absolute top-[33px] left-[638px] w-[757px] h-[780px]">
        <div className="absolute top-[233px] left-[210px] [filter:blur(207px)] bg-lightgreen w-[358px] h-[325px]" />
        <img
          className="absolute top-[107px] left-[35px] w-[315px] h-[274px] object-contain z-[1]"
          alt=""
          src="/bank@2x.png"
        />
        <img
          className="absolute top-[111px] left-[295px] w-[204px] h-[184px] z-[2]"
          alt=""
          src="/rectangle-8.svg"
        />
        <img
          className="absolute top-[0px] left-[372px] w-[385px] h-[385px] overflow-hidden object-contain z-[3]"
          loading="lazy"
          alt=""
          src="/walletamico-1@2x.png"
        />
        <img
          className="absolute top-[342px] left-[0px] w-[431.2px] h-[416.3px] object-contain z-[4]"
          alt=""
          src="/group-64@2x.png"
        />
        <img
          className="absolute top-[505px] left-[447px] w-[275px] h-[275px] overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src="/plain-credit-cardpana-1.svg"
        />
      </div>
      <div className="absolute top-[318px] left-[97px] leading-[160%] font-light inline-block w-[590px] h-[110px] mq450:text-3xl mq450:leading-[35px]">
        <p className="[margin-block-start:0] [margin-block-end:7.81px]">
          1. Understanding Mortgage Basics:
        </p>
        <ul className="m-0 font-inherit text-lg-3 pl-6">
          <li>
            <span>
              Explain the concept of mortgages and different types of mortgage
              loans.
            </span>
          </li>
        </ul>
      </div>
      <div className="absolute top-[475px] left-[97px] leading-[160%] font-light inline-block w-[590px] h-[139px] z-[5] mq450:text-3xl mq450:leading-[35px]">
        <p className="[margin-block-start:0] [margin-block-end:7.81px]">
          2. Assessing Your Financial Readiness:
        </p>
        <ul className="m-0 font-inherit text-lg-3 pl-6">
          <li>
            <span>
              Provide tips on evaluating your financial situation and
              determining how much you can afford to borrow.
            </span>
          </li>
        </ul>
      </div>
      <div className="absolute top-[648px] left-[97px] leading-[160%] font-light inline-block w-[590px] h-[139px] mq450:text-3xl mq450:leading-[35px]">
        <p className="[margin-block-start:0] [margin-block-end:7.81px]">
          3.Creating an Investment Strategy:
        </p>
        <ul className="m-0 font-inherit text-lg-3 pl-6">
          <li>
            <span>
              Explain how to monitor investment performance and make adjustments
              as needed.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
