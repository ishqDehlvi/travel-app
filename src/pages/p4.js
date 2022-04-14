import React from 'react';
import Navigation from './../components/navbar.js';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './Icon.svg'
const Page = () => {
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
    <div class="centr w-4/5 block md:flex mt-4 bg-slate-100" style={{ justifyContent:'space-around', margin:'0 auto'}}>
      <div class='float-right w-full md:w-3/4' > 
      <Card style={{ marginBottom:'5px'}}>
        <Card.Body>
          <Card.Title class="text-3xl">Hardware Technician</Card.Title>
          <br/>
          <br/>
          <br/>
          <br/>
          <div class='float-left'>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Posted</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>No. of Vacancy</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Job Type</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Company</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Location</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>

      </div>
        </Card.Body>
      </Card>
      <Card style={{ height: '300px', marginBottom:'5px'}}>
        <Card.Body>
          <Card.Title class='text-left text-3xl'>Job Description</Card.Title>
          <br/>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>


      <Card style={{ marginBottom:'5px'}}>
        <Card.Body>
          <div class='float-left'>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Qualifcation</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Age Limit</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Salary Range</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Country</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Gender</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Hours of work</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          

      </div>
        </Card.Body>
      </Card>


      <Card style={{ height: '200px', marginBottom:'5px'}}>
        <Card.Body>
          <Card.Title class='text-left text-3xl'>Required Documents</Card.Title>
          <br/>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ marginBottom:'5px'}}>
        <Card.Body>
          <div class='float-left'>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Key Skills</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Industry</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Nationality</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Position</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Relocation</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          <div class="inline-flex sm:w-1/3 justify-center sm:justify-start w-full">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Contract</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
          

      </div>
        </Card.Body>
      </Card>



      <div class='mt-4 w-full sm:px-8 px-12 md:px-4 overflow-hidden' style={{margin:'0 auto'}}>
      <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Timings</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
 
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Located Remotely</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
      </div>
      </div>

      <div class="float-right w-full md:w-1/4 text-sm">
      <Card class=' sticky top-0' style={{ marginBottom:'5px', borderRadius:'15px', backgroundImage: 'linear-gradient(50deg, #E61B1E, #4E47E5)'}}>
  <Card.Body>
    <Card.Title class="text-left text-2xl text-white">Let Us Call You</Card.Title>
    
    <p class="text-left text-white label-input100 mb-0 mt-2">Name</p>
  <input class="input100 mb-0 h-8 rounded w-full margin10" style={{ paddingLeft:'5px'}}  type="text" name="name" placeholder="Name"/>
  <br/>
  <p class="text-left text-white label-input100 mb-0 mt-2">Your Mobile</p>
  <input class="input100 rounded mb-0 h-8 w-full" style={{ paddingLeft:'5px'}} type="text" name="Mobile" placeholder="Mobile"/>
  <br/>
  <p class="text-left text-white label-input100 mb-0 mt-2">Email</p>
  <input class="rounded input100 mb-0 h-8 w-full" style={{ paddingLeft:'5px'}} type="text" name="email" placeholder="Email"/>
  <br/>
  <p class="text-left text-white label-input100 mb-0 mt-2">Message</p>
  <input class="rounded input100 mb-0 h-8 w-full" style={{ paddingLeft:'5px'}} type="text" name="Message" placeholder="Message"/>
  <br/>
  <br/>
  <button class="bg-white text-black py-2 px-4 float-left rounded">
      Button
  </button>

  </Card.Body>
</Card>
</div>

    </div>
    </div>

    );
}

export default Page;