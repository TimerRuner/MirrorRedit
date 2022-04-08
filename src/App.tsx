import React, { useEffect, useState } from "react"
import "./main.global.css"
import { hot } from "react-hot-loader/root"
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header/Header"
import { Content } from "./shared/Content"
import { CardsList } from "./shared/CardsList"
import { useToken } from "./hooks/useToken"
import { tokenContext } from "./shared/context/tokenContext"
import { UserContextProvider } from "./shared/context/userContext"

export function AppCopmonent() {
    const [token] = useToken()
    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <Layout>
                    <Header />
                    <Content>
                        <CardsList />
                    </Content>
                </Layout>
            </UserContextProvider>
        </tokenContext.Provider>
    )
}

export const App = hot(() => <AppCopmonent />)
