import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
const loggedIn={firstName:"Prathamesh",lastName:"Vagare",email:"psvagare@gmail.com"}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                 type="greeting"
                 title="Welcome"
                 user={loggedIn?.firstName || 'Guest'}
                 subtext="Access and mange your account and transactions efficiently."
                 />

                 <TotalBalanceBox
                 accounts={[]}
                 totalBanks={1}
                 totalCurrentBalance={1234.50}/>
            </header>
            Recent transactions
        </div>

        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 1234},{currentBalance:3456}]}/>
    </section>
  )
}

export default Home