import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const socialBtnStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    background: 'rgba(59, 130, 246, 0.2)',
    color: '#3b82f6',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid #3b82f6'
  };

  return (
    <div style={containerStyle}>
      <img
        src="/dp.jpg"
        alt="Profile"
        style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #3b82f6', marginBottom: '20px', boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)' }}
      />
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>About Me</h2>
      <h3 style={{ fontSize: '1.5rem', color: '#3b82f6', marginBottom: '15px' }}>Himanshu Singh</h3>

      <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 30px auto' }}>
        Welcome to my e-commerce platform! I am passionate about building modern web applications.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <a href="https://github.com/Himanshu-Ssingh" target="_blank" rel="noreferrer" style={{ ...socialBtnStyle, background: 'rgba(255, 255, 255, 0.1)', borderColor: '#fff', color: '#fff' }}>💻 GitHub</a>
        <a href="https://www.linkedin.com/in/himanshu-singh-760883358/" target="_blank" rel="noreferrer" style={socialBtnStyle}>💼 LinkedIn</a>
      </div>
    </div>
  );
};

export default About;
