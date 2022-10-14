import { Header, Main } from './components'
import { useState } from 'react';

function App() {
  const [showMainModal, setShowMainModal] = useState(false);
  return (
    <div className="font-sans font-medium relative bg-slate-100">
      {showMainModal && <div className='absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-20' />}
      <Header />
      <Main showMainModal={showMainModal} setShowMainModal={setShowMainModal} />
    </div>

  );
}

export default App;
