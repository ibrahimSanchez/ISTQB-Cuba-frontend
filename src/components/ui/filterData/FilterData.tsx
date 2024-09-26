'use client';

import { useEffect, useState } from "react";
import { FilterCriteria } from "@/interfaces";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { sxCorrect } from "@/utils";


interface Props {
    setDataToShow: Function;
    allData: any[];
    filterCriteria: FilterCriteria[];
}



export const FilterData = ({ setDataToShow, allData, filterCriteria }: Props) => {

    const [change, setChange] = useState<boolean>(true);

    const [criteriaSelect, setCriteriaSelect] = useState<string>('all');

    const handleChangeSelect = (e: SelectChangeEvent) => {
        setCriteriaSelect(e.target.value);
        setChange(!change);
    };


    useEffect(() => {

        if (criteriaSelect != 'all') {

            const data = allData.filter(d =>
                d.approved === (criteriaSelect === 'true' ? true : false)
            );
            setDataToShow(data);

        }
        else setDataToShow(allData);

    }, [change, allData]);



    return (
        <div
            className="w-full text-center"
        >
            <FormControl
                fullWidth sx={sxCorrect}
                className="w-[150px] mb-5"
            >
                <InputLabel id="demo-simple-select-label">Filtrar</InputLabel>
                <Select
                    size="small"
                    // className="bg-[--primary] text-white"
                    sx={sxCorrect}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={criteriaSelect}
                    label="Filtrar"
                    onChange={handleChangeSelect}
                >

                    <MenuItem
                        value='all'
                        selected={true}
                    >
                        Todas
                    </MenuItem>

                    {
                        filterCriteria.map(({ name, value }) => (
                            <MenuItem
                                key={`${value}`}
                                value={`${value}`}
                            >
                                {name}
                            </MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </div>
    )
}
