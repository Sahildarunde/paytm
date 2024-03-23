import React from 'react'
import { Appbar } from '../components/AppBar'
import { Users } from '../components/Users'
import { Balance } from '../components/Balance'

export const Dashboard = () => {
  return (
    <div>
        <Appbar />
        <div className='m-8'>
            <Balance value={"100000"}/>
            <Users />
        </div>
    </div>
  )
}
