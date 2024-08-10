import React from 'react';
import ContactForm from './components/ContactForm';
import "./components/style/ContactForm.css";
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1><ContactPhoneOutlinedIcon className='contact-icon'/>Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default App;
