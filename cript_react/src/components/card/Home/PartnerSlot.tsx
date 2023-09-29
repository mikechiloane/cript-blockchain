import {resources} from "../../../assets/resources.ts";
import {Divider} from "antd";


export default function PartnerSlot (){

    return (
        <section className="py-20 opacity-20">
            <Divider className="bg-white" />
            <div className="flex opacity-50 justify-center lg:justify-between flex-wrap">
                {
                    resources.partners.map(
                        (logo,index)=>(
                            <div key={index} className="flex  justify-center items-center">
                                <img className=" h-[30px] pt-1 px-2" src={logo} alt={index.toString()}/>
                            </div>
                        )
                    )
                }
            </div>
            <Divider className="bg-white " />

        </section>
    );
}