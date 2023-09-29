import React, {useEffect, useState} from 'react';
import {
    WalletOutlined,
    HomeOutlined,
    ShopOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Button, Layout, Menu, theme} from 'antd';
import {FiMenu} from "react-icons/fi";
import {Route, Routes} from "react-router-dom";
import Main from "../pages/App/Main.tsx";
import {resources} from "../assets/resources.ts";
import {useNavigate} from "react-router-dom";
import Transactions from "../pages/App/Transactions.tsx";
import Shop from "../pages/App/Shop.tsx";
import {useAuth0} from "@auth0/auth0-react";
import useUser from "../hooks/useUser.ts";
import Loading from "../components/modal/Loading.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";


const {Header, Content, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home', 'home', <HomeOutlined/>),
    getItem('Transactions', 'transactions', <WalletOutlined/>),
    getItem('Market', 'shop', <ShopOutlined/>),

];

const AppStack: React.FC = () => {
    useUser();

    const {getAccessTokenSilently,logout, isAuthenticated,user} = useAuth0();
    const getToken = async ()=>{
        const token = await getAccessTokenSilently();
        localStorage.setItem("token",token);
        return token;
    }

    useEffect( ()=>{
        if(isAuthenticated){
            getToken();
        }

    },[isAuthenticated])


    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const navigate = useNavigate();

    const handleMenuClick = (e: { key: string }) => {
        navigate("/app/" + e.key);
    }

    const loading = useSelector((state:RootState)=>state.app.loading);
    return (
        <Layout className="h-screen">
            {loading && <Loading/>}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                {!collapsed ? <img src={resources.logo_blue} className="h-6 m-8 mt-4 mb-12" alt="logo_blue"/>
                    : <img src={resources.logo_bluec} className="h-6 m-8 mt-4 mb-12" alt="logo_blue"/>
                }
                <Menu className="text-white w-full bg-[#0072EE]" defaultSelectedKeys={['1']} mode="inline" items={items}
                      onClick={(e) => handleMenuClick(e)}/>
            </Sider>
            <Layout >


                <Header className="flex items-center justify-between" style={{padding:0, background: colorBgContainer}}>
                    <Button
                        type="text"
                        icon={collapsed ? <FiMenu/> : <FiMenu/>}
                        onClick={() => setCollapsed(!collapsed)}

                        className="text-[20px] ml-6"
                    />
                    <div className="flex items-center space-x-1 mr-8">
                        <img src={user?.picture} className="h-8 rounded-full" alt="logo_blue"/>
                        <div className="flex flex-col justify-center space-x-0">
                            <p onClick={()=>logout()} className="text-sm prim-text">{user?.nickname}</p>
                            <p className="text-sm text-gray-600 -mt-1">admin</p>
                        </div>


                    </div>
                </Header>
                <Content className="p-8 overflow-scroll ">

                    <Routes>
                        <Route path="/home" element={<Main/>}/>
                        <Route path="/transactions" element={<Transactions/>}/>
                        <Route path="/shop" element={<Shop/>}/>
                    </Routes>

                </Content>
            </Layout>
        </Layout>
    );
};

export default AppStack;