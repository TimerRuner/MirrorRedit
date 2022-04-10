import React from "react"
import "./main.global.css"
import { hot } from "react-hot-loader/root"
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header/Header"
import { Content } from "./shared/Content"
import { CardsList } from "./shared/CardsList"
import { useToken } from "./hooks/useToken"
import { tokenContext } from "./shared/context/tokenContext"
import { UserContextProvider } from "./shared/context/userContext"
import { applyMiddleware, createStore, Middleware } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "./store/store"
import thunk from "redux-thunk"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export function AppCopmonent() {
    const [token] = useToken()
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export const App = hot(() => <AppCopmonent />)
