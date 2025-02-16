import Auth from "../pages/Auth"
import Basket from "../pages/Basket"
import Main from "../pages/Main"
import Product from "../pages/Product"
import Registration from "../pages/Registration"

interface IRoute{
    path: string,
    element: React.ComponentType
}

export enum RouteNames {
    AUTH = "/auth",
    REGISTRATION = "/registration",
    BASKET = "/basket",
    MAIN = "/store",
    PRODUCT = "/store/:id",
    ADMIN = "/admin"
}

export const publicRoutes:IRoute[] = [
    {path: RouteNames.AUTH, element: Auth},
    {path: RouteNames.REGISTRATION, element: Registration},
]

export const privateRoutes:IRoute[] = [
    {path: RouteNames.MAIN, element: Main},
    {path: RouteNames.PRODUCT, element: Product},
    {path: RouteNames.BASKET, element: Basket},
]