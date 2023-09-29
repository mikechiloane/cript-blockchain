import {Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {useSelector} from "react-redux";
import dayjs from "dayjs";

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

interface TransactionTableProps {
    transactions: any
}

const TransactionTable = (TransactionTableProps: TransactionTableProps) => {

    const address:string = useSelector((state:any)=>state.wallet.address);

    const columns: ColumnsType<DataType> = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (text) => <a>{dayjs(text).format("DD MMM YYYY")}</a>,
        },
        {
            title: 'Receiver',
            dataIndex: 'receiver',
            key: 'receiver',
            render: (text) => {

                return text===address?<Tag color="green" ><p className="px-4 ">You</p></Tag>:<p>{text}</p>;
            },
        },
        {
            title: 'Sender',
            dataIndex: 'sender',
            key: 'sender',
            render: (text) => {

                return text===address?<Tag color="green" ><p className="px-4 ">You</p></Tag>:<p>{text}</p>;
            },
        },
        {
            title: 'Satoshi',
            key: 'satoshi',
            dataIndex: 'satoshi',

        }

    ];

    return (
        <div className="row-start-3 col-start-2 col-span-full">
        <Table columns={columns} dataSource={TransactionTableProps.transactions}/>
    </div>
    )

}

export default TransactionTable;