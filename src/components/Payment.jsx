import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { toast } from "react-toastify";
import "./Payment.css";
import { useNavigate } from "react-router";

const FakePaymentUI = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState("card"); // Default payment method
    const navigate = useNavigate();

    const handlePayment = () => {
        setLoading(true);
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% chance of success
            setStatus(success ? "success" : "failure");
            setLoading(false);
            toast.success(success ? "Payment Successful!" : "Payment Failed! Try again.");
        }, 3000);
        navigate("/ServiceSphere/home");
    };

    if (loading) {
        return (
            <div className="container">
                <p>Processing Payment...</p>
                <div className="loader"></div>
            </div>
        );
    }

    if (status === "success") {
        return (
            <div className="container">
                <h2 className="status-success">✅ Payment Successful!</h2>
                <p>Thank you for your payment.</p>
            </div>
        );
    }

    if (status === "failure") {
        return (
            <div className="container">
                <h2 className="status-failure">❌ Payment Failed</h2>
                <p>Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="payment-box">
                <h2>Payment</h2>

                {/* Payment Method Selection */}
                <div>
                    <label>
                        <input
                            type="radio"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={() => setPaymentMethod("card")}
                        />
                        Credit/Debit Card
                    </label>
                    <label style={{ marginLeft: "10px" }}>
                        <input
                            type="radio"
                            value="qr"
                            checked={paymentMethod === "qr"}
                            onChange={() => setPaymentMethod("qr")}
                        />
                        Pay via QR Code
                    </label>
                </div>

                {/* Card Payment Form */}
                {paymentMethod === "card" && (
                    <>
                        <input type="text" placeholder="Name on Card" className="input-field" />
                        <input type="text" placeholder="Card Number" className="input-field" />
                        <div style={{ display: "flex", gap: "10px" }}>
                            <input type="text" placeholder="Expiry Date (MM/YY)" className="input-field" />
                            <input type="text" placeholder="CVV" className="input-field" />
                        </div>
                    </>
                )}

                {/* QR Code Payment */}
                {paymentMethod === "qr" && (
                    <div className="qr-container">
                        <p>Scan the QR code to make a payment:</p>
                        <QRCodeCanvas value="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" size={150} />
                    </div>
                )}

                <button onClick={handlePayment} className="btn">
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default FakePaymentUI;
