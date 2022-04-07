import React from 'react';
import Navigation from './../components/navbar.js';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Page2 = () => {
	return(
    <div class="bg-slate-100 h-full overflow-hidden" style={{backgroundColor: 'rgb(241 245 249)'}}>
      <div class='search h-80 w-full bg-black'>
        <div class="grid">
          <span><input class="placeholder:italic mt-40 h-10 bg-white w-1/2 border rounded-l py-2 pl-9 pr-3 shadow-sm outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
          <button class="bg-white h-10 w-24 rounded-r">Search</button></span>
        </div>
        </div>
      <div class="centr w-7/10 ml-8 md:mr-32 lg:ml-60 mr-8 md:ml-32 lg:mr-60 mt-4 overflow-hidden"  style={{ height:'100%' , justifyContent:'space-around'}}>
      <div class="lft float-left w-full md:w-3/5">
        <Card style={{marginBottom:'4px'}}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{marginBottom:'4px'}}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{marginBottom:'4px'}}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{marginBottom:'4px'}}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
        <Card class='mt-4'>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{marginBottom:'4px'}}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
      </div>
      <div class="rght float-right w-full md:w-2/5">
        <Card style={{height:'450px' , backgroundColor:'black'}}>
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

export default Page2;