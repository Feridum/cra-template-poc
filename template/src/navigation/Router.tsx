import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Routes } from './routes'

export const Router: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {Routes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
                ))}
                <Route path="*">404</Route>
            </Switch>
        </BrowserRouter>
    )
}
