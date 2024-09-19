
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { User } from '@/interfaces';



interface Props {
    rows: User[];
    // setLoadUserData: Function;
    // loadUserData: boolean;
}




const columns: GridColDef[] = [
    { field: 'uid', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'email', headerName: 'Correo', width: 130 },
    { field: 'role', headerName: 'Rol', width: 130 },
    // {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 90,
    // },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
];

// const rows = [
//     { id: 1, name: 'Snow', email: 'Jon', role: 'USER_ROLE', uid: 1 },
//     { id: 2, name: 'Lannister', email: 'Cersei', role: 'USER_ROLE' },
//     { id: 3, name: 'Lannister', email: 'Jaime', role: 'USER_ROLE' },
//     { id: 4, name: 'Stark', email: 'Arya', role: 'USER_ROLE' },
//     { id: 5, name: 'Targaryen', email: 'Daenerys', role: 'USER_ROLE' },
//     { id: 6, name: 'Melisandre', email: null, role: 'USER_ROLE' },
//     { id: 7, name: 'Clifford', email: 'Ferrara', role: 'USER_ROLE' },
//     { id: 8, name: 'Frances', email: 'Rossini', role: 'USER_ROLE' },
//     { id: 9, name: 'Roxie', email: 'Harvey', role: 'USER_ROLE' },
// ];

export const TableUI = ({ rows }: Props) => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                className='bg-white text-gray-100'
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
