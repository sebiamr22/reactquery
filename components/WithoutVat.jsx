import { React } from 'react';

const WithoutVat = ({ values, setValues }) => {
  const handleChange = (e) => {
    const amountWithoutVat = (Number(e.target.value) / (1 + Number(values.vatRate) / 100)).toFixed(2);
    setValues({ ...values, priceWithoutVat: e.target.value, priceWithVat: amountWithoutVat });
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Sale price without VAT</label>
      <input
        type="number"
        className="shadow appearance-none border rounded
             w-full py-2 px-3 text-gray-700 leading-tight
              focus:outline-none focus:shadow-outline"
        value={values.priceWithoutVat}
        onChange={handleChange}
      />
    </div>
  );
};

export default WithoutVat;
