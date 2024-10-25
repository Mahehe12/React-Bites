import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function PhoneInput() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    function generateOtp() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    function getOtp() {
        if (input.length === 10) {
            const otp = generateOtp(); 
            alert(`OTP: ${otp}`); 
            navigate('/otp', { 
                state: { 
                    generatedOtp: otp,
                    phoneNumber: input 
                } 
            });
        } else {
            alert("Please enter a valid 10-digit phone number.");
        }
    }

    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen'>
            <h1 className='font-bold text-lg mt-4'>Login via OTP</h1>

            <input
                type="tel"
                minLength={10}
                maxLength={10}
                value={input}
                className='border-2 border-black px-20 py-4 m-4 rounded-md'
                onChange={(e) => {
                    const value = e.target.value;
                    // Only allow numbers
                    if (!isNaN(value) && value.length <= 10) {
                        setInput(value);
                    }
                }}
                placeholder='Enter your mobile number'
            />

            <button
                className='border-2 border-black px-12 py-2 m-4 hover:bg-slate-800 hover:text-white'
                onClick={getOtp}
            >
                Send OTP
            </button>
        </div>
    );
}

export default PhoneInput;