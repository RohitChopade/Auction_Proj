import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';
import Landing from './Components/Landing';
import PostAuction from './Components/PostAuction';
import AuctionItem from './Components/AuctionItem';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Online Auction App</h1>
          <nav>
            <Link to="/signup" className="nav-link">Signup</Link>
            <Link to="/signin" className="nav-link">Signin</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/postauction" className="nav-link">Post Auction</Link>
            <Link to="/AuctionItem" className="nav-link">Auction Item</Link>

          </nav>
        </header>
        <main>
        <section class="main-section">
        <h2> Experience the thrill of live auctions and uncover deals you wont find anywhere else!</h2>
 </section>

          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/postauction" element={<PostAuction />} />
            <Route path="/auctionitem" element={<AuctionItem />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 AuctionZone | All Rights Reserved</p>
          <p>Contact us :9999999999</p>
          <p>email :auct123@gmail.com</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

