import React from 'react';
import { useState } from 'react';
import WithVat from './WithVat';
import WithoutVat from './WithoutVat';
import VatSelect from './VatSelect';
import SubmitButton from './SubmitButton';
import CopyRights from './CopyRights';

const VatForm = () => {
  const [values, setValues] = useState({
    priceWithoutVat: '',
    vatRate: '17',
    priceWithVat: '',
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const body = JSON.stringify({
      priceWithoutVat: values.priceWithoutVat,
      vatRate: values.vatRate,
      priceWithVat: values.priceWithVat,
    });
    if (values.priceWithoutVat) {
      await fetch('/chesscoders', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body,
      });
    }
  };

  return (
    <form className=" bg-white/60 shadow-lg rounded px-8 w-96" onSubmit={handleFormSubmit}>
      <h1 className="text-center m-8 font-bold text-xl">VAT Calculator</h1>
      <WithVat values={values} setValues={setValues} />
      <VatSelect  values={values} setValues={setValues} />
      <WithoutVat  values={values} setValues={setValues} />
      <SubmitButton />
      <CopyRights/>
    </form>
  );
};

export default VatForm;

