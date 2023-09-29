import WelcomeHeader from "../../components/header/dashboard/WelcomeHeader.tsx";
import BalanceCard from "../../components/card/dashboard/BalanceCard.tsx";
import MarketChart from "../../components/card/dashboard/MarketChart.tsx";
import {BalanceBreakdown} from "../../components/card/dashboard/BalanceBreakdown.tsx";
import useChart from "../../hooks/useChart.ts";
import {useDispatch, useSelector} from "react-redux";
import useBalance from "../../hooks/useBalance.ts";
import useUser from "../../hooks/useUser.ts";
import {useEffect} from "react";
import {setLoading} from "../../redux/features/appSlice.ts";
const Main: React.FC = () => {

    const user = useUser();
    const loading = useSelector((state:any)=>state.app.loading);
    const {chartData,done} = useChart();
    const dispatch = useDispatch();
    const balanceDone = useBalance();

    useEffect(() => {
        dispatch(setLoading(true));
        if(done && balanceDone && user){
            dispatch(setLoading(false));
        }

    }, [balanceDone, done, user]);




    return (
        <div className=" grid  grid-cols-12 ">
            <WelcomeHeader/>
            {!loading && <div className="row-start-2  grid pt-4 col-span-full  grid-cols-4   gap-4">
                <BalanceCard/>
                <BalanceBreakdown/>
                <MarketChart chartdata={chartData}/>

            </div>}



        </div>
    )
}

export default Main;