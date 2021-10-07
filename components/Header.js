import React from "react";
import Link from 'next/link'

export default function Header() {
  return (
      <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" href="/"><img src="https://www.apidays.global/wp-content/uploads/2020/05/logo-v2-2.png.webp" alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
