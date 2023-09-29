import {Card} from "@tremor/react";
import {Divider} from "antd";
import {resources} from "../../../assets/resources.ts";
import {GoArrowSwitch} from "react-icons/go";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store.ts";


export default function BitInfoCard(){

    const buyAmount = useSelector((state:RootState)=>state.app.buyAmount) || 0;

    return(
        <Card className="bitInfoCard justify-center p-4 lg:p-12 items-center">
            <div className="justify-center items-center">
                <p className="text-center text-gray-400">You are Buying</p>
                <p className="text-center text-[28px] font-semibold">{buyAmount} satoshi</p>
            </div>
            <Divider/>
            <div className="grid px-8 grid-cols-3 justify-items-center ">

                <div className="centerRowDiv">
                    <img src={resources.bitcoin} className="h-8 w-8" alt="bitcoin"/>
                </div>
                <div className="centerRowDiv"><GoArrowSwitch className="h-8 w-8"/></div>
                <div className="centerRowDiv"><img alt="rand" src={resources.rand} className="h-8 w-8"/></div>
            </div>
            <Divider className="mb-12"/>
            <div className="mb-8 text-gray-500">
                <div className="flex mb-2  justify-between">
                    <p>Fee</p>
                    <span className=" border-b-[2px] border-dotted mx-2 mb-1 w-full  "></span>
                    <p>R180</p>
                </div>

                <div className="flex mb-2 justify-between">
                    <p>Subtotal</p>
                    <span className=" border-b-[2px] border-dotted mx-2 mb-1 w-full  "></span>
                    <p>R180</p>
                </div>

                <div className="flex  justify-between">
                    <p>Total</p>
                    <span className=" border-b-[2px] border-dotted mx-2 mb-1 w-full  "></span>
                    <p>R180</p>
                </div>
            </div>

        </Card>

    );
}