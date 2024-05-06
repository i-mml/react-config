import React, { useEffect, useState } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import s from './style.module.scss';

const TablePagination = ({ dataLength, page, setPage, pageSize }: { dataLength: number, page: number, setPage: React.Dispatch<React.SetStateAction<number>>, pageSize: number }) => {
    const [maxPage, setMaxPage] = useState(1)
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
        e.preventDefault();
        setPage(index)
    }

    useEffect(() => {
        setMaxPage(Math.ceil(dataLength / pageSize))
    }, [dataLength])

    if (maxPage === 0) {
        return <></>
    }

    return (
        <div className={s.container}>
            <Pagination aria-label="Page navigation example"  >

                <PaginationItem disabled={page === 0}>
                    <PaginationLink
                        onClick={e => handleClick(e, page - 1)}
                        next
                        href="#"
                    >
                        <img src='/images/icons/paginationArrow.svg' className={s.prevIcon} />
                    </PaginationLink>
                </PaginationItem>
                {[...Array(maxPage)].map((p, i) =>
                    <PaginationItem active={i === page} key={i} className={s.item}>
                        <PaginationLink onClick={e => handleClick(e, i)} href="#">
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                )}
                <PaginationItem disabled={page === maxPage - 1}>
                    <PaginationLink
                        onClick={e => handleClick(e, page + 1)}
                        previous
                    >
                        <img src='/images/icons/paginationArrow.svg' />
                    </PaginationLink>
                </PaginationItem>

            </Pagination>
        </div>
    )
}

export default TablePagination