import React from 'react'
import { Children } from 'react/cjs/react.production.min'
import { Header } from './'

const Layout = ({Children}) => {
    return (
        <>
            <Header/>
            {Children}
        </>
    )
}

export default Layout
