import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
    <Navbar/>
    <div className="h-screen">
      <div className="w-2/4 m-auto mt-10 mb-3">
        <h1 className='text-5xl mb-3'>Test Tester</h1>
        <p className="text-2xl text/cyan-900 ml-2">Frontend Developer</p>
      </div>

      <div className="flex space-between w-2/4 m-auto py-5 border rounded-sm px-3 shadow">
        <img alt='profile' className='rounded-full w-64 h-64 mx-8 mb-3' src='https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg'/>
        <div>
          <h5 className='text-2xl text-cyan-900 border-b-2 border-slate-300'>Biography</h5>
          <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequatur praesentium laudantium, sit laboriosam beatae eius delectus dicta accusamus voluptatum omnis natus culpa iste consectetur. Expedita itaque corrupti voluptas pariatur?</p>
        </div>
      </div>
    </div>
   </>
  );
}

export default App;
