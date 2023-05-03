import React from 'react';
import { Link, useRouteError } from 'react-router-dom'
import errorr from "../../assets/error.jpg"
import { Card } from 'react-bootstrap';

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <div>
      <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
          <Card.Img variant="top" src={errorr} />
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900 text-decoration-none'
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ErrorPage;