
export const sxCorrect = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#053b5e', // Borde blanco
    },
    '&:hover fieldset': {
      borderColor: '#053b5e', // Borde blanco al hacer hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#007bff', // Borde blanco al enfocar
    },
  },
  '& .MuiOutlinedInput-input': {
    color: '#053b5e', // Color del texto blanco
  },
  '& label': {
    color: '#053b5e', // Color de la etiqueta blanco
  },
  '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
    color: '#007bff', // Color de la etiqueta al enfocar
  }
}


export const sxError = {
  '& .MuiOutlinedInput-input': {
    color: '#d32c28', // Color del texto rojo
  },
  '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
    color: '#d32c28', // Color del texto rojo
  }
} 
