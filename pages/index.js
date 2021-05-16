import { auth } from '@/store/auth'
import Router from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    if (auth.isInSession) {
      return Router.push('/jobs')
    }
  }, [])

  return <>Layout</>
}

export default Home
