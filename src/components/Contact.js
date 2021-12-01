import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import JotformEmbed from 'react-jotform-embed';

import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Contact() {
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
        <div className="my-5 py-5">
          <JotformEmbed src="https://form.jotform.com/213344781404452" />
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
            <a className="text-white text-3xl mr-3" target="_new" href="https://twitter.com/Zahidul15053004"><i class="fab fa-twitter"></i> </a>
          </div>
        </div>
      </div>
    </div >
  );
}
