import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { postData,getData } from "../FetchNodeServices";

export const LoginStudent = () => {
  const [signoption, setSignoption] = useState(true);
  const [remMe, setRemme] = useState(false);
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const ShowLogin = () => {
    setSignoption(true);
  };
  const ShowSign = () => {
    setSignoption(false);
  };
  const RemMe = (event) => {
    setRemme(event.target.checked);
  };
  const Login= async()=>{
    alert(email)
    alert(password)
      var formdata =new FormData()
      formdata.append("email", email);
      formdata.append("password", password)
      var response = await postData("login/checklogin", formdata);
    alert(response.status);
  }
  const handleEmail=(event)=>{
     setEmail(event.target.value)
    
  }
  return (
    <div className=" bg-white-900 flex">
      <div className="w-2/5 p-6 ">
        <div className="flex ">
         
          <p className="m-3 text-xl font-bold font-mono">Women Wise Up</p>
        </div>
        <div
          className={
            signoption ? "mt-12 bg-green-100 p-11 rounded-lg shadow-xl" : "hidden "
          }
        >
          <div className="text-5xl font-bold mb-8 text-center text-zinc-600	">
            Login
          </div>
          <div className=" mb-4 text-center px-12">
            {" "}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              onChange={handleEmail}
            />
          </div>
          <div className=" mb-4 text-center px-12">
            {" "}
            <TextField
              id="standard"
              label="Password"
              variant="standard"
              fullWidth
              onChange={(event)=>{setPassword(event.target.value)}}
            />
          </div>
          <div className="mb-4 flex px-12 justify-between">
            <FormControlLabel
              control={<Checkbox color="success" onChange={RemMe} />}
              label="Rememeber Me"
            />
           
            <div className="font-semibold flex justify-center items-center">Forgot Password?</div>
          </div>
          
          <div className="w-full flex justify-between px-6">
            <button className="bg-green-500 w-full h-9 text-lg rounded-lg text-white font-bold shadow-xl " onClick={Login}>
              Login
            </button>
          </div>
          <div className="w-full  mt-7 flex justify-center px-6 ">  <button className="bg-green-500 w-6/12 h-9 text-lg rounded-lg text-white font-bold shadow-xl " onClick={ShowSign}>
              Create Account
            </button></div>
        </div>
        <div className={signoption ? "hidden" : "mt-12 bg-green-100 p-11 rounded-lg shadow-xl"}>
        <div className="text-5xl font-bold mb-8 text-center text-zinc-600	">
            Create Account
          </div>
          <div className=" mb-4 text-center px-12">
            {" "}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className=" mb-4 text-center px-12">
            {" "}
            <TextField
              id="standard"
              label="Password"
              variant="standard"
              fullWidth
            />
          </div>
          <div className="mb-4 flex px-12 justify-between">
          <TextField
              id="standard"
              label=" Confirm Password"
              variant="standard"
              fullWidth
            />
          </div>
          
          <div className="w-full flex justify-between px-6">
            <button className="bg-green-500 w-full h-9 text-lg rounded-lg text-white font-bold shadow-xl ">
              Submit
            </button>
          </div>
          <div className="w-full  mt-7 flex justify-center px-6 ">  <p className="text-black cursor-pointer font-semibold"  onClick={ShowLogin}>
              Already have an Account?
            </p></div>
        </div>
      </div>

      <div className="w-3/5  h-screen p-7	">
        <div
          className="h-full rounded-xl "
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/happy-businesswoman-holding-folder_74855-5075.jpg?w=996&t=st=1676360053~exp=1676360653~hmac=0c0a443498fe67120d1b5d83d897f7349f3995d275f3e30578482b316c9f263d')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

