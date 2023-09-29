import {Card, LineChart, Title} from "@tremor/react";


const dataFormatter = (number: number) => {
    if (number >= 1000 && number < 1000000) {
        return "R" + (number / 1000).toFixed(1) + "K";
    } else {
        return "R" + Intl.NumberFormat("us").format(number).toString();
    }
};

interface props {
    chartdata: any
}


const MarketChart= (props:props) => {


    return (
        <div className=" col-span-3 bg-white  row-span-2 ">
            <Card className="marketChart ">
                <Title>Bitcoin VS Rand</Title>
                <LineChart
                    className="mt-2"
                    showLegend={true}
                    data={props.chartdata}
                    index="time"
                    categories={["open", "close"]}
                    colors={["emerald", "gray"]}
                    valueFormatter={dataFormatter}
                />
            </Card>
        </div>
    )
        ;
}

export default MarketChart;