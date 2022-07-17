import React, {useState}  from 'react'


export default function Text(props) {
    const upclick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        SetText(newText)
    }
    const loclick = ()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        SetText(newText)
    }
    const clearclick = ()=>{
        console.log("clear clicked" + text);
        let newText = ("");
        SetText(newText)
    }
    
        const change = (event)=>{
        console.log("on change");
        SetText(event.target.value)
    }
    const[text,SetText] = useState('type here');
    return (
      <>
      <div>
        
        <div className="mb-3">
        <textarea class="form-control" value={text} onChange={change} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="6"></textarea>
        </div>
        <button className="btn" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onClick={upclick}>click for uppercase</button >
        <button className="mx-1 btn"style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onClick={loclick}>click for lowercase</button>
        <button className="btn"style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onClick={clearclick}>clear</button>
      </div>
      <div>
        <div className="" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p> {text} </p>
        </div>
      </div>
      </>
    )
  }
