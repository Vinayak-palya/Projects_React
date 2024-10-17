import { useState , useCallback  , useEffect , useRef} from 'react'

// import './App.css'

function App() {
  const [Length , setLength] = useState(8)
  const [NumberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setcharAllowed] = useState(false);
  const [password , setpassword] = useState("");
  // useRef hook
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(NumberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()-_+=[]{}~`"

    for (let i = 1; i <= Length; i++) {
    let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char);

    }
    setpassword(pass)
  } , [Length , NumberAllowed , charAllowed , setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0 ,100)

    window.navigator.clipboard.writeText(password)
  } , [password])


  useEffect(()=>{
    passwordGenerator()
  } , [Length , NumberAllowed , charAllowed , passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
          <h1 className='text-white text-center my-3'>
            PasswordGenerator
          </h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
            <input type="text" 
            value = {password} 
            className='outline-none w-full py-1 px-3' 
            placeholder='password'  
            readOnly
            ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>
          <div className="text-sm flex gap-x-2">
            <div className="flex item-center gap-x-1">
              <input 
              type="range"
              min={6}
              max={100}
              value = {Length}
              className='cursor-pointer'  
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>Length : {Length}</label>
            </div>

            <div className="flex item-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked = {NumberAllowed}
              id = "numberInput"
              className='cursor-pointer'  
              onChange={()=>{setNumberAllowed((prev) => !prev);
              }}
              />
              <label htmlFor='numberInput'>Numbers</label>
            </div>

            <div className="flex item-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked = {charAllowed}
              id = "charInput"
              className='cursor-pointer'  
              onChange={()=>{setcharAllowed((prev) => !prev);
              }}
              />
              <label htmlFor='charInput'>Characters</label>
            </div>
          </div>
      </div>
        
    </>
  )
}

export default App
