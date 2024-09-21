'use client';

import { useEffect, useState } from "react";
import { Criteria } from "@/interfaces";


interface Props {
    setDataToShow: Function;
    allData: any[];
    searchCriteria: Criteria[];
}


export const SearchBar = ({ setDataToShow, allData, searchCriteria }: Props) => {

    const [criteriaSelect, setCriteriaSelect] = useState<string>(searchCriteria[0].value);
    const [inputValue, setInputValue] = useState('');

    const handleChangeSelect = (e: any) => {
        setCriteriaSelect(e.target.value);
    };

    const handleChangeInput = (e: any) => {
        setInputValue(e.target.value)
    };

    useEffect(() => {

        const data = allData.filter(d =>
            d[criteriaSelect].toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
        );

        setDataToShow(data);

    }, [inputValue]);


    return (
        <>
            <div className="max-w-lg mx-auto">
                <div className="flex">
                    <select
                        className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-white bg-[#2a2a2a] border border-[#3a3a3a] rounded-s-lg hover:bg-[#3c3b3b] "
                        onChange={handleChangeSelect}
                        value={criteriaSelect}
                    >
                        {
                            searchCriteria.map(({ name, value }) => (
                                <option
                                    key={value}
                                    className="flex"
                                    value={value}

                                >
                                    {name}
                                </option>
                            ))
                        }
                    </select>

                    <div className="relative w-full">
                        <input
                            type="search"
                            placeholder="Buscar..."
                            className="search-bar w-full"
                            required
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
            </div >
        </>
    )
}




