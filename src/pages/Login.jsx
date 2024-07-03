import AccountAccess from "../components/AccountAccess";

const Login = () => {
  return (
    <div className="w-full relative rounded-3xl bg-mediumslateblue overflow-hidden flex flex-col items-start justify-start pt-[155px] pb-[698px] pr-5 pl-[730px] box-border gap-[7px] leading-[normal] tracking-[normal] text-left text-[80px] text-whitesmoke-100 font-poppins lg:pl-[365px] lg:box-border mq450:pl-5 mq450:box-border mq750:pl-[182px] mq750:box-border">
      <h1 className="m-0 relative text-inherit leading-[70px] inline-block max-w-full z-[4] font-inherit mq450:text-5xl mq450:leading-[28px] mq1050:text-[40px] mq1050:leading-[42px]">
        <p className="m-0">
          <b>{`Welcome to `}</b>
        </p>
        <p className="m-0">Banking portal</p>
      </h1>
      <div className="flex flex-row items-start justify-start py-0 px-[13px] text-base">
        <div className="relative font-medium z-[3]">
          Login to access your account
        </div>
      </div>
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute top-[-106px] left-[1038px] w-[503.9px] h-[448px]"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute top-[251px] left-[521px] w-[1567.3px] h-[1418px] object-contain z-[1]"
          alt=""
          src="/vector1.svg"
        />
        <img
          className="absolute top-[245px] left-[459px] w-[421.2px] h-[389px] z-[2]"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className="absolute top-[175px] left-[1263px] w-[217px] h-[200.4px] z-[2]"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="absolute top-[-120px] left-[831px] w-[406.7px] h-[402.8px] object-contain z-[3]"
          alt=""
          src="/vector-4.svg"
        />
        <img
          className="absolute top-[602px] left-[627px] w-[406.7px] h-[402.8px] object-contain z-[2]"
          alt=""
          src="/vector-5.svg"
        />
        <AccountAccess />
        <img
          className="absolute top-[252px] left-[670px] w-[837.3px] h-[628px] object-contain z-[5]"
          alt=""
          src="/110092401-copy-1@2x.png"
        />
      </main>
    </div>
  );
};

export default Login;
