import {resources} from "../../../assets/resources.ts";


export default function GridSlot() {
    return (
        <div className="flex flex-col gap-8 lg:flex-row-reverse items-center justify-center ">
            <div className=" max-w-[500px] space-y-4 flex-1 lg:space-y-8  items-center">
                <p className="text-white text-center lg:text-left font-bold text-4xl">{resources.gridSlotTitle}</p>
                <p className="text-white text-center lg:text-left font-thin">{resources.gridSlotSubtitle}</p>
            </div>
            <div className="flex-1 justify-start lg:items-start ">
                <img className="max-h-[450px]" src={resources.wallet} alt="wallet"/>
            </div>
        </div>
    );
}