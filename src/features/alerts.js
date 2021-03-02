import Swal from 'sweetalert2';

export const showInfoAlert = () => {
  Swal.fire({
    title: '<strong>Info</strong>',
    icon: 'info',
    html: 'Información importante',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: 'Genial!',
  });
};

export const showErrorAlert = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: '¡Algo salió mal!',
  });
};

export const showConfirmAlert = () => {
  Swal.fire({
    title: '¿Está seguro?',
    text: '¡No podrás revertir esto!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('confirmación', 'realizada con éxito', 'success');
    }
  });
};
