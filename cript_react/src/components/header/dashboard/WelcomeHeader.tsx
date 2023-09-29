import {useSelector} from "react-redux";

interface stateProps {
    user: {
        nickname: string
    }
}
export  default function WelcomeHeader(){

    const {nickname} = useSelector((state:stateProps)=>state.user);

    return (
        <div className="prim-bg row-end-1 p-8 text-white col-span-full">
            <p className="text-2xl font-thin">Welcome back, <span className="font-normal">{nickname}</span></p>
            <p className="font-thin text-sm">Check your transactions and manage all your activities here</p>
        </div>
    );
}