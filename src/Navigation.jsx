import Saly1Icon from "./components/Saly1Icon";
import PropTypes from "prop-types";

const Navigation = ({ className = "" }) => {
  return (
    <header
      className={`w-[1280px] h-[114px] flex flex-row items-end justify-between top-[0] z-[99] gap-[20px] max-w-full text-left text-13xl-1 text-background-default font-text-small mq1050:w-[707px] ${className}`}
      style={{ border: "none", margin: 0, padding: 0 }}
    >
      <div className="self-stretch w-[412px] flex flex-row items-start justify-start gap-[23px] max-w-full">
        <div className="h-[114px] w-[148px] relative z-[2] flex items-center justify-center">
          <Saly1Icon />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-11 px-0 pb-0">
          <div className="self-stretch flex flex-row items-start justify-start relative">
            <img
              className="h-[109px] w-[1268px] absolute !m-[0] top-[-41px] right-[-943px] z-[1]"
              alt=""
              src="/rectangle-1.svg"
            />
            <div className="h-[56.2px] flex-1 relative leading-[100%] inline-block z-[2]">
              FIRST_BANK
            </div>
          </div>
        </div>
      </div>
      <nav className="m-0 w-[573px] flex flex-col items-start justify-end pt-0 px-0 pb-[38px] box-border max-w-full mq450:w-0 mq1050:hidden">
        <nav className="m-0 self-stretch flex flex-row items-start justify-start text-left text-13xl-1 text-background-default font-text-small mq450:hidden">
          <div className="flex flex-row items-center">
            <div className="w-[181px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
              <a
                href="#home"
                className="w-[130px] relative bg-transparent text-white font-sans text-5xl leading-[100%] hover:cursor-pointer inline-block z-[2]"
              >
                Home
              </a>
            </div>
            <div className="space-x-5">
              <a
                href="#about"
                className="flex-1 relative bg-transparent text-white font-sans text-5xl leading-[100%] hover:cursor-pointer whitespace-nowrap z-[2]"
              >
                About Us
              </a>
              <a
                href="#blogs"
                className="w-[164px] relative leading-[100%] bg-transparent text-white font-sans text-5xl hover:cursor-pointer inline-block shrink-0 z-[2]"
              >
                Blogs
              </a>
              <a
                href="#bottom"
                className="flex-1 relative bg-transparent text-white font-sans text-5xl leading-[100%] hover:cursor-pointer whitespace-nowrap z-[2]"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};

export default Navigation;
