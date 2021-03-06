import React from "react";
import Link from 'next/link'

export default function Header() {
  return (
      <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" href="/"><img src="../homepage/logo_dark.png" alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
          <Link className="nav-link active" aria-current="page" href="/home-alt">Home-alt</Link>
          <Link className="nav-link active" aria-current="page" href="/companiesCards">Companies Card</Link>
        </li>
       {/*  <li className="nav-item">
          <Link className="nav-link" href="/list">List</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
