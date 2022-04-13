import React, { useState } from 'react';
import Navigation from './../components/navbar.js';
import { Card, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveDrawer from './../components/RespDrawer.js';
import { CgPentagonUp } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";


const Page3 = () => {

	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
		<div className='bg-slate-100 h-full overflow-visible min-w-full' style={{fontFamily:'Poppins'}}>
		<div class='crd h-80 bg-white' style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
		<div className='search h-64 w-full' style={{backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>
			<div className="grid w-full">
				<span class="w-4/5" style={{margin:'0 auto'}}><input className="placeholder:italic mt-32 h-10 bg-white w-3/5 border rounded-l py-2 pl-9 pr-3 shadow-sm outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for Job Titles" type="text" name="search"/>
				<select name="cars" id="cars" class='h-10 w-1/5 sm:text-sm'>
  					<option value="volvo">Volvo</option>
  					<option value="saab">Saab</option>
  					<option value="mercedes">Mercedes</option>
  					<option value="audi">Audi</option>
				</select>
				<button className="text-white h-10 rounded-r w-1/5" style={{ backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>Search</button></span>
			</div>
		</div>
		</div>
		<div class="centr w-4/5 flex mt-4 bg-slate-100" style={{ justifyContent:'space-around', margin:'0 auto'}}>
		<div class='lft float-left h-112 hidden md:block w-1/5 '>
		<Card style={{marginBottom:'30px'}}>
        <Card.Body>
          	<p className="text-left text-black label-input100 mb-2">Category</p>
          	<select name="cars" id="cars" class=' bg-slate-50 h-10 w-full sm:text-sm'>
  					<option value="volvo">Volvo</option>
  					<option value="saab">Saab</option>
  					<option value="mercedes">Mercedes</option>
  					<option value="audi">Audi</option>
				</select>
			<br/>
			<br/>
			<p className="text-left text-black label-input100 mb-2">Location</p>
			<input className="bg-slate-50 input100 mb-0 h-8 w-full" type="text" name="Location" placeholder="Location"/>
			<br/>
			<br/>
			<p className="text-left text-black label-input100 mb-2">Job Type</p>
          	<select name="cars" id="cars" class=' bg-slate-50 h-10 w-full sm:text-sm'>
  					<option value="volvo">Volvo</option>
  					<option value="saab">Saab</option>
  					<option value="mercedes">Mercedes</option>
  					<option value="audi">Audi</option>
				</select>
			<br/>
			<br/>
			<div class='w-full'>
			<p className="text-left text-black label-input100 mb-2">Date Posted</p>
			<span class='flex items-center'><input type="radio" id="3" name="fav_language" value="3"/>
  			<label for="3">Last Hour</label></span>
			<span class='flex items-center'><input type="radio" id="4" name="fav_language" value="4"/>
  			<label for="4">Last 24 Hours</label></span>
			<span class='flex items-center'><input type="radio" id="5" name="fav_language" value="5"/>
  			<label for="5">Last 7 Days</label></span>
			<span class='flex items-center'><input type="radio" id="3" name="fav_language" value="3"/>
  			<label for="3">Last 14 Days</label></span>
			<span class='flex items-center'><input type="radio" id="4" name="fav_language" value="4"/>
  			<label for="4">Last 30 Days</label>
			
  			<br/>
  			</span>
  			</div>
  			<br/>
  			<p className="text-left text-black label-input100 mb-2">Experience Level</p>
        <div class="form-check form-switch" style={{display:'flex'}}>
        <span><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault">Fresh</label></span>
      </div>
      <div class="form-check form-switch" style={{display:'flex'}}>
        <span><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault">1 Year</label></span>
      </div>
      <div class="form-check form-switch" style={{display:'flex'}}>
        <span><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault">2 Year</label></span>
      </div>
      <div class="form-check form-switch" style={{display:'flex'}}>
        <span><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault">3 Year</label></span>
      </div>
      <div class="form-check form-switch" style={{display:'flex'}}>
        <span><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault">4 Year</label></span>
      </div>
      
			<br/>
			<button style={{width:'100%' , marginTop:'5px' ,marginBottom:'5px' , color:'white',fontSize:'12px',padding:'8px' ,borderRadius:'8px' , backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>Find Jobs</button>
        </Card.Body>
        </Card>
        <Card>
        <Card.Body>
          <Card.Title class='text-left'>Job Alert</Card.Title>
          <p className="text-left text-black label-input100 mb-2">Title</p>
			<input className="bg-slate-50 input100 mb-0 h-8 w-full" type="text" name="Location" placeholder="Location"/>
			<br/>
			<br/>
			<p className="text-left text-black label-input100 mb-2">Email Frequency</p>
          	<select name="cars" id="cars" class=' bg-slate-50 h-10 w-full sm:text-sm'>
  					<option value="volvo">Volvo</option>
  					<option value="saab">Saab</option>
  					<option value="mercedes">Mercedes</option>
  					<option value="audi">Audi</option>
				</select>
			<br/>
			<button style={{width:'100%' , marginTop:'5px' ,marginBottom:'5px' , color:'white',fontSize:'12px',padding:'8px' ,borderRadius:'8px' , backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>Save Job Alert</button>
        </Card.Body>
        </Card>
		</div>
		<div class='rght float-right pl-0 md:pl-8 h-112 md:w-4/5 w-full'>
		

		

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="text-left text-black label-input100 mb-2">Category</p>
          	<select name="cars" id="cars" class=' bg-slate-50 h-10 w-full sm:text-sm'>
  					<option value="volvo">Volvo</option>
  					<option value="saab">Saab</option>
  					<option value="mercedes">Mercedes</option>
  					<option value="audi">Audi</option>
				</select>
			<br/>
			<br/>
			<p className="text-left text-black label-input100 mb-2">Location</p>
			<input className="bg-slate-50 input100 mb-0 h-8 w-full" type="text" name="Location" placeholder="Location"/>
			<br/>
			<br/>
			<p className="text-left text-black label-input100 mb-2">Job Type</p>
          	<select name="cars" id="cars" class=' bg-slate-50 h-10 w-full sm:text-sm'>
  					<option value="volvo">Volvo</option>
  					<option value="saab">Saab</option>
  					<option value="mercedes">Mercedes</option>
  					<option value="audi">Audi</option>
				</select>
			<br/>
			<br/>
			<div class='w-full'>
			<p className="text-left text-black label-input100 mb-2">Date Posted</p>
			<span class='flex items-center'><input type="radio" id="3" name="fav_language" value="3"/>
  			<label for="3">Last Hour</label></span>
			<span class='flex items-center'><input type="radio" id="4" name="fav_language" value="4"/>
  			<label for="4">Last 24 Hours</label></span>
			<span class='flex items-center'><input type="radio" id="5" name="fav_language" value="5"/>
  			<label for="5">Last 7 Days</label></span>
			<span class='flex items-center'><input type="radio" id="3" name="fav_language" value="3"/>
  			<label for="3">Last 14 Days</label></span>
			<span class='flex items-center'><input type="radio" id="4" name="fav_language" value="4"/>
  			<label for="4">Last 30 Days</label>
			
  			<br/>
  			</span>
  			</div>
  			<br/>
  			<p className="text-left text-black label-input100 mb-2">Experience Level</p>
  			
  			<div style={{display:'flex' , flexDirection:'column', left:'0%'}}>
  			<div class="form-check form-switch">
  			<span><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  			<label class="form-check-label" for="flexSwitchCheckDefault">Fresh</label></span>
			</div>
			<div class="form-check form-switch">
  			<span><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  			<label class="form-check-label" for="flexSwitchCheckDefault">1 Year</label></span>
			</div>
			<div class="form-check form-switch">
  			<span><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  			<label class="form-check-label" for="flexSwitchCheckDefault">2 Year</label></span>
			</div>
			<div class="form-check form-switch">
  			<span><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  			<label class="form-check-label" for="flexSwitchCheckDefault">3 Year</label></span>
			</div>
			<div class="form-check form-switch">
  			<span><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  			<label class="form-check-label" for="flexSwitchCheckDefault">4 Year</label></span>
			</div>
			</div>
			<br/>
			<button style={{width:'100%' , marginTop:'5px' ,marginBottom:'5px' , color:'white',fontSize:'12px',padding:'8px' ,borderRadius:'8px' , backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>Find Jobs</button>
        
        </Offcanvas.Body>
      </Offcanvas>
























		<span class='float-left text-xl mb-2'>
		<button variant="primary" class=" md:hidden block navbar-toggler collapsed" onClick={handleShow}>
        <span class='inline-flex'><GiHamburgerMenu/>Filters</span>
      	</button>
		<p class='mb-0'>Showing x-y of z results</p></span>
		<span class='mb-4'><select name="cars" id="cars" class='h-10 mb-2 sm:float-right mr-2 rounded-md sm:text-sm'>
			<option value="volvo">Volvo</option>
			<option value="saab">Saab</option>
	  		<option value="mercedes">Mercedes</option>
	  		<option value="audi">Audi</option>
		</select>
		<select name="cars" id="cars" class='h-10 mr-1 mb-2 rounded-md sm:text-sm sm:float-right'>
			<option value="volvo">Volvo</option>
			<option value="saab">Saab</option>
	  		<option value="mercedes">Mercedes</option>
	  		<option value="audi">Audi</option>
		</select></span>
		<Card style={{borderRadius:'8px', marginBottom:'16px', marginTop:'10px' , width:'100%'}}>
        <Card.Body class="flex">
          <div className='float-left h-24 w-24 ml-4 md:ml-8'>
          <img className='h-16 w-16 mt-1'/>
          </div> 
          <div class='float-right pl-2 pr-4 w-full'>
          <p class='float-right text-4xl text-black mb-0'><CgPentagonUp/></p>
          <p class='text-2xl text-left mt-2'>House Driver Required in Qatar</p>
            <p class="text-left mb-0">Tags</p>
            <p class="sm:text-right text-left text-2xl mb-0">999$</p>
            <span class="float-left">
            <a style={{marginRight:'4px',align:'left', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#4E47E5'}}>Full Time</a>
            <a style={{marginRight:'4px', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#E61B1E'}}>Full Time</a>
            </span>
            <br/>
            <button class="sm:float-right float-left" style={{marginTop:'5px' ,marginBottom:'5px' , color:'white',fontSize:'16px',padding:'4px' ,borderRadius:'5px' , backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>Apply Now</button>

          </div>

        </Card.Body>
        </Card>
        <Card style={{borderRadius:'8px', marginBottom:'16px' , width:'100%'}}>
        <Card.Body class="flex">
          <div className='float-left h-24 w-24 ml-4 md:ml-8'>
          <img className='h-16 w-16 mt-1'/>
          </div> 
          <div class='float-right pl-2 pr-4 w-full'>
          <p class='float-right text-4xl text-black mb-0'><CgPentagonUp/></p>
          <p class='text-2xl text-left mt-2'>House Driver Required in Qatar</p>
            <p class="text-left mb-0">Tags</p>
            <p class="sm:text-right text-left text-2xl mb-0">999$</p>
            <span class="float-left">
            <a style={{marginRight:'4px',align:'left', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#4E47E5'}}>Full Time</a>
            <a style={{marginRight:'4px', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#E61B1E'}}>Full Time</a>
            </span>
            <br/>
            <button class="sm:float-right float-left" style={{marginTop:'5px' ,marginBottom:'5px' , color:'white',fontSize:'16px',padding:'4px' ,borderRadius:'5px' , backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>Apply Now</button>

          </div>

        </Card.Body>
        </Card>
        <Card style={{borderRadius:'8px', marginBottom:'16px' , width:'100%'}}>
        <Card.Body class="flex">
          <div className='float-left h-24 w-24 ml-4 md:ml-8'>
          <img className='h-16 w-16 mt-1'/>
          </div> 
          <div class='float-right pl-2 pr-4 w-full'>
          <p class='float-right text-4xl text-black mb-0'><CgPentagonUp/></p>
          <p class='text-2xl text-left mt-2'>House Driver Required in Qatar</p>
            <p class="text-left mb-0">Tags</p>
            <p class="sm:text-right text-left text-2xl mb-0">999$</p>
            <span class="float-left">
            <a style={{marginRight:'4px',align:'left', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#4E47E5'}}>Full Time</a>
            <a style={{marginRight:'4px', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#E61B1E'}}>Full Time</a>
            </span>
            <br/>
            <button class="sm:float-right float-left" style={{marginTop:'5px' ,marginBottom:'5px' , color:'white',fontSize:'16px',padding:'4px' ,borderRadius:'5px' , backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>Apply Now</button>

          </div>

        </Card.Body>
        </Card>
        <Card style={{borderRadius:'8px', marginBottom:'16px' , width:'100%'}}>
        <Card.Body class="flex">
          <div className='float-left h-24 w-24 ml-4 md:ml-8'>
          <img className='h-16 w-16 mt-1'/>
          </div> 
          <div class='float-right pl-2 pr-4 w-full'>
          <p class='float-right text-4xl text-black mb-0'><CgPentagonUp/></p>
          <p class='text-2xl text-left mt-2'>House Driver Required in Qatar</p>
            <p class="text-left mb-0">Tags</p>
            <p class="sm:text-right text-left text-2xl mb-0">999$</p>
            <span class="float-left">
            <a style={{marginRight:'4px',align:'left', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#4E47E5'}}>Full Time</a>
            <a style={{marginRight:'4px', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#E61B1E'}}>Full Time</a>
            </span>
            <br/>
            <button class="sm:float-right float-left" style={{marginTop:'5px' ,marginBottom:'5px' , color:'white',fontSize:'16px',padding:'4px' ,borderRadius:'5px' , backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>Apply Now</button>

          </div>

        </Card.Body>
        </Card>
        <Card style={{borderRadius:'8px', marginBottom:'16px' , width:'100%'}}>
        <Card.Body class="flex">
          <div className='float-left h-24 w-24 ml-4 md:ml-8'>
          <img className='h-16 w-16 mt-1'/>
          </div> 
          <div class='float-right pl-2 pr-4 w-full'>
          <p class='float-right text-4xl text-black mb-0'><CgPentagonUp/></p>
          <p class='text-2xl text-left mt-2'>House Driver Required in Qatar</p>
            <p class="text-left mb-0">Tags</p>
            <p class="sm:text-right text-left text-2xl mb-0">999$</p>
            <span class="float-left">
            <a style={{marginRight:'4px',align:'left', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#4E47E5'}}>Full Time</a>
            <a style={{marginRight:'4px', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#E61B1E'}}>Full Time</a>
            </span>
            <br/>
            <button class="sm:float-right float-left" style={{marginTop:'5px' ,marginBottom:'5px' , color:'white',fontSize:'16px',padding:'4px' ,borderRadius:'5px' , backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>Apply Now</button>

          </div>

        </Card.Body>
        </Card>
        <Card style={{borderRadius:'8px', marginBottom:'16px' , width:'100%'}}>
        <Card.Body class="flex">
          <div className='float-left h-24 w-24 ml-4 md:ml-8'>
          <img className='h-16 w-16 mt-1'/>
          </div> 
          <div class='float-right pl-2 pr-4 w-full'>
          <p class='float-right text-4xl text-black mb-0'><CgPentagonUp/></p>
          <p class='text-2xl text-left mt-2'>House Driver Required in Qatar</p>
            <p class="text-left mb-0">Tags</p>
            <p class="sm:text-right text-left text-2xl mb-0">999$</p>
            <span class="float-left">
            <a style={{marginRight:'4px',align:'left', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#4E47E5'}}>Full Time</a>
            <a style={{marginRight:'4px', color:'white',fontSize:'12px',padding:'4px' ,borderRadius:'2px' ,backgroundColor: '#E61B1E'}}>Full Time</a>
            </span>
            <br/>
            <button class="sm:float-right float-left" style={{marginTop:'5px' ,marginBottom:'5px' , color:'white',fontSize:'16px',padding:'4px' ,borderRadius:'5px' , backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>Apply Now</button>

          </div>

        </Card.Body>
        </Card>
		</div>
		</div>
		

		</div>

		);
}

export default Page3;
