





export const sxCorrect = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white', // Borde blanco
    },
    '&:hover fieldset': {
      borderColor: 'white', // Borde blanco al hacer hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#007bff', // Borde blanco al enfocar
    },
  },
  '& .MuiOutlinedInput-input': {
    color: 'white', // Color del texto blanco
  },
  '& label': {
    color: 'white', // Color de la etiqueta blanco
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