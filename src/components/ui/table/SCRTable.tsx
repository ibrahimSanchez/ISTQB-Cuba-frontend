
interface Data {
    uid: string;
    name: string;
    ci: string;
    certification: string;
}

interface Props {
    dataToShow: Data[];
}


export const SCRTable = ({ dataToShow }: Props) => {

    return (
        <>
            <div className="overflow-x-auto max-h-80 w-full mt-8">
                <table className="border border-slate-500 min-w-full bg-transparent border-collapse">
                    <thead className='bg-[--primary] text-white uppercase text-sm'>
                        <tr>
                            <th className="p-4 border border-slate-600 text-start">Nombre</th>
                            <th className="p-4 border border-slate-600 text-start">CI</th>
                            <th className="p-4 border border-slate-600 text-start">Certificación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataToShow.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center p-4 text-[--text_color]">
                                    No hay resultados de búsqueda
                                </td>
                            </tr>
                        ) : (
                            dataToShow.map(item => (
                                <tr key={item.uid} className='text-[--text_color]'>
                                    <td className="p-4 border border-slate-700">{item.name}</td>
                                    <td className="p-4 border border-slate-700">{item.ci}</td>
                                    <td className="p-4 border border-slate-700">{item.certification}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}