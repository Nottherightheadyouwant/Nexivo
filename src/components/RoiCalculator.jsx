import React, { useState } from 'react';

export default function RoiCalculator() {
  const [visitors, setVisitors] = useState(800);
  const [custVal, setCustVal] = useState(1500);
  const [convRate, setConvRate] = useState(1.5);

  const currentRev = visitors * (convRate / 100) * custVal;
  const newRate = convRate * 1.6; // 60% conversion lift
  const newRev = visitors * (newRate / 100) * custVal;
  const lift = Math.max(0, Math.round(newRev - currentRev));

  return (
    <div className="roi-panel">
      <div>
        <div className="slider-block">
          <div className="slider-top">
            <span>Monthly site visitors</span>
            <span>{visitors.toLocaleString('en-IN')}</span>
          </div>
          <input
            type="range"
            min="100"
            max="5000"
            step="50"
            value={visitors}
            onChange={(e) => setVisitors(Number(e.target.value))}
          />
        </div>

        <div className="slider-block">
          <div className="slider-top">
            <span>Average customer value</span>
            <span>₹{custVal.toLocaleString('en-IN')}</span>
          </div>
          <input
            type="range"
            min="200"
            max="10000"
            step="100"
            value={custVal}
            onChange={(e) => setCustVal(Number(e.target.value))}
          />
        </div>

        <div className="slider-block">
          <div className="slider-top">
            <span>Current conversion rate</span>
            <span>{convRate}%</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="8"
            step="0.1"
            value={convRate}
            onChange={(e) => setConvRate(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="roi-result">
        <div className="lbl">Projected Additional Monthly Revenue</div>
        <div className="big">+₹{lift.toLocaleString('en-IN')}</div>
        <div className="lbl">based on a realistic post-redesign conversion lift</div>
      </div>
    </div>
  );
}