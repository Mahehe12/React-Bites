import './index.css'

function App() {

  return (
    <>
      <div className='flex items-center justify-center w-screen h-screen bg-slate-900 '>        
        <div className='shadow-lg shadow-white w-max'>
        <div className='relative flex flex-col justify-between h-96 w-96 '>
          <img
            src='./public/pp.jpeg'
            className='object-cover inset-0 absolute w-36 h-36 rounded-full border-white border-4 m-auto'
          ></img>

          <img
            src="https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            className='h-[50%] object-cover bg-cyan-200'
          ></img>

          <div className=' flex flex-col items-center justify-end bg-white h-full py-10'>
            <div className='font-bold '>
              <h2 className='font-bold text-lg'>Mahi Sharma<span className='font-semibold opacity-50'> 20</span></h2>
              <p className='opacity-60'>Miami</p>
            </div>
          </div>
        </div>

        <hr />

        <div className='flex items-center justify-around py-4 bg-white'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>80K</h2>{' '}
            <p className='text-sm opacity-50'>Followers</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>803K</h2>{' '}
            <p className='text-sm opacity-50'>Likes</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>1.4K</h2>{' '}
            <p className='text-sm opacity-50'>Photos</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
