import React, { useState } from 'react';
import { DateRange, Range } from 'react-date-range';
import dayjs from 'dayjs';
import colors from '@/tailwindcss/colors.tailwind';
import themeConfig from '@/config/theme.config';

const ReactDateRangeExample1Partial = () => {
	const [state, setState] = useState<Range[]>([
		{
			startDate: dayjs().toDate(),
			endDate: undefined,
			key: 'selection',
		},
	]);

	return (
		<DateRange
			editableDateInputs
			onChange={(item) => setState([item.selection])}
			moveRangeOnFirstSelection={false}
			ranges={state}
			color={colors[themeConfig.themeColor][themeConfig.themeColorShade]}
		/>
	);
};

export default ReactDateRangeExample1Partial;
