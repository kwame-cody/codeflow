import React from 'react'

const Layout = ({children}: {children : React.ReactNode}) => {
  return (
    <div className='flex h-screen justify-center items-center'>{children}</div>
  )
}

export default Layout