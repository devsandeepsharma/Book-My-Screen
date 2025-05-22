import emailjs from '@emailjs/browser';

const sendEmail = ({ email, userName, movieName, showtime }) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      email,
      userName,
      movieName,
      showtime,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};

export default sendEmail;