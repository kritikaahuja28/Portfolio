import React from 'react';

const ArticlesAndContact = () => {
  return (
    <section
      id="articles-contact"
      className="snap-start min-h-screen flex flex-col justify-center items-center p-8 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="text-4xl font-semibold mb-4">Articles & Contact</h2>
      <p className="mb-4">📧 Email: youremail@example.com</p>
      <p>📱 Phone: +1234567890</p>
    </section>
  );
};

export default ArticlesAndContact;
