// src/services/dialogService.ts
import Swal from 'sweetalert2';

export const showSuccessDialog = (message: string) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 2000
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
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 2000
    });
    
}

export const confirmDeleteDialog = async (message: string): Promise<boolean> => {
    const result = await Swal.fire({
      title: 'Você tem certeza?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!'
    });
  
    if (result.isConfirmed) {
      await Swal.fire({
        title: 'Deletado!',
        text: 'Seu arquivo foi deletado com sucesso.',
        icon: 'success'
      });
      return true;
    }
  
    return false;
  }