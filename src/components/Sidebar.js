import React from 'react'
import logo from '../assets/images/SAZS LOGO PNG (1).png'
import { navLinks } from '../constants';
const Sidebar = () => {
  return (
    /*
    <aside class="navbar navbar-vertical navbar-expand-sm navbar-dark">
      <button class="btn btn-primary">sdfsdfs</button>
      <div class="container-fluid">
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <h1 class="navbar-brand navbar-brand-autodark">
          <a href="#">
            <img
              src="https://preview.tabler.io/static/logo-white.svg"
              width="110"
              height="32"
              alt="Tabler"
              class="navbar-brand-image"
            />
          </a>
        </h1>
        <div class="collapse navbar-collapse" id="sidebar-menu">
          <ul class="navbar-nav pt-lg-3">
            <li class="nav-item">
              <a class="nav-link" href="./">
                <span class="nav-link-title">Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="nav-link-title">Link 1</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="nav-link-title">Link 2</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="nav-link-title">Link 3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>                             
    */
    <div class="page">
      <aside class="navbar navbar-vertical navbar-expand-sm navbar-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <h1 class="navbar-brand navbar-brand-autodark">
            <a href="#">
              <img src={logo} height={100} width={100} alt="logo" class="" />
            </a>
          </h1>
          <div class="collapse navbar-collapse" id="sidebar-menu">
            <ul class="navbar-nav pt-lg-3">
              {navLinks.map((link) => (
                <li key={} className="hover:text-white text-lg p-3">
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <div class="page-wrapper">
        <div class="page-header d-print-none">
          <div class="container-xl">
            <div class="row g-4 align-items-between">
              <div class="col">
                <h2 class="page-title">Vertical layout layout layout</h2>
              </div>
              <div class="col">
                <h2 class="page-title ml-5">Vertical layout layout layout</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="page-body">
          <div class="container-xl">
            <div class="row row-deck row-cards">
              <div class="col-sm-6 col-lg-3">
                <div class="card">
                  <div
                    class="card-body bg-success"
                    style={{height: "1px"}}
                  ></div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="card">
                  <div class="card-body" style={{height: "10rem"}}></div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="card">
                  <div class="card-body" style={{height: "10rem"}}></div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="card">
                  <div class="card-body" style={{height: "10rem"}}></div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row row-cards">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body" style={{height: "10rem"}}></div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body" style={{height: "10rem"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body" style={{height: "10rem"}}></div>
                </div>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="card-body" style={{height: "10rem"}}></div>
                </div>
              </div>
              <div class="col-md-12 col-lg-8">
                <div class="card">
                  <div class="card-body" style={{height: "10rem"}}></div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card">
                  <div class="card-body" style={{height: "10rem"}}></div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card">
                  <div class="card-body" style={{height: "10rem"}}></div>
                </div>
              </div>
              <div class="col-md-12 col-lg-8">
                <div class="card">
                  <div class="card-body" style={{height: "10rem"}}></div>
                </div>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="card-body" style={{height: "10rem"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar