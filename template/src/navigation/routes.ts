import { FC } from 'react'
import { WelcomeContainer } from '../screens/Welcome/WelcomeContainer'

export interface Route {
    path: string
    component: FC<unknown>
    exact: boolean
}

export const Routes: Route[] = [
    {
        path: '/',
        component: WelcomeContainer,
        exact: false,
    },
]
