import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Getting started
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Online
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Offline
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charges
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership and HUF
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Non Resident Indian (NRI)
          </Link>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa fa-user" aria-hidden="true"></i>
          Your Zerodha Account
          </h4>
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Login credentials
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Your Profile
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account modification and segment addition
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            CMR & DP ID
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Nomination
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transfer and conversion of shares
          </Link>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa fa-stack-exchange" aria-hidden="true"></i> Trading and
            Markets
          </h4>
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading FAQs
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Kite
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Margins
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Product and order types
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Corporate actions
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Kite features
          </Link>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa fa-window-maximize" aria-hidden="true"></i>
          Funds
          </h4>
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fund withdrawal
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Adding funds
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Adding bank accounts
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            eMandates
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Opening
          </Link>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa fa-globe" aria-hidden="true"></i> Console
          </h4>
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            IPO
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Portfolio
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Funds statement
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Profile
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Reports
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Referral programme
          </Link>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
          <i class="fa fa-money" aria-hidden="true"></i> Coin
          </h4>
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Understanding mutual funds and Coin
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Coin app
          </Link>
          <br />
          <Link to="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Coin web
          </Link>
          <br />
          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transactions and reports
          </Link>
          <br />

          <Link href="*" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            National Pension Scheme (NPS)
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
