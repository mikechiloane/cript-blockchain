import {api} from "../config/api.ts";
import criptnet from "../config/criptnet.ts";
import {useEffect, useState} from "react";
import {processValues} from "../util/processChartData.ts";
const useChart = () => {

    const [chartData, setChartData] = useState<any>();
    const [done, setDone] = useState(false);

    const getChartData = async () => {
        try {
            const response = await criptnet.get(api.wallet.chart);
            const data = processValues(response.data.values)
            setChartData(data.reverse())
            setDone(true);
        }
        catch (error) {
            setDone(true);
        }
    }

    useEffect(() => {
        getChartData();
    }, []);

    return {chartData, done};


}

export default useChart;