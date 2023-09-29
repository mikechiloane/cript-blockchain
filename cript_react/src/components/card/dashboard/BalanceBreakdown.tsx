import {Card, DonutChart, Flex, Title} from "@tremor/react";
import React from "react";
import {useSelector} from "react-redux";

interface walletState {
    wallet: {
        balance: {
            balance: number,
            sent: number,
            received: number
        }
    }
}


const valueFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}`;

export const BalanceBreakdown: React.FC = () => {

    const balance = useSelector((state: walletState) => state.wallet.balance);

    const breakdown = [
        {
            name: "balance",
            sales: (balance.balance==0?1:balance.balance ),
        },
        {
            name: "sent",
            sales: (balance.sent==0?1:balance.sent),
        },
        {
            name: "received",
            sales: (balance.received==0?1:balance.received),
        }

    ];
    return (
        <Card style={
            {
                borderRadius:"0px",
                boxShadow:"none",
            }
        } className="max-w-lg row-start-2 row-end-3">
            <Title>Breakdown</Title>
            <DonutChart
                className="mt-6"
                showLabel={true}
                data={breakdown}
                animationDuration={800}
                variant="donut"
                category="sales"
                index="name"
                valueFormatter={valueFormatter}
                colors={["indigo", "rose", "cyan", "amber"]}
            />

            <Flex justifyContent="center" className="mt-6 space-x-4">
                <div className="flex space-x-1 items-center ">
                    <div className="bg-[#6366F1] rounded-full w-2 h-2"></div>
                    <p className="text-sm  text-gray-700">Balance</p>
                </div>
                <div className="flex space-x-1 items-center ">
                    <div className="bg-[#05B6D3] rounded-full w-2 h-2"></div>
                    <p className="text-sm  text-gray-700">Received</p>
                </div>
                <div className="flex space-x-1 items-center  ">
                    <div className="bg-[#F43F5E] rounded-full w-2 h-2"></div>
                    <p className="text-sm  text-gray-700">Sent</p>
                </div>
                {/*<div className="flex space-x-2 items-center ">*/}
                {/*    <div className="bg-[#05B6D3] w-2 h-2"></div>*/}
                {/*    <p className="text-sm  text-gray-700">Received</p>*/}
                {/*</div>*/}
            </Flex>

        </Card>
    );
}