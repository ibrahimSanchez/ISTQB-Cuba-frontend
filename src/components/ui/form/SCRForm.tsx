'use client';

import React, { useState } from 'react';
import { TextField, FormControl, Button } from '@mui/material';
import { sxCorrect } from '@/utils';

export function SCRForm() {
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

    // Función para manejar la visibilidad de la búsqueda avanzada
    const handleAdvancedSearch = () => {
        setShowAdvancedSearch(!showAdvancedSearch);
    };

    return (
        <div className="p-8 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
            <h1 className="text-2xl mb-6 text-center">Búsqueda de Candidatos</h1>

            {/* Formulario */}
            <form>
                {/* Input de Nombre */}
                <FormControl className='mb-6' fullWidth>
                    <TextField
                        id="outlined-basic"
                        label="Nombre completo *"
                        variant="outlined"
                        sx={sxCorrect}
                        helperText={false} // Elimina el texto de ayuda
                        error={false} // Error por defecto falso
                        focused={false}
                    />
                </FormControl>

                {/* Input de Carnet de Identidad */}
                <FormControl className='mb-6' fullWidth>
                    <TextField
                        id="outlined-id"
                        label="Carnet de Identidad *"
                        variant="outlined"
                        sx={sxCorrect}
                        helperText={false} // Elimina el texto de ayuda
                        error={false} // Error por defecto falso
                        focused={false}
                    />
                </FormControl>

                {/* Botones */}
                <div className="flex justify-between mb-6">
                    {/* Botón Buscar */}
                    <Button
                        sx={{ textTransform: "none" }}
                        variant="contained"
                        size='large'
                        className='bg-[#053b5e] hover:bg-[#062b43] shadow-lg'
                    >
                        Buscar
                    </Button>

                    {/* Botón Búsqueda Avanzada */}
                    <Button
                        sx={{ textTransform: "none" }}
                        variant="contained"
                        size='large'
                        className='bg-gray-600 hover:bg-gray-800 shadow-lg'
                        onClick={handleAdvancedSearch}
                    >
                        {showAdvancedSearch ? 'Ocultar Avanzada' : 'Búsqueda Avanzada'}
                    </Button>
                </div>

                {/* Opciones de Búsqueda Avanzada */}
                {showAdvancedSearch && (
                    <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-inner">
                        <h2 className="text-lg mb-4">Filtros Avanzados</h2>
                        {/* Aquí puedes agregar más inputs o filtros adicionales */}
                        <p className="text-gray-600">Opción avanzada 1</p>
                        <p className="text-gray-600">Opción avanzada 2</p>
                    </div>
                )}
            </form>
        </div>
    );
}
