import { React } from 'react';

const VatSelect = (values, setValues) => {
  const handleChange = (e) => {
    const amountWithVat = (Number(e.target.value) * (1 + Number(values.vatRate) / 100)).toFixed(2);
    setValues({ ...values, vatRate: e.target.value, priceWithoutVat: amountWithVat });
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">VAT Rate</label>
      <select
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="vatRate"
        id="vatRate"
        value={values.vatRate}
        onChange={handleChange}
      >
        <option value="17">17%</option>
        <option value="18">18%</option>
        <option value="19">19%</option>
      </select>
    </div>
  );
};

export default VatSelect;
