import {Card,  Metric,  Text} from "@tremor/react";
import {useSelector} from "react-redux";

export default function (){

    const {balance} = useSelector((state:any)=>state.wallet);

    return(
        <Card
        style={
            {
                borderRadius:"0px",
                boxShadow:"none",
            }
        }>
            <Text>Satoshi</Text>
            <Metric>{Intl.NumberFormat("us").format((balance.balance)).toString()}</Metric>

        </Card>
    )
}