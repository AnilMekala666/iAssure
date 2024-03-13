import React from 'react';
import Logo from '../assets/images/Logo.png';
import Frame from '../assets/images/Frame.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



function Header() {
  return (
    <div>
      <header className='shadow-sm'>
        <div className='col-md-12 d-flex justify-content-between'>
          <div className='col-md-6 d-flex'>
            <div className='logo me-5'><img src={Logo} alt="Logo" /></div>
            <div className='col-md-3 align-items-center d-flex'>
              <h3 className='fw-6 d-flex align-items-center'>Team <img src={Frame} alt="Frame" /></h3>
            </div>
          </div>
          <div className='col-md-6 justify-content-end d-flex'>
            <div class="row">
              <div class="col-md-9">
                  <div class="input-group">
                      <span class="input-group-append d-flex header-search rounded-3">
                        <FontAwesomeIcon icon={faSearch}  className='pt-1'/>
                        <input type='text' className='form-control border-0 bg-transparent' placeholder='Search' />
                      </span>
                  </div>
              </div>
              <div className='col-md-3'>
                <button type="button" class="btn btn-danger btn-orange"><FontAwesomeIcon icon={faPlus}/> Create</button>
              </div> 
            </div>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;