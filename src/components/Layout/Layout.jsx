import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layuot = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  )
}

export default Layuot
