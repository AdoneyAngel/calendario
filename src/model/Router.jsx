import { createBrowserRouter } from "react-router-dom"
import { Main } from "../pages/Main"

export class Router {
    static router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>
        }
    ])

    static getRouter() {
        return this.router
    }
}