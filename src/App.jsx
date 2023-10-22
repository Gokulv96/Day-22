import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
  <div className="card-deck">
  <div className="card">
    <h6>FREE</h6>
    <div className="card-body">
      <h4 className="card-title">$0/month</h4>
      <p className="card-text">&#10003; Single User</p>
      <p className="card-text">&#10003; 50GB Storage</p>
      <p className="card-text">&#10003; Unlimited Public Projects</p>
      <p className="card-text">&#10003; Community Access</p>
      <p className="card-text">&#10003; Unlimited Private Projects</p>
      <p className="card-text">&#10005; Deticated Phone Support</p>
      <p className="card-text">&#10005; Free Subdomain</p>
      <p className="card-text">&#10005; Monthly Status Reports</p>
      <button className='btn btn-primary'>Add</button>
    </div>
  </div>
  <div className="card">
      <h6>PLUS</h6>
    <div className="card-body">
      <h4 className="card-title">$9/month</h4>
      <p className="card-text">&#10003; Single User</p>
      <p className="card-text">&#10003; 50GB Storage</p>
      <p className="card-text">&#10003; Unlimited Public Projects</p>
      <p className="card-text">&#10003; Community Access</p>
      <p className="card-text">&#10003; Unlimited Private Projects</p>
      <p className="card-text">&#10003; Deticated Phone Support</p>
      <p className="card-text">&#10003; Free Subdomain</p>
      <p className="card-text">&#10005; Monthly Status Reports</p>
      <button className='btn btn-primary'>Add</button>
    </div>
  </div>
  <div className="card">
      <h6>PRO</h6>
    <div className="card-body">
      <h4 className="card-title">$49/month</h4>
      <p className="card-text">&#10003; Single User</p>
      <p className="card-text">&#10003; 50GB Storage</p>
      <p className="card-text">&#10003; Unlimited Public Projects</p>
      <p className="card-text">&#10003; Community Access</p>
      <p className="card-text">&#10003; Unlimited Private Projects</p>
      <p className="card-text">&#10003; Deticated Phone Support</p>
      <p className="card-text">&#10003; Free Subdomain</p>
      <p className="card-text">&#10003; Monthly Status Reports</p>
      <button className='btn btn-primary'>Add</button>
    </div>
  </div>
</div>
    </>
  )
}

export default App
