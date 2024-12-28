import React from 'react'
import '../App.css';

export const About = () => {
  return (
    <div>
      <div class="container mt-5">
  <div class="row h-75">
    <div class="col-md-12 text-center">
      <h1 class="mb-4">About Us</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-md-1 "></div>
    <div class="col-md-5 ">
      <img 
        src="aboutusimg.webp" 
        alt="About Us" 
        class="img-fluid rounded shadow"
      />
    </div>
    <div class="col-md-5">
      <h2>Welcome to Our To-Do List!</h2>
      <p>
        At <strong>To-Do Manager</strong>, we are passionate about helping you stay organized and productive. 
        Our app is designed to simplify your life by keeping track of your tasks, priorities, and deadlines. 
        Whether you're a student, professional, or just someone looking to manage daily responsibilities, 
        our to-do list app is here to help.
      </p>
      <h4>Key Features:</h4>
      <ul>
        <li>Add and manage tasks with ease.</li>
        <li>Delete tasks when completed.</li>
        <li>Save tasks locally on your browser with no additional setup required.</li>
        <li>Simple and user-friendly interface.</li>
      </ul>
    </div>
    <div class="col-md-1 "></div>

  </div>
  <div class="row mt-5 mb-4">
    <div class="col-md-12 text-center">
      <h3>Why Choose Us?</h3>
      <p>
        We believe in simplicity and efficiency. Our To-Do App is built with modern technologies like 
        <strong>React</strong> and <strong>Bootstrap</strong>, ensuring a smooth user experience. 
        Get started today and achieve your goals, one task at a time!
      </p>
      <a href="/" class="btn btn-primary mt-3">Go Back to Home</a>
    </div>
  </div>
</div>

    </div>
  )
}

