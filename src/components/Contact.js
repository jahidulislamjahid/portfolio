import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import emailjs from 'emailjs-com';

import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ajf7q2h', 'template_wd91gej', e.target, 'user_HRoNB0POq01uSz2iMRTDq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  const animated = useWindowPosition('header', 0.6, 4);
  return (
    <div
      className=" min-h-screen  flex justify-center items-center  "
      id="mycontact"
    >
      <div
        style={{
          minHeight: '50vh',
          background: '#091C29',
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <div className="my-2 py-2">
          <h3 className='text-white'>Leave Your Message In The Mail</h3>
          <form onSubmit={sendEmail}>
            <div className='mb-2'>
              <textarea id="message" rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave Your Message..." name="message"></textarea>
            </div>
            <div class="mb-2">
              <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="subject" required="" name="subject" />
            </div>
            <div class="mb-2">
              <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required="" name="name" />
            </div>
            <div class="mb-2">
              <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-Mail" required="" name="email" />
            </div>

            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium p-2 rounded-lg text-sm w-full sm:w-auto px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit</button>
          </form>
        </div>
        <div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
          <h1
            className={`${animated ? '' : 'translate-y-10 opacity-0'
              } transform transition duration-3000 text-white text-5xl font-bold`}
          >
            {content.contact.title}
          </h1>
          <p
            className={`${animated ? '' : 'translate-y-10 opacity-0'
              } transform transition duration-3000 text-white text-2xl`}
          >
            {content.contact.desc}
          </p>
          <div
            className={`flex ${animated ? '' : 'translate-y-10 opacity-0'
              } transform transition duration-3000 `}
          >
            <a className="text-white text-3xl mr-3" target="_new" href="https://www.facebook.com/zahidul.islam.10420"><i class="fab fa-facebook"> </i> </a>
            <a className="text-white text-3xl mr-3" target="_new" href="https://github.com/jahidulislamjahid"><i class="fab fa-github"> </i> </a>
            <a className="text-white text-3xl mr-3" target="_new" href="https://www.linkedin.com/in/jahidul-islam-076a8b216"><i class="fab fa-linkedin"></i> </a>
            <a className="text-white text-3xl mr-3 mb-3" target="_new" href="https://twitter.com/Zahidul15053004"><i class="fab fa-twitter"></i> </a>
          </div>
        </div>
      </div>
    </div >
  );
}
