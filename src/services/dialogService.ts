// src/services/dialogService.ts
import Swal from 'sweetalert2';

export const showSuccessDialog = (message: string) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
};

export const showErrorDialog = (message: string) => {
  Swal.fire('Erro!', message, 'error');
};

export const showConfirmDialog = async (message: string) => {
  Swal.fire({
    title: 'Confirmação',
    text: message,
    icon: 'success',
    showCancelButton: true,
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não',
  });

}

export const showDeleteDialog = async (message: string) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
    
}