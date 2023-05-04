import React from 'react';
import './Blog.css'
import { Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const Blog = () => {
      const ref = React.createRef();
      const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [13,10]
      };

    return (
        <>
           <div>
           <Pdf targetRef={ref} filename="blog.pdf" options={options}>
           {({ toPdf }) => <Button onClick={toPdf} className='download-btn' variant="outline-secondary"><FaDownload/></Button>}
           </Pdf>
           </div>
         <div ref={ref} className='question-container'>
            <h1 className='p-7 text-center'>Blog Questions</h1>
          <div className='question'>
            <h4 className='font-bold'>Question 1: Tell us the differences between uncontrolled and controlled components?</h4>
            <p><span className='font-medium'>Answer:</span> <br />
            Uncontrolled components are form inputs (such as text inputs or checkboxes) whose 
            values are managed by the DOM, rather than by React. This means that when the user 
            interacts with the input (by typing in a text box, for example), the value of the input
             is updated directly in the DOM, and not in React's state. Uncontrolled components are 
             generally simpler to set up than controlled components, but they can be harder to
              work with if you need to access or update their values from React. <br />

              Controlled components, on the other hand, are form inputs whose values are 
              managed by React. This means that the value of the input is stored in React's 
              state, and is only updated when the state changes. This allows you to easily 
              access and update the value of the input from within your React code, and to 
              perform actions based on the current value of the input. Controlled components 
              are generally more powerful and flexible than uncontrolled components, 
              but they can also be more complex to set up.
            </p> 
          </div>
          <div className='question'>
            <h4 className='font-bold'>Question 2: How to validate React props using PropTypes?</h4>
            <p><span className='font-medium'>Answer:</span> <br />
            PropTypes is a built-in library in React that allows you to validate the props 
            passed to a component. You can use PropTypes to specify the type and shape of 
            props that your component expects, and to provide error messages if the props 
            do not match the expected type or shape. <br />
            </p> 
          </div>
          <div className='question'>
            <h4 className='font-bold'>Question 3: Tell us the difference between nodejs and express js?</h4>
            <p><span className='font-medium'>Answer:</span> <br />
            Node.js and Express.js are both popular technologies used in building server-side 
            applications. Node.js is a runtime environment that allows developers to build 
            server-side applications using JavaScript, while Express.js is a web application 
            framework that is built on top of Node.js. <br />

            Here are some of the key differences between Node.js and Express.js: <br />
            Routing: While Node.js provides basic routing capabilities, Express.js provides 
            a more advanced routing system that allows developers to define routes for 
            handling HTTP requests. This makes it easier to organize and manage the different 
            parts of a web application. <br />
            Middleware: Express.js provides a middleware system that allows developers 
            to add functionality to their application at various stages of the 
            request/response cycle. This makes it easier to add features such as 
            authentication, error handling, and logging to a web application.
            </p> 
          </div>
          <div className='question'>
            <h4 className='font-bold'>Question 4: What is a custom hook, and why will you create a custom hook??</h4>
            <p><span className='font-medium'>Answer:</span> <br />
            A custom hook in React is a function that encapsulates reusable logic, 
            and can be shared between multiple components. Custom hooks are a way to 
            extract common functionality from components and share it between them,
             without having to duplicate code.
             Custom hooks can be used to perform a wide variety of tasks, such as managing 
             state, handling events, and making network requests. By creating a custom hook, 
             you can abstract away complex logic and provide a simpler interface for your 
             components to use.
            </p> 
          </div>
        </div>
        </>
    );
};

export default Blog;