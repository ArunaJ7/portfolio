// components
import Circles from '/components/Circles';

// icons
import {BsArrowRight} from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// varients
import {fadeIn} from '../../variants';


import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import React, { useRef, useEffect, useState } from 'react';

const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors, isValid }, } = useForm({ mode: 'onTouched' });
  const formRef = useRef();
  const [message, setMessage] = useState();

  const onSubmit = (data) => {
    if (isValid) {
      emailjs.sendForm(
        'service_hxptpgf',
        'template_vv6ezxa',
        formRef.current,
        'k33QjCPc2k2XaQbA9'
      ).then(
        (result) => {
          console.log(result.text);
          setMessage('Message sent successfully!');
          reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          setMessage('Failed to send message. Please try again later.');
        }
      );
    }
  };

  // Automatically clear the message after 10 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 10000); // 10 seconds
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [message]);

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex
      items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
             ref={formRef}
             onSubmit={handleSubmit(onSubmit)}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input 
                type='text' 
                placeholder='name' 
                className='input' 
                {...register('name', {required : 'Name is required'})} 
              />
               {errors.name && (
                  <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                )}

              <input type='text'
                  placeholder='email'
                  className='input' 
                  {...register('email', {
                    required: 'Email is required', 
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Invalid email format'
                    }
                  })}
                />
                 {errors.email && (
                  <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                )}
            </div>

            <input 
              type='text' 
              placeholder='subject' 
              className='input' 
              {...register('subject', { required: 'Subject is required' })}
            />
            {errors.subject && (
                <span className="text-red-500 text-sm mt-1">{errors.subject.message}</span>
              )}
            <textarea 
              placeholder='message' 
              className='textarea' 
              {...register('message', { required: 'Message is required' })}
            >
            </textarea>
            {errors.message && (
                <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
              )}

            <button className='btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center
            overflow-hidden hover:border-accent group' type='submit'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[22px]'/>
            </button>
          </motion.form>
          

          {/* Success/Failure Message */}
          {message && (
            <p
              className={`text-center mt-4 text-sm ${
                message.includes('successfully') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
