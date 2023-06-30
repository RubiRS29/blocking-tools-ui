import React, {useEffect, useState} from "react";
import {Button} from "@material-tailwind/react";
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";
import {usePagination} from "../hooks/usePagination";
import {getVisibilityWatcher} from "web-vitals/dist/modules/lib/getVisibilityWatcher";
interface PaginationProps {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className?: string;
    totalRows: number;
    currentTotalRows: number;
}

const Pagination : React.FC<PaginationProps> =(props) => {

    const {onPageChange, totalCount, siblingCount = 1,currentPage, pageSize, totalRows, currentTotalRows} = props;
    const [lastPage, setLastPage] = useState(0);
    const [disableNext, setDisableNext] = useState(false);
    const [rows, setRows] = useState(0);

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    const onNext = () => {
        // setRows(rows + totalCount);
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        // setRows(rows - totalCount);
        onPageChange(currentPage - 1);
    };


    useEffect(() => {

        // console.log(totalCount);

        const total = rows + totalCount;

        if(total <= totalRows){
            setRows(rows + totalCount);
        }


        if(total === totalRows){
            setLastPage(currentPage);
        }

        if(totalCount < pageSize || lastPage === currentPage || total === totalRows){
            setDisableNext(true)
        }else{
            setDisableNext(false)
        }


    }, [currentPage]);


    return (
        <>
            <div className="flex items-center gap-4">
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-2"
                    onClick={onPrevious}
                    disabled={currentPage === 1}
                >
                    <FiArrowLeft strokeWidth={2} className="h-4 w-4" onClick={onPrevious} /> Previous
                </Button>

                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-2"
                    onClick={onNext}
                    disabled={disableNext}
                >
                    Next
                    <FiArrowRight strokeWidth={2} className="h-4 w-4" />
                </Button>
            </div>
        </>
    )
}

export default Pagination;


