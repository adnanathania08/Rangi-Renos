import React from "react";
import { SiContributorcovenant } from "react-icons/si";
import { SiBmcsoftware } from "react-icons/si";

const OurClientsComponent = () => {
  return (
    <>
      <div className="mainContainer main-container bg-white py-20 air:py-0 air:pt-12 air:pb-16 w-[100%] px-20 air:px-12 m480:px-8 text-center">
        <div
          className="empower pb-4 text-[] font-mons
           text-lg font-medium"
        >
          <p>Our Clients</p>
        </div>
        <div className="build">
          <h1 className="text-black text-5xl font-medium font-int leading-[1.2] md:text-4xl">
            <span className="text-[#7f7f7f]">We are Trusted 15+ &nbsp;</span>
            Countries Worldwide, Ensuring Excellence Everywhere
          </h1>
        </div>
        <div className="clientsInfo w-[100%] flex justify-around pt-14 air:flex-col air:space-y-12 ">
          <div className="left w-[45%] space-y-4 px-4 py-4 air:px-0 air:w-[100%] border-[2px] border-[#DCDBDB] rounded-lg">
            <div className="top flex flex-col items-center gap-5">
              <SiContributorcovenant className="w-8 h-8 air:w-8 air:h-8  text-[] text-xl rounded-lg flex items-center justify-center " />
              <div className="drkLt">
                <h2 className="text-lg font-int text-black font-semibold">
                  Moonkle LTD
                </h2>
                <p className="font-mons">Client of Company</p>
              </div>
            </div>
            <div className="bottom">
              <p className="font-mons">
                Patience. Infinite patience. No shortcuts. Very well thought out
                and articulate communication. Clear milestones, deadlines and
                fast work. Even if the client is being careless. The best
                part...always solving problems with great original ideas!.
              </p>
            </div>
          </div>
          <div className="right w-[45%] space-y-4 px-4 py-4 air:px-0 air:w-[100%] border-[2px] border-[#DCDBDB] rounded-lg">
            <div className="top flex flex-col items-center gap-5">
              <SiBmcsoftware className="w-8 h-8 air:w-8 air:h-8 text-[] text-xl rounded-lg flex items-center justify-center" />
              <div className="drkLt">
                <h2 className="text-lg font-int text-[#7f7f7f]800 font-semibold">
                  Soft Tech
                </h2>
                <p className="font-mons"> Manager of Company</p>
              </div>
            </div>
            <div className="bottom">
              <p className="font-mons">
                Very well thought out and articulate communication. Clear
                milestones, deadlines and fast work. Patience. Infinite
                patience. No shortcuts. Even if the client is being careless.
                The best part...always solving problems with great original
                ideas!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClientsComponent;
