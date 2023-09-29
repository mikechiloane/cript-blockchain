import {Card, Tab, TabGroup, TabList, TabPanels} from "@tremor/react";
import TransferBitcoinTab from "./TransferBitcoinTab.tsx";
import BuyBitcoinTab from "./BuyBitcoinTab.tsx";
import BitInfoCard from "./BitInfoCard.tsx";

const TransactBitcoin = () => {

    return (
        <div className="buyCardContainer ">
            <Card className="buySellCard">
                <TabGroup>
                    <TabList>
                        <Tab style={{fontSize: 18}}>Buy</Tab>
                        <Tab style={{fontSize: 18}}>Transfer</Tab>
                    </TabList>
                    <TabPanels>
                        <BuyBitcoinTab/>
                       <TransferBitcoinTab/>

                    </TabPanels>
                </TabGroup>
            </Card>
            <BitInfoCard/>
        </div>
    )
}

export default TransactBitcoin;