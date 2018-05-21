const getBlobType = (format) => {
  switch (format) {
    case 'png':
      return 'image/png';
    case 'jpg':
      return 'image/jpg';
    case 'jpeg':
      return 'image/jpeg';
    case 'pdf':
      return 'application/pdf';
    default:
      break;
  }
  return '';
};

export const createUrlForSrc = (imgSrc, format, size) => {
  const blob = new Blob([imgSrc], { type: getBlobType(format) });
  const urlCreator = window.URL || window.webkitURL;
  let snackbar = {
    open: false,
    text: '',
  };
  if (format !== 'pdf' && format !== 'png' && format !== 'jpeg' && format !== 'jpg') {
    snackbar = {
      open: true,
      text: 'El formato del archivo no es válido',
    };
  }
  if (size > 5000000) {
    snackbar = {
      open: true,
      text: 'El tamaño del archivo debe ser menor a 5MB',
    };
  }
  const node = {
    imageUrl: snackbar.open ? '' : urlCreator.createObjectURL(blob),
    snackbar,
  };
  return node;
};
