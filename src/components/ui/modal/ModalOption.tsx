

interface Props {
    isOpen: boolean;
    onClose: Function;
    action: Function;
    text: string;
    id?: string

}



export const ModalOption = ({ isOpen, onClose, text, action }: Props) => {
    if (!isOpen) return null;


    const handleClick = () => {
        // console.log('hola')
        action();
        onClose();
    }


    return (
        <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">

            <div className="bg-[#141515] rounded-lg shadow-lg p-6 max-w-sm mx-auto border">

                <h2 className="text-lg font-semibold mb-10 text-center">{text}</h2>

                <div className="flex justify-between">
                    <button
                        onClick={handleClick}
                        className="w-full text-white bg-blue-600 hover:bg-blue-800  font-semibold px-4 py-2 mx-5 rounded-xl"
                    >
                        Aceptar
                    </button>
                    <button
                        onClick={() => onClose()}
                        className="w-full text-white bg-red-500 hover:bg-red-700 font-semibold px-4 py-2 mx-5 rounded-xl"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

