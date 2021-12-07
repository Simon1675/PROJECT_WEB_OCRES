import React, {useState} from 'react';
//import { makeStyles} from '@material-ui/core';
import QRCode from 'qrcode';
import QR from '../styles/QR.css'




function Qr() { 
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="qrcode">
    <input className="entrée" label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
    <button  className="qr_btn"
    onClick={() => generateQrCode()}>Generate</button>
    <br/>
    <br/>
    <br/>
    {imageUrl ? (
      <a className ="lien_image" href={imageUrl} download>
      <img className="qr" src={imageUrl} alt="img"/>
      </a>) : null}
      <h1 className="titre_qr">QR code generator</h1>
      </div>
      
      );}
      
      
      export default Qr;