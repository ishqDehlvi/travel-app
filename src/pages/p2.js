import React from 'react';
import Navigation from './../components/navbar.js';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from '../useFetch.js';

const Page2 = () => {
  const { data: jobs, isPending, error } = useFetch("http://localhost:1337/api/jobs?populate=*")
 
  return (
    <div className="bg-slate-100 h-full overflow-visible" style={{ backgroundColor: 'rgb(241 245 249)' }}>
      <div className='search h-80 w-full' style={{backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'>
        <div className="grid">
          <span><input className="placeholder:italic mt-40 h-10 bg-white w-1/2 border rounded-l py-2 pl-9 pr-3 shadow-sm outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
            <button className="bg-white h-10 w-24 rounded-r">Search</button></span>
        </div>
      </div>
      <div className="centr w-7/10 ml-8 md:mr-32 lg:ml-60 mr-8 md:ml-32 lg:mr-60 mt-4 inline-flex" style={{ height: '100%', justifyContent: 'space-around' }}>
        <div className="lft float-left w-full md:w-3/5">

          <div>
            {isPending && <div>Loading...</div>}
            {jobs && jobs.data.map(job => <Card key={job.id} style={{ marginBottom: '4px' }}>
              <Card.Body>
              { jobs && console.log(job.attributes.image.data.attributes.formats.medium.url) }
                    <img src={`http://localhost:1337${job.attributes.image.data.attributes.formats.medium.url}`} alt="img" />
                
                <Card.Title>{job.attributes.jobTitle}</Card.Title>
                <Card.Text>
                  {job.attributes.jobDescription}
                </Card.Text>
              </Card.Body>
            </Card>
            )}
            <Card.Body>
          <Card.Title class="text-3xl">Hardware Technician</Card.Title>
          <br/>
          <br/>
          <div class="inline-flex w-full">
          <img class='h-24 w-24 ml-0 md:ml-12'/>
          <div class="txt">
          <p>Tags</p>
          <p>ratings</p>
          <button class="bg-white text-black py-2 px-4  rounded">
      Apply Now</button>
      </div>
      </div>
        </Card.Body>

          </div>

        </div>
        <div class="rght float-right w-full md:w-2/5 sticky top-0" style={{height:'480px', position: '-webkit-sticky' , position:'sticky',top:'0'}}>
          <Card style={{ height: '450px', backgroundImage: 'linear-gradient(#E61B1E, #4E47E5)' }}>
            <Card.Body>
              <Card.Title className="text-left text-2xl text-white">Let Us Call You</Card.Title>
              <br />
              <p className="text-left text-white label-input100">Name</p>
              <input className="input100 mb-0 h-8 w-full" type="text" name="name" placeholder="Name" />
              <br />
              <p className="text-left text-white label-input100">Email</p>
              <input className="input100 mb-0 h-8 w-full" type="text" name="email" placeholder="Email" />
              <br />
              <p className="text-left text-white label-input100">Message</p>
              <textarea className="input100 mb-0 w-full" type="text" rows='5' cols='60' name="msg" placeholder="Message" />
              <br />
              <button className="bg-white text-black py-2 px-4 float-left rounded">
                Button
              </button>

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

  );
}

export default Page2;
