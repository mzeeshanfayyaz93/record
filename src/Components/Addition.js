import React, { useState } from "react";
import Deletion from "./Deletion";

const Addition = () => {
  // state used to hold and store the data
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [add, setAdd] = useState([]);

  const addData = () => {
    // Spread operator used to store and add previous data into the array
      setAdd ([...add, {
        fname: fname,
        lname: lname
      }]);
      // to removed the data from field once enter
      setFname("");
      setLname("");
  }
 
  return ( 
    <div>
       <div class="max-width: 640px;">
        <div className="grid md:grid-cols-3 md:gap-6">
          <div></div>
          <div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="First Name"
                  className="input w-full max-w-lg bg-zinc-200 py-4 px-2"
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Last Name"
                  className="input w-full max-w-lg bg-zinc-200 py-4 px-2"
                />
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  onClick={addData}
                  className="text-white bg-black hover:bg-blue-800 w-28 py-3">
                Add Data
                </button>
              </div>
              <div className="flex justify-between bg-black p-3 text-white mt-10">
                <h2 className="text-lg text-center">First Name</h2>
                <h2 className="text-lg text-center">Last Name</h2>
                <h2 className="text-lg text-center">Delete Name</h2>
              </div>
          </div>
          <div></div>
        </div>
      </div>
    {/* Props Pass for Data Delete to Delete Component   */}
      {
        add.map((e, i) => {
          return (
            <Deletion key={i} firstname={e.fname} lastname={e.lname} index={i} add={add} setAdd={setAdd} />
          )
        })
      }
    </div>
  );
};

export default Addition;
