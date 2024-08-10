import React from 'react';
import { useForm } from 'react-hook-form';
import "./style/ContactForm.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    reset(); // Reset form after submission
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          className={errors.name ? "error-style" : ""}
          type="text"
          {...register('name', { required: 'Name is required!' })}
        />
        {/* {errors.name && <p className="error-message">{errors.name.message}</p>} */}
        
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          className={errors.email ? "error-style" : ""}
          type="email"
          {...register('email', {
            required: 'Email is required!',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
            },
          })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          className={errors.message ? "error-style" : ""}
          {...register('message', { required: 'Message is required!' })}
        />
        {/* {errors.message && <p className="error-message">{errors.message.message}</p>} */}
      </div>

      {(errors.name||errors.email||errors.message) && <p className="error-message">Please fill out all required fields.</p>}

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
