import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function InputOTP() {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const inputRefs = useRef([]);
    const location = useLocation();
    const navigate = useNavigate();
    
    const { generatedOtp, phoneNumber } = location.state || {};

    useEffect(() => {
        // Redirect to login if no OTP is present
        if (!generatedOtp) {
            navigate('/login');
        }
        // Focus first input on mount
        inputRefs.current[0]?.focus();
    }, [generatedOtp, navigate]);

    const handleChange = (element, index) => {
        const value = element.value;
        if (!isNaN(value) && value !== " ") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to next input if value is entered
            if (value && index < 3) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (!otp[index] && index > 0) {
                // Move to previous input on backspace if current input is empty
                const newOtp = [...otp];
                newOtp[index - 1] = "";
                setOtp(newOtp);
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const verifyOtp = () => {
        const enteredOtp = parseInt(otp.join(""));
        if (enteredOtp === generatedOtp) {
            alert("OTP Verified Successfully!");
            navigate('/home'); // Redirect to home or dashboard
        } else {
            alert("Invalid OTP. Please try again.");
            // Reset OTP fields
            setOtp(new Array(4).fill(""));
            inputRefs.current[0]?.focus();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <h2 className="text-lg font-bold mb-4">Enter OTP</h2>
            {phoneNumber && (
                <p className="mb-4 text-gray-600">
                    Enter the OTP sent to {phoneNumber}
                </p>
            )}
            <div className="flex space-x-4">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="border-2 border-black p-4 w-12 text-center text-lg rounded"
                        autoComplete="off"
                    />
                ))}
            </div>
            <button 
                onClick={verifyOtp}
                disabled={otp.some(digit => digit === "")}
                className={`mt-4 border-2 border-black px-4 py-2 rounded 
                    ${otp.some(digit => digit === "") 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-slate-800 hover:text-white'}`}
            >
                Verify OTP
            </button>
        </div>
    );
}