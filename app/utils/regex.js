export const getCelphone = (value) => {
  const inputOriginal = value;
  let input;
  input = inputOriginal.replace(/\D/g, '');
  input = input.substring(0, 10);
  const sizePhone = input.length;
  if (sizePhone === 0) {
    input = '';
  } else if (sizePhone < 4) {
    input = `(${input}`;
  } else if (sizePhone < 7) {
    input = `(${input.substring(0, 3)}) ${input.substring(3, 6)}`;
  } else {
    input = `(${input.substring(0, 3)}) ${input.substring(3, 6)} - ${input.substring(6, 10)}`;
  }
  return input;
};

export const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const ALPHANUMERIC = /[^Aa-zA-Záéíóúü´ñ0-9 ]/gi;
export const DATE = /(\d\d?)\/(\d\d??)\/(\d\d\d\d)/g;
export const ONLY_NUMBER = /[^0-9.]+/g;
