import React from 'react';
import Navigation from './../components/navbar.js';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from '../useFetch.js';
const Page = () => {
  let id=1;
  const { data: job, isPending, error } = useFetch("http://localhost:1337/api/jobs/"+id+"?populate=*")
	{job && console.log(job.data.attributes.Tags)}

  return(
		<div className='bg-slate-100 h-full'>
		<div className='search h-80 w-full bg-black'>
			<div className="grid">
				<span><input className="placeholder:italic mt-40 h-10 bg-white w-1/2 border rounded-l py-2 pl-9 pr-3 shadow-sm outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
				<button className="bg-white h-10 w-24 rounded-r">Search</button></span>
			</div>
		</div>

    {isPending&& <div>Loading</div>}

	{job&&	<div className="cntr mx-8 w-9/10 block md:mx-40 mt-6 md:inline-flex " style={{ justifyContent:'space-around'}}>
			<div className='left w-full md:w-2/3' > 
			<Card style={{ height: '350px' , marginBottom:'5px'}}>
        <Card.Body>
          <Card.Title className="text-3xl">{job.data.attributes.jobTitle}</Card.Title>
          <br/>
          <br/>
          <div className="inline-flex w-full">

         <img src={`http://localhost:1337${job.data.attributes.image.data.attributes.formats.medium.url}`} className='h-24 w-24 ml-0 md:ml-12'/> 
          
          <div className="txt">
          {job.data.attributes.Tags.map(tag =><span key={tag.id}>
           {tag.tag} {" "}
          </span>)}
          <p>{job.data.attributes.Rating}</p>
          <button className="bg-white text-black py-2 px-4  rounded">
  		Apply Now</button>
  		</div>
  		</div>
        </Card.Body>
      </Card>
      <Card style={{ height: '300px', marginBottom:'5px'}}>
        <Card.Body>
          <Card.Title className='text-left text-3xl'>{job.data.attributes.jobDescription}</Card.Title>
          
        </Card.Body>
      </Card>
      <Card style={{height: '300px'}}>
  <Card.Body>
    <Card.Title className="text-left text-2xl text-black">{job.data.attributes.jobDetails}</Card.Title>
    
  </Card.Body>
</Card>
<Card style={{height: '100px'}}>
  <Card.Body>
    <br/>
    <span><p className='float-left'>Job ID</p><p className='float-right'>#123456</p></span>
  </Card.Body>
</Card>
      </div>
      <div className="w-full md:w-96">
      <Card style={{ backgroundColor:'black', height: '450px'}}>
  <Card.Body>
    <Card.Title className="text-left text-2xl text-white">Let Us Call You</Card.Title>
    <br/>
    <p className="text-left text-white label-input100">Name</p>
	<input className="input100 mb-0 h-8 w-full" type="text" name="name" placeholder="Name"/>
	<br/>
	<p className="text-left text-white label-input100">Email</p>
	<input className="input100 mb-0 h-8 w-full" type="text" name="email" placeholder="Email"/>
	<br/>
	<p className="text-left text-white label-input100">Message</p>
	<textarea className="input100 mb-0 w-full" type="text" rows='5' cols='60' name="msg" placeholder="Message"/>
	<br/>
	<button className="bg-white text-black py-2 px-4 float-left rounded">
  		Button
	</button>

  </Card.Body>
</Card>
</div>

		</div>}
		</div>

		);
}

export default Page;
