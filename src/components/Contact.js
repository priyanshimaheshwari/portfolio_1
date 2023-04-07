import React, { useRef } from 'react';
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const contact = () => {
    const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_llqfrb4', 'template_yo3zho9', form.current, 'xu1ufqCGivmb5pdEG')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);

        
    });

    e.target.reset()

     
  };

  return (
    <section id="Contact">
      <div className='pt-16 text-center'>
        <h5 className='text-gray-400'>Get In Touch</h5>
        <h2 className='text-blue-400 text-2xl font-bold'>Contact Me</h2>
      </div>
      <div className='flex gap-20'>
        <div className='grid grid-rows-3 gap-8 pl-60'>
          <article  className='bg-blue-900 p-4 rounded-xl border-solid border-2 hover:bg-transparent border-blue-900 '>
             <MdOutlineEmail />
             <h4>Email</h4>
             <h5>priyanshimaheshwari16@gmail.com</h5>
             <a className='text-blue-400'
             href="mailto:priyanshimaheshwari16@gmail.com">Send a message</a>
          </article>
          <article  className='bg-blue-900 p-4 rounded-xl border-solid border-2 hover:bg-transparent border-blue-900'>
             <RiMessengerLine />
             <h4>Messenger</h4>
             <h5></h5>
             <a href="" className='text-blue-400'>Send a message</a>
          </article>
          <article  className='bg-blue-900 p-4 rounded-xl border-solid border-2 hover:bg-transparent border-blue-900'>
             <BsWhatsapp />
             <h4>Whatsapp</h4>
             <h5></h5>
             <a href="" className='text-blue-400'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col '>
          <input type="text" name="name" placeholder='Your full name' required className='bg-transparent rounded-xl border-solid border-2 border-blue-900 px-4 py-4 m-2'/>
          <input type="email" name="email" placeholder='Your email' className='bg-transparent rounded-xl border-solid border-2 border-blue-900 px-4 py-4 m-2' required />
          <textarea name="message" rows="7" placeholder='Your Message' className='bg-transparent rounded-xl border-solid border-2 border-blue-900 px-4 py-4 m-2'></textarea>
          <button type="submit" className='border bg-blue-400 text-blue-900 border-blue-400 py-2 px-5 rounded-md hover:bg-white/[0.6] hover:text-blue-900'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default contact