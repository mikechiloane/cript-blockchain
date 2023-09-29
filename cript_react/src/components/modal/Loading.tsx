import {Spin} from "antd";

const Loading = () => {


    return (
        <div className="drop-shadow w-full h-full justify-center items-center absolute bg-white z-50 opacity-50 flex">
            <Spin size="large"/>
        </div>
    );
}

export default Loading;