import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from 'react-redux'
import store from "./redux/store.ts";
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import {Auth0Provider} from "@auth0/auth0-react";
import {auth0Config} from "./config/auth0.config.tsx";
import {ConfigProvider} from "antd";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Auth0Provider
            domain={auth0Config.authDomain}
            clientId={auth0Config.clientId}

            authorizationParams={{redirect_uri: window.location.origin, audience:"https://dev-hfl2wsszxxjcktmi.us.auth0.com/api/v2/"}}
        >
            <Provider store={store}>
                <BrowserRouter>
                    <ConfigProvider
                        theme={{
                            components: {
                                Layout: {
                                    siderBg:"#0072EE",
                                    triggerBg:"#0072EE"
                                },
                            },
                        }}
                    >
                        <App/>
                    </ConfigProvider>
                </BrowserRouter>
            </Provider>
        </Auth0Provider>
    </React.StrictMode>,
)
