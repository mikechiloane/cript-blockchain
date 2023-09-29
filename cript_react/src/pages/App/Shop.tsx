import React from "react";
import TransactBitcoin from "../../components/card/dashboard/TransactBitcoin.tsx";
import useBalance from "../../hooks/useBalance.ts";

const Shop:React.FC = () => {

    useBalance();

    return(
        <div className="overflow-scroll">
            <h1 className="text-3xl mb-4">Transact</h1>
           <TransactBitcoin/>

        </div>
    );
}

export  default  Shop;