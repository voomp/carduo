import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Content from '../components/Dashboard/Content'
import Navbar from '../components/Navbar'
import { isUserAuth } from '../utils/auth'

const Dashboard = () => {

  const router = useRouter();
  useEffect(() => {
    if(!isUserAuth(localStorage)) router.push('/register');
  });

  return (
    <div>
        <Navbar />
        <Content />
    </div>
  )
}

export default Dashboard