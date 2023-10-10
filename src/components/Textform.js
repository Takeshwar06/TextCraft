import React,{useState} from 'react'

export default function Textform(props) {
  const[text, setText]=useState('')
  const clickUp=()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showAlert('Text has been converted to Upper case','success')
  }
  const removeExtraspace=()=>{
    let newtext=text.split(/[  ]+/);
    setText(newtext.join(' '))
    props.showAlert('Removed your extra spaces','success')
  }
  const clickLo=()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert('Text has been converted to Lower case','success')
  }
  const copyText=()=>{
    // let text=document.getElementById('mybox')
    // text.select();
    navigator.clipboard.writeText(text); //text.value
    // document.getSelection().removeAllRanges();
    props.showAlert('Text has been copy to clipboard','success')
  }
  const clickClear=()=>{
    setText("")
    props.showAlert('Text has been clear','warning')
  }
  const onChange=(event)=>{
    setText(event.target.value)
  }
 

 
  return (
    <> 
    
       <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Enter the text to analize</h1>
        <div className="mb-3">
        <textarea  className="form-control" id="mybox" style={{backgroundColor: props.mode === 'dark'?'#343c59':'white' , color: props.mode==='light'?'black':'white'}}  value={text} onChange={onChange} rows="6"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={clickUp}>Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clickLo}>Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyText}>copyText</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={removeExtraspace}>removeExtraspace</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={clickClear}>Cleartext</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>your text summary</h2>
      <p>[{text.split(/\s/).filter((element)=>{ return element.length !==0}).length}] WORDS AND [{text.length}] CHARACTERS</p>
      <p>{(0.008)*(text.split(" ").filter((element)=>{return element.length !==0}).length)} MINUTES READ</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Nothing in the textform!"}</p>
    </div>
    </>

  )
}
