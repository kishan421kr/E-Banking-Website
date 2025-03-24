import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Registration from "./Pages/Registration"
import Dashboard from "./Pages/dashboard"
import Login from "./Pages/Login"
import BalanceInquiry from "./dashboard pages/BalanceInquiry"
import AccountStatement from "./dashboard pages/AccountStatement"
import DepositeCash from "./dashboard pages/DepositCash"
import WithdrawalCash from "./dashboard pages/WithdrawalCash"
import MiniStatement from "./dashboard pages/MiniStatement"
import Profile from "./dashboard pages/Profile"
import ResetPassword from "./dashboard pages/ResetPassword"



const App=()=>{
  return(
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index  element={<Home/>} />
            <Route path="home" element={<Home/>}/>
            <Route path="registration" element={<Registration/>}/>
            <Route path="login" element={<Login/>} />
          </Route>
        </Routes>
        <Routes>
          <Route path="dashboard" element={<Dashboard/>}>
            <Route index element={<Profile/>}/>
            <Route path="balanceInquiry" element={<BalanceInquiry/>}/>
            <Route path="accountSatement" element={<AccountStatement/>}/>
            <Route path="deposite" element={<DepositeCash/>}/>
            <Route path="withdrawal" element={<WithdrawalCash/>}/>
            <Route path="miniStatement" element={<MiniStatement/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="resetPassword" element={<ResetPassword/>}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
    
    </>
  )
}
export default App