import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer">
      <div className="footer-left">
        <div className="footer-left-item">
          <div className="footer-left-item-wrapper">
            <Link to="/news">News</Link>
          </div>
        </div>
        <div className="footer-left-item">
          <div className="footer-left-item-wrapper">
            <Link to="/regions">Regions</Link>
          </div>
        </div>
        <div className="footer-left-item">
          <div className="footer-left-item-wrapper">
            <Link to="/video">Video</Link>
          </div>
        </div>
        <div className="footer-left-item">
          <div className="footer-left-item-wrapper">
            <Link to="/tv">TV</Link>
          </div>
        </div>
      </div>
      <div className="footer-right">Copyright &copy; yarphen</div>
    </div>
  </div>
);
