import React from 'react';
import {Link} from 'react-router-dom';
const Careers = () => {
    return ( 
        <div className="w-full flex items-center justify-center text-white cta">
            <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">                    
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className="mb-4">
                        <p className='text-2xl md:text-4xl font-bold mb-4'>In working to transform the livelihoods of the marginalized, ALC India recognizes the need to work with committed professionals, expert associates, enthusiastic interns and volunteers. We offer suitable opportunities for consultants, associates, interns and volunteers so that some of the best minds can apply their capabilities to the livelihoods of the marginalized in a challenging, fulfilling and rewarding manner. </p>
                        <hr />
                        <h4 className='text-teal-900'> At any point in time, there are many challenging assignments at ALC India. We are constantly on the lookout for consultants who wish to apply their skills in transforming the livelihoods of economically marginalized communities.</h4> 
                        <p className="text-lg md:text-2xl">An association with ALC India is an opportunity to apply your intellect and capabilities in the transformation of livelihoods. It will open up a less travelled career path that is challenging and fulfilling. <span className='font-black'>Submit your resume at <a href='hr@alcindia.org'> hr@alcindia.org </a></span></p>
                        <button> <p className='text-rose-800'>Or </p> Click Here To Apply </button>
                    </div>
                    
                    <div className="w-full lg:w-72 pt-6 lg:mx-12">
                        <Link to="/contact" className="bg-transparent border hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">Send a message
                        <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Careers;