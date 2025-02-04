import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='container justify-content-center p-4' id='nav-tab'>

                <div className='row'>
                <div className='col-4 col-sm-2'>
                        {/* <form action="">
                            <div className='container'>
                            <input class=" searchbar" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-danger" type="submit">Search</button>
                            </div>
                        </form> */}
                        <img src="src\Images\logo.png" alt="" className='logo'/>

                    </div>
                    <div className='col-8 col-sm-10 align-self-center justify-content-start'>
                        <h2 className='heading '>ADYP Journal in Engineering Technologies</h2>
                        <p>Ajinkya DY Patil Official Research Journal</p>
                    </div>
                    

                </div>
                {/* <button><Link to='/login'>Login</Link> </button> */}
                {/* <button><Link to='/register'>Register</Link></button> */}
            </div>
            <div className='nav-container nav-line' >
                <nav class="navbar navbar-expand-lg ">
                    <div class="container ">
                        {/* <a class="navbar-brand" href="#">Navbar</a> */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li class="nav-item">
                                    <Link to='/' className='nav-link'>Home</Link>
                                </li>
                                {/* <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Archives
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> */}
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Archives</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Current</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Editorial Board</a>
                                </li>
                                {/* <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Editorial Committe
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> */}

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Peer Review & Ethics
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item ">
                                    
                                        <Link to='/aboutinstitute' className='nav-link'>About</Link>

                                    {/* <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">About Journal</a></li>
                                        <li>
                                        </li>
                                    </ul> */}
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link active" aria-current="page" href="">Home</a> */}
                                    <Link to='/upload' className='nav-link'>Upload</Link>
                                </li>
                            </ul>
                            <form class="d-flex" role="search"> </form>
                        </div>
                    </div>
                </nav>
            </div>
            <marquee behavior="" direction="" loop=''>Ajeenkya DY Patil School of Engineering, Official Resource Journal Pagex</marquee>
        </>
    )
}

export default Navbar
