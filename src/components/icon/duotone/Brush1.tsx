import React, { SVGProps } from 'react';

const SvgBrush1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M13.5 6c-.163 2.286-.72 3.786-1.672 4.5 0 0 .672-6.5-1.255-8.5 0 0 0 3.929-1.785 7.143-.837 1.507-1.786 2.999-1.786 5C7.002 17 10.47 18 12.005 18 13.803 18 17 17 17 13.5c0-1.44-1.167-3.94-3.5-7.5z'
					fill='currentColor'
				/>
				<path
					d='M9.72 20h4.56a1 1 0 01.948.684L16 23H8l.772-2.316A1 1 0 019.721 20z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgBrush1;
