import Editor from './Editor';
import Preview from './Preview';
import './App.css';

function App() {
  return (
    <div className="App ">
      <div className='min-h-screen grid sm:grid-cols-2 gap-4'>
        <div className='bg-slate-100 p-8'>
          <Editor />
        </div>
        <div className='bg-slate-100 p-8'>
          <Preview />
        </div>
      </div>
    </div>
  );
}

export default App;
