/* eslint-disable react-hooks/rules-of-hooks */
// import img from '../assests/img.jpeg'
import { Link } from 'react-router-dom'
import {QRCode} from 'react-qrcode-logo'
import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import Btn from './Btn'
function BillQR() {

  const {value} = useParams()
  const billPay = `upi://pay?pa=smuqeem03@oksbi&pn=Syed%20Muqeem%20Ahmed&am=${Number(value).toPrecision(2)}&cu=INR&aid=uGICAgMDWwpTzGQ`
  const qrcode = useRef()
  const handleDownload = ()=>{
    const date = new Date()
    qrcode.current.download('png',`bill-qr-smartCart ${date.toDateString()}`)
  }
  return (
    <div className=' min-h-screen h-fit w-full flex flex-col justify-center items-center bg-slate-800'>
      <Link to='/' >{<Btn text='Back to Home page'/>}</Link>
      
        {/* <img src={img} alt="" className='w-[300px] h-[700px] border-green-500 hover:border-blue-500 transition-red-500colors ease-linear p-2 border-2 rounded-md' /> */}

    <QRCode eyeRadius={4} ref={qrcode} value={billPay} size={300} quietZone={20} qrStyle='dots' bgColor='rgb(30 58 138)' fgColor='rgb(34 197 94)'/>
    <Btn className='font-medium ' handleClick={handleDownload} text='Download QR'/>
    </div>
  )
}

export default BillQR