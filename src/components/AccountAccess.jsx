import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountAccess = ({ className = "" }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div
      className={`absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-gray-400 w-[630px] overflow-hidden z-[3] text-left text-base text-gray-900 font-poppins ${className}`}
    >
      <form onSubmit={handleSubmit}>
        <h1 className="m-0 absolute top-[314px] left-[128px] text-29xl font-bold font-inherit text-background-default z-[4] mq450:text-10xl mq1050:text-19xl">
          Login
        </h1>
        <div className="absolute top-[398px] left-[128px] font-medium text-gray-700 z-[4]">
          Enter your account details
        </div>
        <input
          className="absolute top-[470px] left-[128px] inline-block min-w-[382px] z-[4] placeholder-style"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="absolute top-[506px] left-[128px] box-border w-[382px] h-px z-[4] border-t-[1px] border-solid border-gray-800" />
        <input
          className="absolute top-[530px] left-[128px] inline-block min-w-[382px] z-[4] placeholder-style"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <img
          className="absolute top-[530px] left-[485px] w-6 h-6 overflow-hidden z-[4]"
          loading="lazy"
          alt=""
          src="/eyeslashfill.svg"
        />
        <div className="absolute top-[566px] left-[128px] box-border w-[382px] h-px z-[4] border-t-[1px] border-solid border-gray-800" />
        <div className="absolute top-[590px] left-[128px] z-[4]">
          Forgot Password?
        </div>
        <Button
          type="submit"
          className="absolute top-[662px] left-[128px] z-[4]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#043282",
            borderRadius: "12px",
            "&:hover": { background: "#043282" },
            width: 393,
            height: 48,
          }}
        >
          Login
        </Button>
        <div className="absolute top-[924px] left-[128px] z-[4]">
          Don’t have an account?
        </div>
        <Button
          className="absolute top-[912px] left-[386px] z-[4]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#333437",
            borderRadius: "8px",
            "&:hover": { background: "#333437" },
            width: 100,
            height: 48,
          }}
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

AccountAccess.propTypes = {
  className: PropTypes.string,
};

export default AccountAccess;
