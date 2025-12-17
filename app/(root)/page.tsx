import React from "react";
import RightSidebar from "@/components/RightSidebar";
import { HeaderBox } from "@/components/HeaderBox";
import { TotalBalancebox } from "@/components/TotalBalancebox";

const Home = () => {
  const loggedIn = {
    firstName: "Syed",
    lastName: "Hassan",
    email: "syedhassanzia08@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account
                         and transactions here."
          />
          <TotalBalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1250.35 }, { currentBalance: 2000.75 }]}
      />
    </section>
  );
};

export default Home;
