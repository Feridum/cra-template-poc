import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'

export const Providers: FC = ({ children }) => {
    return <IntlProvider locale="en">{children}</IntlProvider>
}
