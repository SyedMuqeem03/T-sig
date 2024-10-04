import { useEffect } from "react";
import Btn from "./components/Btn";
import Item from "./components/Item";

import Navbar from "./components/Navbar";
import {getData} from './db/supabase'
function App() {
  
  const data = async ()=>{
    let {data} = await getData()
    console.log(data);
  }
  return (
    <div className="bg-slate-500 min-h-screen ">
      <Navbar />
      <Btn handleOnClick={data}/>
      <div className="grid m-4 mt-0 gap-1">
        <Item/>
        
      </div>
      
    </div>
  );
}

export default App;
