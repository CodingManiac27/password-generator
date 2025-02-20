import React, { use } from "react";
import { useState, useCallback, useEffect } from "react";

const App = () => {

  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("password")
  const [length, setLength] = useState(8)
  
  const showpassword = useCallback(() => {
    
    let pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let nums = "1234567890"
    let chars = "!@#$%&*()"
    
    let pass_str = ""
    if(numbers) pass += nums
    if(characters) pass += chars

    for(let i = 1; i < length; i++){
      pass_str += pass[Math.floor(Math.random() * pass.length)]
    }

    setPassword(pass_str)

  }, [length, numbers, characters])

  useEffect(() => {showpassword()}, [length, numbers, characters])

  const copy = () => {
    navigator.clipboard.writeText(password)
      .then(window.alert("copied succesfully!"))
  }

  return (
    <div className="bg-gray-800 max-h-auto h-62 p-5 my-10 m-w-full w-[48rem] mx-auto rounded-xl text-white shadow-xl overflow-hidden flex flex-col ">

      <h1 className="mx-auto mb-10 mt-2 text-3xl cursor-default font-semibold font-mono [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)]" id="heading">Password generator</h1>
      <div className=" rounded-md mx-4 flex w-auto mb-2" name="password display with button">
        <input
          type="text"
          className="bg-white px-4 p-3 h-12 italic text-xl text-black flex-1 mx-none rounded-l-md outline-none max-w-auto w- "
          value={password}
        />
        <button className="bg-blue-500 px-2 rounded-r-md cursor-pointer w-18 text-lg" onClick={() => copy()}> Copy </button>
      </div>

      <div className="mt-5 flex justify-between mb">

        <div className="flex items-center">
          <input
            type="range"
            className="h-1 my-2.5 mr-4 ml-5 cursor-pointer "
            min={8}
            max={30}
            value={length}
            name=""
            id=""
            onChange={(val) => {
              setLength(val.target.value)
              showpassword()
            }}
          />
          <label htmlFor="length" className="text-xl" >Length : {length}</label>
        </div>

        <div className="flex items-center" name="checkbox for nums">

          <input type="checkbox" name="cbn" id="cbn" className="w-5 h-5 mr-1 cursor-pointer"
          defaultChecked={numbers} 
          onChange={() => setNumbers((prev) => !prev)}/>

          <label htmlFor="cbn" className="text-xl ml-1 ">
            Numbers
          </label>

        </div>

        <div className="flex items-center mr-4" name="checkbox for chars">

          <input type="checkbox" name="cbc" id="cbc" className="w-5 h-5 mr-1 cursor-pointer"
          defaultChecked={characters} 
          onChange={() => setCharacters((prev) => !prev)}/>

          <label htmlFor="cbc" className="ml-1 text-xl">
            Characters
          </label>

        </div>

      </div>
    </div>
  );
};

export default App;
