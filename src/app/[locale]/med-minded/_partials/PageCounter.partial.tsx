import React from 'react';

type IPageCounterProps = {
	totalPages: number;
	currentPage: number;
	onPreviousPage?: () => void;
	onNextPage?: () => void;
	onFirstPage?: () => void;
	onLastPage?: () => void;
	onPageChange?: (page: number) => void;
};

const PageCounterPartial = ({ currentPage, totalPages, ...props }: IPageCounterProps) => {
	return (
		<div className='space-x-2'>
			<span>Page</span>
			<span className='rounded border border-gray-300 px-1'>{currentPage}</span>
			<span>of</span>
			<span className=''>{totalPages}</span>
		</div>
	);
};

export default PageCounterPartial;
