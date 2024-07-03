import PropTypes from "prop-types";
import Footer from "./Footer";

const CTA = ({ className = "" }) => {
  return (
    <div className="space-y-64">
      <section
        className={`h-[387px] w-[1357px] rounded-xs-7 bg-darkslateblue overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[46px] pb-[67.8px] pr-[129px] pl-[596px] box-border gap-[102.3px] opacity-[0.86] max-w-full text-left text-18xl-5 text-background-default font-dm-sans lg:pl-[298px] lg:pr-16 lg:box-border mq450:h-auto mq450:gap-[26px] mq450:pl-5 mq450:box-border mq750:gap-[51px] mq750:pt-[30px] mq750:pb-11 mq750:pr-8 mq750:pl-[149px] mq750:box-border ${className}`}
      >
        <div className="ml-[-776px] w-[673.7px] flex flex-col items-start justify-start max-w-[107%] shrink-0">
          <img
            className="w-[557.5px] relative max-h-full object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/shapes-00002@2x.png"
          />
        </div>
        <div className="w-[306.7px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border shrink-0">
          <div className="self-stretch h-[245.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[57.3px] box-border gap-[28.1px] mq450:h-auto">
            <div className="self-stretch flex flex-col items-start justify-start gap-[18.7px] shrink-0">
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-[9.4px] shrink-0">
                <div className="w-[351.1px] flex flex-col items-start justify-start max-w-[115%] shrink-0">
                  <div className="self-stretch relative tracking-[-0.03em] leading-[110%] font-medium mq450:text-3xl mq450:leading-[25px] mq1050:text-11xl mq1050:leading-[33px]">
                    <p className="m-0">One app.</p>
                    <p className="m-0">One banking.</p>
                  </div>
                </div>
                <div className="self-stretch relative text-2xs-5 leading-[180%] font-medium font-text-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[37.5px] text-3xs-4 font-text-small mq450:flex-wrap mq450:gap-[19px]">
                <div className="flex flex-col items-start justify-start gap-[9.4px]">
                  <div className="flex flex-row items-center justify-start gap-[9.4px]">
                    <div className="h-[15.2px] w-[15.2px] rounded-[58.52px] bg-gray-200 flex flex-row items-center justify-center pt-[2.3px] px-0.5 pb-[2.4px] box-border">
                      <img
                        className="h-[10.5px] w-[10.5px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/richeckfill.svg"
                      />
                    </div>
                    <div className="relative leading-[160%] font-medium inline-block min-w-[90px]">
                      Instant transactions
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8.4px]">
                    <div className="h-[15.2px] w-[15.2px] rounded-[58.52px] bg-gray-200 flex flex-row items-center justify-center pt-[2.3px] px-0.5 pb-[2.4px] box-border">
                      <img
                        className="h-[10.5px] w-[10.5px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/richeckfill.svg"
                      />
                    </div>
                    <div className="relative leading-[160%] font-medium inline-block min-w-[75px]">
                      Saving accounts
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[9.4px]">
                  <div className="flex flex-row items-center justify-start gap-[9.4px]">
                    <div className="h-[15.2px] w-[15.2px] rounded-[58.52px] bg-gray-200 flex flex-row items-center justify-center pt-[2.3px] px-0.5 pb-[2.4px] box-border">
                      <img
                        className="h-[10.5px] w-[10.5px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/richeckfill.svg"
                      />
                    </div>
                    <div className="relative leading-[160%] font-medium inline-block min-w-[94px]">
                      Payments worldwide
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8.4px]">
                    <div className="h-[15.2px] w-[15.2px] rounded-[58.52px] bg-gray-200 flex flex-row items-center justify-center pt-[2.3px] px-0.5 pb-[2.4px] box-border">
                      <img
                        className="h-[10.5px] w-[10.5px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/richeckfill.svg"
                      />
                    </div>
                    <div className="relative leading-[160%] font-medium inline-block min-w-[96px]">
                      100% mobile banking
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[9.4px] shrink-0">
              <img
                className="self-stretch w-[87.2px] relative max-h-full overflow-hidden shrink-0 min-h-[29px]"
                loading="lazy"
                alt=""
                src="/apple-store.svg"
              />
              <img
                className="self-stretch w-[98.8px] relative max-h-full overflow-hidden shrink-0 min-h-[29px]"
                loading="lazy"
                alt=""
                src="/google-store.svg"
              />
            </div>
          </div>
        </div>
        <div className="h-[273.2px] w-[222.4px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border shrink-0 text-base text-border-primary font-text-small">
          <div className="self-stretch rounded-[29.26px] bg-background-default overflow-hidden flex flex-col items-start justify-start pt-[21px] px-0 pb-[0.1px] border-[5.9px] border-solid border-border-primary">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
              <div className="flex-1 flex flex-col items-start justify-start gap-[18.7px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[13.4px] shrink-0">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0.1px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                      <h1 className="m-0 self-stretch h-[15px] relative text-inherit leading-[160%] font-medium font-inherit inline-block whitespace-nowrap">
                        Current balance
                      </h1>
                    </div>
                    <div className="w-[78px] relative text-9xl tracking-[-0.03em] leading-[20px] font-medium font-dm-sans inline-block whitespace-nowrap mq450:text-3xl mq450:leading-[27px]">
                      $ 4.658,50
                    </div>
                  </div>
                  <div className="self-stretch rounded-[5.44px] flex flex-col items-center justify-start pt-[14.5px] px-3.5 pb-[14.6px] bg-[url('/public/card@3x.png')] bg-cover bg-no-repeat bg-[top] text-xs-6 text-background-default font-dm-sans">
                    <div className="self-stretch h-[79.8px] flex flex-col items-center justify-between pt-0 px-0 pb-0 box-border mq450:h-[79.8px]">
                      <div className="self-stretch flex flex-row items-start justify-between py-0 px-px gap-[20px]">
                        <b className="relative tracking-[-0.03em] leading-[12px] inline-block min-w-[51px]">
                          banquee.
                        </b>
                        <img
                          className="h-[11.6px] w-[11.6px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/card-paypass.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[11.6px] text-8xs-4 text-gray-300 font-text-small">
                        <img
                          className="self-stretch h-[8.7px] relative max-w-full overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/card-number.svg"
                        />
                        <div className="self-stretch flex flex-row items-center justify-between py-[1.8px] px-0 gap-[20px]">
                          <div className="flex flex-row items-start justify-start py-0 px-0 gap-[17.4px]">
                            <div className="flex flex-col items-start justify-start gap-[1.5px]">
                              <div className="relative leading-[120%] font-medium inline-block min-w-[26px]">
                                Card Holder
                              </div>
                              <div className="relative text-6xs-5 leading-[8px] font-medium text-background-default inline-block min-w-[30px]">
                                John Doe
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[1.5px]">
                              <div className="relative leading-[120%] font-medium inline-block min-w-[24px] whitespace-nowrap">
                                Expiry Date
                              </div>
                              <div className="relative text-6xs-5 leading-[8px] font-medium text-background-default inline-block min-w-[19px]">
                                09/28
                              </div>
                            </div>
                          </div>
                          <img
                            className="h-[9.1px] w-[29.5px] relative"
                            loading="lazy"
                            alt=""
                            src="/card-visa.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-0 gap-[9.4px] text-sm">
                    <div className="flex flex-row items-center justify-start gap-[4.7px]">
                      <div className="h-[23.4px] w-[23.4px] rounded-[58.52px] bg-whitesmoke-200 flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.2px] box-border">
                        <img
                          className="h-[12.9px] w-[12.9px] relative"
                          loading="lazy"
                          alt=""
                          src="/riusershared2line.svg"
                        />
                      </div>
                      <h1 className="m-0 h-[13px] w-[49px] relative text-inherit leading-[160%] font-medium font-inherit inline-block">
                        Send Money
                      </h1>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4.7px]">
                      <div className="h-[23.4px] w-[23.4px] rounded-[58.52px] bg-whitesmoke-200 flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.2px] box-border">
                        <img
                          className="h-[12.9px] w-[12.9px] relative"
                          loading="lazy"
                          alt=""
                          src="/riuserreceived2line.svg"
                        />
                      </div>
                      <h1 className="m-0 h-[13px] w-[60px] relative text-inherit leading-[160%] font-medium font-inherit inline-block">
                        Receive Money
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9.4px] shrink-0 text-lg font-dm-sans">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <h1 className="m-0 w-[61px] relative text-inherit tracking-[-0.03em] leading-[15px] font-medium font-inherit inline-block whitespace-nowrap">
                      Transactions
                    </h1>
                    <div className="flex flex-row items-center justify-start gap-[2.3px] text-3xs-4 text-text-primary">
                      <div className="relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[32px]">
                        View all
                      </div>
                      <img
                        className="h-[11.7px] w-[11.7px] relative object-contain min-h-[12px]"
                        loading="lazy"
                        alt=""
                        src="/riarrowdownline@2x.png"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5.9px] text-3xs-4">
                    <div className="self-stretch rounded-[5.85px] bg-background-muted flex flex-row items-center justify-start py-[7px] pr-[9px] pl-[7px] gap-[9.4px]">
                      <div className="w-[23.4px] rounded-[3.51px] bg-text-primary flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.2px] box-border">
                        <img
                          className="h-[12.9px] w-[12.9px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/riapplefill.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[-0.03em] leading-[140%] font-medium">
                          Apple
                        </div>
                        <div className="self-stretch relative text-6xs leading-[160%] font-medium font-text-small">
                          Electronic
                        </div>
                      </div>
                      <div className="relative tracking-[-0.03em] leading-[140%] font-medium inline-block min-w-[26px]">
                        -799$
                      </div>
                    </div>
                    <div className="self-stretch rounded-[5.85px] bg-background-muted flex flex-row items-center justify-start py-[7px] pr-[9px] pl-[7px] gap-[9.4px]">
                      <div className="w-[23.4px] rounded-[3.51px] bg-text-primary flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.2px] box-border">
                        <img
                          className="h-[12.9px] w-[12.9px] relative"
                          loading="lazy"
                          alt=""
                          src="/rigooglefill.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[-0.03em] leading-[140%] font-medium">
                          Google Play Store
                        </div>
                        <div className="self-stretch relative text-6xs leading-[160%] font-medium font-text-small">
                          Apps
                        </div>
                      </div>
                      <div className="relative tracking-[-0.03em] leading-[140%] font-medium inline-block min-w-[22px]">
                        -49$
                      </div>
                    </div>
                    <div className="self-stretch rounded-[5.85px] bg-background-muted flex flex-row items-center justify-start py-[7px] pr-[9px] pl-[7px] gap-[8.9px]">
                      <div className="w-[23.4px] rounded-[3.51px] bg-text-primary flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.2px] box-border">
                        <img
                          className="h-[12.9px] w-[12.9px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/riamazonfill.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch h-[13px] relative tracking-[-0.03em] leading-[140%] font-medium inline-block">
                          Amazon
                        </div>
                        <div className="self-stretch h-[11px] relative text-6xs leading-[160%] font-medium font-text-small inline-block">
                          Shopping
                        </div>
                      </div>
                      <div className="h-[13px] w-[22px] relative tracking-[-0.03em] leading-[140%] font-medium inline-block">
                        -59$
                      </div>
                    </div>
                    <div className="self-stretch rounded-[5.85px] bg-background-muted flex flex-row items-center justify-start py-[7px] pr-[9px] pl-[7px] gap-[9.4px]">
                      <div className="w-[23.4px] rounded-[3.51px] bg-text-primary flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.2px] box-border">
                        <img
                          className="h-[12.9px] w-[12.9px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/ritwitterfill.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch h-[13px] relative tracking-[-0.03em] leading-[140%] font-medium inline-block">
                          Twitter
                        </div>
                        <div className="self-stretch h-[11px] relative text-6xs leading-[160%] font-medium font-text-small inline-block">
                          Ads
                        </div>
                      </div>
                      <div className="h-[13px] w-4 relative tracking-[-0.03em] leading-[140%] font-medium inline-block">
                        -9$
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-background-default flex flex-col items-center justify-start pt-[11.7px] px-6 pb-[17.6px] text-6xs">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="w-5 flex flex-col items-center justify-start gap-[2.3px] text-text-primary">
                  <img
                    className="w-[12.9px] h-[12.9px] relative"
                    loading="lazy"
                    alt=""
                    src="/rihomeline.svg"
                  />
                  <div className="self-stretch h-[11px] relative leading-[160%] font-medium inline-block">
                    Home
                  </div>
                </div>
                <div className="w-[27px] flex flex-col items-center justify-start gap-[2.3px]">
                  <img
                    className="w-[12.9px] h-[12.9px] relative"
                    loading="lazy"
                    alt=""
                    src="/rimoneydollarcircleline.svg"
                  />
                  <div className="self-stretch h-[11px] relative leading-[160%] font-medium inline-block">
                    Savings
                  </div>
                </div>
                <div className="w-5 flex flex-col items-center justify-start gap-[2.3px]">
                  <img
                    className="w-[12.9px] h-[12.9px] relative"
                    loading="lazy"
                    alt=""
                    src="/ribankcard2line.svg"
                  />
                  <div className="self-stretch h-[11px] relative leading-[160%] font-medium inline-block">
                    Cards
                  </div>
                </div>
                <div className="w-[29px] flex flex-col items-center justify-start gap-[2.3px]">
                  <img
                    className="w-[12.9px] h-[12.9px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/riuser3line.svg"
                  />
                  <div className="self-stretch h-[11px] relative leading-[160%] font-medium inline-block">
                    Account
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

CTA.propTypes = {
  className: PropTypes.string,
};

export default CTA;
