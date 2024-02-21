import React from "react";
import { DataTable } from "primereact/datatable";

export const PrimeReactDataTable = ({
	filters,
	data,
	onSelectionChange,
	iterator,
	onRowEditComplete,
	children,
	groupRowsBy,
	rowGroupHeaderTemplate,
	sortField,
	sortOrder,
	rowGroupMode,
	scrollHeight,
	scrollable,
	paginator,
	rowsPerPageOptions,
	headerColumnGroup,
	footerColumnGroup,
	...props
}) => {
	return (
		<DataTable
			editMode='row'
			key={iterator}
			paginator={paginator}
			scrollable={scrollable}
			rows={5}
			rowsPerPageOptions={rowsPerPageOptions}
			removableSort
			dataKey={iterator}
			rowGroupMode={rowGroupMode}
			rowHover
			sortMode='single'
			headerColumnGroup={headerColumnGroup}
			sortField={sortField}
			groupRowsBy={groupRowsBy}
			scrollHeight={scrollHeight}
			footerColumnGroup={footerColumnGroup}
			sortOrder={sortOrder}
			emptyMessage={() => (
				<div className='text-center w-full text-[14px] h-[70px] justify-center flex items-center font-semibold pt-3 '>
					{" "}
					<p>No Matching Records Found !</p>{" "}
				</div>
			)}
			filters={filters}
			value={data}
			rowGroupHeaderTemplate={rowGroupHeaderTemplate}
			stripedRows
			{...props}>
			{children}
		</DataTable>
	);
};
