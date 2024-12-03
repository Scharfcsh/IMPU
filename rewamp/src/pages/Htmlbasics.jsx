import React from 'react'

const Htmlbasics = () => {
  return (
    <>
    
    <p className='font-bold text-center text-5xl'>
      THIS IS A SAMPLE PAGE WITH DIFFERENT TAGS
    </p>

    <div className='p-3 w-auto'>
      <p>H tags</p>
      <h1>h1 Tag</h1>
      <h2>h2 Tag</h2>
      <h3>h3 Tag</h3>
      <h4>h4 Tag</h4>
      <h5>h5 Tag</h5>
      <h6>h6 Tag</h6>
    </div>

    <br />

    <p>Img Tag</p>
    <img src={logo} alt="img" className='h-10 w-10' />

    <br />

    <div>
      <input type="text" placeholder='insert something....' className='border-b-4 border-blue-500' />
    </div>

    <br />

    <div>
      <p>Button Tag</p>
      <button className='bg-blue-500 text-white p-2 rounded' onClick={()=>(alert("sab sahi h"))}>Click Me</button>
    </div>

    <br />

    <div>
      <p>Anchor Tag</p>
      <a href="https://github.com/Scharfcsh" className='text-blue-500 underline'>Visit Example</a>
    </div>

    <br />

    <div>
      <p>List Tags</p>
      <ul className='list-disc pl-5'>
        <li>Unordered List Item 1</li>
        <li>Unordered List Item 2</li>
      </ul>
      <ol className='list-decimal pl-5'>
        <li>Ordered List Item 1</li>
        <li>Ordered List Item 2</li>
      </ol>
    </div>

    <br />

    <div>
      <p>Table Tag</p>
      <table className='table-auto border-collapse border border-gray-400'>
        <thead>
          <tr>
            <th className='border border-gray-300 px-4 py-2'>Header 1</th>
            <th className='border border-gray-300 px-4 py-2'>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-gray-300 px-4 py-2'>Data 1</td>
            <td className='border border-gray-300 px-4 py-2'>Data 2</td>
          </tr>
          <tr>
            <td className='border border-gray-300 px-4 py-2'>Data 3</td>
            <td className='border border-gray-300 px-4 py-2'>Data 4</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    
    </>
  )
}

export default Htmlbasics