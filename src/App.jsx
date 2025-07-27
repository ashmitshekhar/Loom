import React, { use, useEffect, useRef } from 'react'
import { ZIM } from "zego-zim-web";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


function App() {
  const zpref = useRef(null);
const userID = "user" + Math.floor(Math.random() * 10000); 
const userName = "Loom_" + userID;
const appID = 789639177;
const serverSecret = "f4818ba16b33db62846d757f64a727bf";
const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,null, userID, userName);
useEffect(() => {

  const zp = ZegoUIKitPrebuilt.create(TOKEN);
  zpref.current = zp;
zp.addPlugins({ ZIM });

}, [TOKEN]);

function invite(callType) {
   const targetUser = {
        userID: prompt("Enter the userID to invite:"),
        userName: prompt("Enter the userName to invite:") 
    };
   zpref.current.sendCallInvitation({
    callees: [targetUser],
    callType,
    timeout: 60, // Timeout duration (second). 60s by default, range from [1-600s].
   }).then((res) => {
    console.warn(res);
   })
   .catch((err) => {
   console.warn(err);
   });
}


  return (
    <div className='w-full h-screen bg-gradient-to-b from-[#1a2229] to-black flex items-center justify-center'>

      <div className='w-[500px] h-[400px] bg-[#0d1014] border-2 border-[#313030] flex flex-col items-center justify-center gap-[20px]'>
        
        <h2 className='text-[white] text-[20px] '><span className='text-blue-500'>User Name : </span>{userName}</h2>
        
        
        
        
        <h2 className='text-[white] text-[20px] '><span className='text-blue-500'>User ID : </span>{userID}</h2>



        <button className=' w-[200px] cursor-pointer h-[50px] rounded-4xl bg-white text-black text-[20px] ' onClick={()=> invite(ZegoUIKitPrebuilt.InvitationTypeVoiceCall) }>Voice Call</button>
        <button className=' w-[200px] cursor-pointer h-[50px] rounded-4xl bg-white text-black text-[20px]'  onClick={()=>invite(ZegoUIKitPrebuilt.InvitationTypeVideoCall )}>Video Call</button>

      </div>


      
    </div>
  )
}

export default App
