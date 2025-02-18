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
    <div className="bg-gray-800 h-auto p-5 my-10 w-full max-w-md mx-auto rounded-xl text-white shadow-xl overflow-hidden flex flex-col ">

      <h1 className="mx-auto mb-4">Password generator</h1>
      <div className="overflow-hidden rounded-md mx-auto flex w-full" name="password display with button">
        <input
          type="text"
          className="bg-white px-2  text-black flex-1 mx-none rounded-l-md outline-none"
          value={password}
        />
        <button className="bg-blue-500 px-2 rounded-r-md cursor-pointer" onClick={() => copy()}> Copy </button>
      </div>

      <div className="mt-5 flex justify-between mb">

        <div className="flex items-center">
          <input
            type="range"
            className="h-1 my-2.5 mr-2 cursor-pointer"
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
          <label htmlFor="length" className="text-sm " >Length: {length}</label>
        </div>

        <div className="flex items-center" name="checkbox for nums">

          <input type="checkbox" name="cbn" id="cbn" 
          defaultChecked={numbers} 
          onChange={() => setNumbers((prev) => !prev)}/>

          <label htmlFor="cbn" className="text-sm ml-1">
            Numbers
          </label>

        </div>

        <div className="flex items-center" name="checkbox for chars">

          <input type="checkbox" name="cbc" id="cbc" 
          defaultChecked={characters} 
          onChange={() => setCharacters((prev) => !prev)}/>

          <label htmlFor="cbc" className="ml-1 text-sm">
            Characters
          </label>

        </div>

      </div>
    </div>
  );
};

export default App;
