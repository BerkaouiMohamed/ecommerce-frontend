import React from 'react'
import HomeProductsContext from './HomeProductsContext'
import AllProductsContext from './AllProductsContext'

function RootContext({children}) {
  return (
    <HomeProductsContext>
        <AllProductsContext>
            {children}
        </AllProductsContext>
    </HomeProductsContext>
  )
}

export default RootContext