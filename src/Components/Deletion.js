import React from 'react'

const Deletion = ({firstname, lastname, index, add, setAdd}) => {

  const deletedata = (i) => {
    let arr = add;
      arr.splice(i, 1);
      setAdd([...arr]); 
  }

  return (
    <>
    <div class="max-width: 640px;">
        <div className="grid md:grid-cols-3 md:gap-6">
          <div></div>
          <div>
          <div key={index} className="flex items-center justify-between border-t-0 border-2 border-indigo-300 p-3 ">
                <h2 className="text-lg text-center">{firstname}</h2>
                <h2 className="text-lg text-center">{lastname}</h2>
                <h2 className="text-lg text-center bg-red-700 py-2 px-4 text-white" onClick={() => deletedata(index)}>Delete</h2>
          </div>
          </div>
          <div></div>
        </div>
    </div>
       
    </>
  )
}

export default Deletion

