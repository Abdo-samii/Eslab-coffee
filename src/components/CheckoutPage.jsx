import React, { useState } from 'react';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash'); // اختيار طريقة الدفع (كاش أو فيزا)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    cardNumber: '',
    cardPassword: '',
    cardExpiry: '',
    cardSerial: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة كود لمعالجة البيانات
    alert('Order submitted!');
  };

  return (
    <div className="container max-w-xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Payment Method</label>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={() => setPaymentMethod('cash')}
            />
            <label className="ml-2">Cash</label>
            <input
              type="radio"
              name="paymentMethod"
              value="visa"
              checked={paymentMethod === 'visa'}
              onChange={() => setPaymentMethod('visa')}
              className="ml-4"
            />
            <label className="ml-2">Visa</label>
          </div>
        </div>

        {paymentMethod === 'visa' && (
          <div>
            <div>
              <label className="block font-semibold">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Card Password</label>
              <input
                type="password"
                name="cardPassword"
                value={formData.cardPassword}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Expiry Date</label>
              <input
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Card Serial Number</label>
              <input
                type="text"
                name="cardSerial"
                value={formData.cardSerial}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-red-700 text-white py-2 px-4 rounded-full w-full mt-4"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
