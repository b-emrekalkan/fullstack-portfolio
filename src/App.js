import { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const homeRef = useRef(null)
  const educationRef = useRef(null)
  const workRef = useRef(null)
  const portfolioRef = useRef(null)
  return (
   <>
    <Navbar homeRef={homeRef} educationRef={educationRef} workRef={workRef} portfolioRef={portfolioRef}/>
    
    {/* PROFILE CARD STARTED */}
    <div className="md:h-screen pt-10" ref={homeRef}>
      <div className="md:w-2/4 w-10/12 m-auto mt-10 mb-3">
        <h1 className='text-5xl mb-3'>Test Tester</h1>
        <p className="text-2xl text/cyan-900 ml-2">Fullstack Developer</p>
      </div>

      <div className="flex md:flex-row flex-col space-between md:w-2/4 m-auto py-5 border rounded-sm px-3 shadow">
        <img alt='profile' className='rounded-full w-64 h-64 mx-8 mb-3' src='https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg'/>
        <div>
          <h5 className='text-2xl text-cyan-900 border-b-2 border-slate-300'>Biography</h5>
          <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequatur praesentium laudantium, sit laboriosam beatae eius delectus dicta accusamus voluptatum omnis natus culpa iste consectetur. Expedita itaque corrupti voluptas pariatur?</p>
        </div>
      </div>
    </div>
    {/* PROFILE CARD FINISHED */}


    {/* EDUCATION CARD STARTED */}
    <div className='md:h-screen pt-16'  ref={educationRef}>
      <div className='mb-5 mx-5'>
        <h1 className='text-5xl mb-3'>My Education</h1>
        <p className="text-lg text-cyan-900 ">Here is the education that I have received.</p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-5">
        <div className="border rounded-sm p-3 shadow">
          <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>School, Computer Science</h3>
          <h5 className="py-2">2010-2013</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nam autem eius ipsa quis reprehenderit voluptatem explicabo sunt ratione deleniti.</p>
        </div>
        <div className="border rounded-sm p-3 shadow">
          <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>School, Computer Science</h3>
          <h5 className="py-2">2010-2013</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nam autem eius ipsa quis reprehenderit voluptatem explicabo sunt ratione deleniti.</p>
        </div>
        <div className="border rounded-sm p-3 shadow">
          <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>School, Computer Science</h3>
          <h5 className="py-2">2010-2013</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nam autem eius ipsa quis reprehenderit voluptatem explicabo sunt ratione deleniti.</p>
        </div>
      </div>
    </div>
    {/* EDUCATION CARD FINISHED */}

    {/* WORK EXPERIENCE STARTED */}
    <div className='md:h-screen pt-16'  ref={workRef}>
      <div className='mb-5 mx-5'>
        <h1 className='text-5xl mb-3'>My Work Experience</h1>
        <p className="text-lg text-cyan-900 ">Here is some of my most recent relevant work experience.</p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-5">
        <div className="border rounded-sm p-3 shadow">
          <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>Company, Fullstack Developer</h3>
          <h5 className="py-2">2010-2013</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nam autem eius ipsa quis reprehenderit voluptatem explicabo sunt ratione deleniti.</p>
        </div>
        <div className="border rounded-sm p-3 shadow">
          <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>Company, Fullstack Developer</h3>
          <h5 className="py-2">2010-2013</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nam autem eius ipsa quis reprehenderit voluptatem explicabo sunt ratione deleniti.</p>
        </div>
        <div className="border rounded-sm p-3 shadow">
          <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>Company, Fullstack Developer</h3>
          <h5 className="py-2">2010-2013</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nam autem eius ipsa quis reprehenderit voluptatem explicabo sunt ratione deleniti.</p>
        </div>
      </div>
    </div>
    {/* WORK EXPERIENCE FINISHED */}

    {/* PORTFOLIO STARTED */}
    <div className='md:h-screen pt-16'  ref={portfolioRef}>
      <div className='mb-5 mx-5'>
        <h1 className='text-5xl mb-3'>My Portfolio</h1>
        <p className="text-lg text-cyan-900 ">Take a look at some of my most recent projects that I have built and the linked code on GitHub.</p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-5">
        <div className="border rounded-sm p-3 shadow">
          <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>Title</h3>
          <h5 className="py-2 text-blue-500 hover:text-700 transition cursor-pointer">View Code</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nam autem eius ipsa quis reprehenderit voluptatem explicabo sunt ratione deleniti.</p>
        </div>
        <div className="border rounded-sm p-3 shadow">
          <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>Title</h3>
          <h5 className="py-2 text-blue-500 hover:text-700 transition cursor-pointer">View Code</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nam autem eius ipsa quis reprehenderit voluptatem explicabo sunt ratione deleniti.</p>
        </div>
        <div className="border rounded-sm p-3 shadow">
          <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>Title</h3>
          <h5 className="py-2 text-blue-500 hover:text-700 transition cursor-pointer">View Code</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nam autem eius ipsa quis reprehenderit voluptatem explicabo sunt ratione deleniti.</p>
        </div>
      </div>
    </div>
    {/* PORTFOLIO FINISHED */}
   </>
  );
}

export default App;
