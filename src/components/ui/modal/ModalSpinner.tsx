import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

interface Props {
    open: boolean;
}

export function ModalSpinner({ open }: Props) {

    return (
        <>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </Box>
            </Modal>
        </>
    );
}




