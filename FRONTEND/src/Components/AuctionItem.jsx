import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function AuctionItem() {
  const { id } = useParams();
  const [bid, setBid] = useState('');
  const [message, setMessage] = useState('');

  const item = {
    itemName: 'Creta',
    description: 'A first owner car in good condition.',
    currentBid: 1500,
    highestBidder: 'JohnDoe'
  };

  const handleBid = () => {
    const username = prompt('Enter your username to place a bid:');

    if (!username) {
      setMessage('Bid cancelled.');
      return;
    }

    if (Number(bid) <= item.currentBid) {
      setMessage('Bid must be higher than the current bid.');
      return;
    }

    setMessage(`Bid placed successfully by ${username} for $${bid}! (Simulation)`);
  };

  return (
    <div>
      <h2>{item.itemName}</h2>
      <p>{item.description}</p>
      <p>Current Bid: ${item.currentBid}</p>
      <p>Highest Bidder: {item.highestBidder || 'No bids yet'}</p>
      <input
        type="number"
        value={bid}
        onChange={(e) => setBid(e.target.value)}
        placeholder="Enter your bid"
      />
      <button onClick={handleBid}>Place Bid</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default AuctionItem;