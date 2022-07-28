import { React } from 'react';

const WithVat = ({ values, setValues }) => {
  const handleChange = (e) => {
    const amountWithVat = (Number(e.target.value) * (1 + Number(values.vatRate) / 100)).toFixed(2);
    setValues({ ...values, priceWithVat: e.target.value, priceWithoutVat: amountWithVat });
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Sale price with VAT</label>
      <input
        type="number"
        className="shadow appearance-none border rounded w-full
             py-2 px-3 text-gray-700 leading-tight
             focus:outline-none focus:shadow-outline"
        value={values.priceWithVat}
        onChange={handleChange}
      />
    </div>
  );
};

export default WithVat;
