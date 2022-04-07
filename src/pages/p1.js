import React from 'react';
import Navigation from './../components/navbar.js';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Page = () => {
	return(
		<div class='bg-slate-100 h-full'>
		<div class='search h-80 w-full bg-black'>
			<div class="grid">
				<span><input class="placeholder:italic mt-40 h-10 bg-white w-1/2 border rounded-l py-2 pl-9 pr-3 shadow-sm outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
				<button class="bg-white h-10 w-24 rounded-r">Search</button></span>
			</div>
		</div>
		<div class="cntr mx-8 w-9/10 block md:mx-40 mt-6 md:inline-flex " style={{ justifyContent:'space-around'}}>
			<div class='left w-full md:w-2/3' > 
			<Card style={{ height: '350px' , marginBottom:'5px'}}>
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
      <Card style={{height: '300px'}}>
  <Card.Body>
    <Card.Title class="text-left text-2xl text-black">Job Details</Card.Title>
    <br/>
    <p>Xyz</p>
  </Card.Body>
</Card>
<Card style={{height: '100px'}}>
  <Card.Body>
    <br/>
    <span><p class='float-left'>Job ID</p><p class='float-right'>#123456</p></span>
  </Card.Body>
</Card>
      </div>
      <div class="w-full md:w-96">
      <Card style={{ backgroundColor:'black', height: '450px'}}>
  <Card.Body>
    <Card.Title class="text-left text-2xl text-white">Let Us Call You</Card.Title>
    <br/>
    <p class="text-left text-white label-input100">Name</p>
	<input class="input100 mb-0 h-8 w-full" type="text" name="name" placeholder="Name"/>
	<br/>
	<p class="text-left text-white label-input100">Email</p>
	<input class="input100 mb-0 h-8 w-full" type="text" name="email" placeholder="Email"/>
	<br/>
	<p class="text-left text-white label-input100">Message</p>
	<textarea class="input100 mb-0 w-full" type="text" rows='5' cols='60' name="msg" placeholder="Message"/>
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
