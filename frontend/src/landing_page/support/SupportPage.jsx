import React from 'react';
import Navbar from '../Navbar'; // Line 6
import Footer from '../Footer'; // Line 7


function SupportPage() {
  return (
    <>
      <Navbar />  {/* Add this to use the Navbar */}
      <div className="container p-5">
        <h1>Support Portal</h1>
         {/* Or whatever content belongs here */}
      </div>
      <Footer />  {/* Add this to use the Footer */}
    </>
  );
}

export default SupportPage;