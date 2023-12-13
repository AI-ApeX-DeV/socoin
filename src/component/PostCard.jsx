import { Context } from "../context/ContextProvider";
import React, { useState, useContext, useEffect } from "react";



const PostCard = () => {
  const {checkIfWalletIsConnected,ConnectWallet, currentAccount, isNewUser ,createUser,createPost,likePost,getUserData,userPost} =
    useContext(Context);
  const [likess, setLikess] = useState(477);

  return (
    <div className="flex items-center justify-center">
      <div className=" flex mt-4 h-[33.635rem] w-[36.188rem] hover:bg-[#3B3939]  rounded-lg transition-all duration-700 ease-in-out ">
        <div className="flex-col min-w-[31.938rem]">
          <div className="relative p-4 m-4 w-full h-[2.25rem] text-left text-[1rem] text-white font-inter">
            <div className="absolute top-[0.56rem] left-[2.75rem] font-medium">
              Amit Sinha
            </div>
            <div className="absolute top-[0.56rem] left-[8.25rem] text-[0.88rem] text-colours-gray-500">
              @amitsinha.dso
            </div>
            <img
              alt="s"
              src="https://cdn.discordapp.com/attachments/1177493315898314792/1184072438695338046/image.png?ex=658aa464&is=65782f64&hm=633b38526fb6b6da794465b600fb96b51339200700063e89bf541465c40aec95&"
              className="absolute top-[0rem] left-[0rem] rounded-[69px] bg-white w-[2.25rem] h-[2.25rem] overflow-hidden"
            />
          </div>
          <div className="relative text-[0.88rem] font-inter text-white text-left bottom-6 left-[1.7rem] mt-9">
            Tried these thumbnails with a sporty aesthetic
          </div>
        <div className="h-[25.2rem] w-[28.388rem] relative left-6 bottom-3 ">
            <img className="object-fill h-full w-full" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184102145243492413/image.png?ex=658ac00e&is=65784b0e&hm=51289aecb3eafd78c0430b1b08626acc15b2721e93685435e0585c392c9ccd1e&" alt="" />

        </div>
        </div>

        <div className="relative w-full flex flex-col items-start justify-start gap-[2.31rem] top-6 right-2">
<img className="relative rounded-16xl w-[3.25rem] h-[3.25rem] overflow-hidden shrink-0" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184073513712238652/image.png?ex=658aa564&is=65783064&hm=9a2d01e125d34e2b059be14b2801a8664f4f64f0186ebc4bffc04d60157d8eb0&" />
<img  onClick={async()=>{
              await likePost('postId');

              alert('2 Tokens deducted from your account');
              setLikess(likess+1);


            }} className="relative rounded-16xl w-[3.25rem] h-[3.25rem] overflow-hidden shrink-0" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184073624966148096/image.png?ex=658aa57f&is=6578307f&hm=bd092fc2643aaf8cd2c5fc0a8455c9ff96626caec4fb4e831d00385529af1179&" />
<img className="relative rounded-16xl w-[3.25rem] h-[3.25rem] overflow-hidden shrink-0" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184073701864509470/image.png?ex=658aa591&is=65783091&hm=5200cf8850db9ca96a4138b7dd7b371423ce96da44a53ad308363712b5b0f156&" />
<img className="relative rounded-16xl w-[3.25rem] h-[3.25rem] overflow-hidden shrink-0" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184073740812812328/image.png?ex=658aa59a&is=6578309a&hm=c6ccf3bf96f0c8d028967dcd26daecc00e88580766cab2cc298554b879b03a6f&" />
<img className="relative rounded-16xl w-[3.25rem] h-[3.25rem] overflow-hidden shrink-0" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184073770743365662/image.png?ex=658aa5a1&is=657830a1&hm=b100667b4a32067d07093eae4d24a1e79af8b7e66502693c5f9d84ebd7a8dff1&" />
<img className="relative rounded-16xl w-[3.25rem] h-[3.25rem] overflow-hidden shrink-0" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184073823969083442/image.png?ex=658aa5ae&is=657830ae&hm=f859cf2f5c0265673b3b096dfb579abba18bf5ec706a07e3a22003d565b8d637&" />

</div>
      </div>
    </div>
  );
};

export default PostCard;