import { DataModal } from "@/interfaces";



interface Props {
    isOpen: boolean;
    onClose: Function;
    redirect: Function;
    isError: boolean;
    dataModal: DataModal;

}



export const ModalAnswer = ({ isOpen, onClose, isError, dataModal, redirect }: Props) => {
    if (!isOpen) return null;

    const { text, title } = dataModal;

    const styleInput = {
        correct: 'border-gray-100',
        error: ' border-red-600'
    };


    const handleClick = () => {
        !isError && redirect(true);
        onClose();
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">

            <div className={`
                bg-[#141515] rounded-lg shadow-lg p-6 max-w-sm mx-auto border ${isError ? styleInput.error : styleInput.correct}
                `}>

                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <p className="mb-6">{text}</p>
                <button
                    onClick={handleClick}
                    className={`
                        w-full text-white font-semibold py-2 rounded-xl
                        ${isError ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}
                        `}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

