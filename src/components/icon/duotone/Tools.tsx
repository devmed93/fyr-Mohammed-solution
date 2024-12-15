import React, { SVGProps } from 'react';

const SvgTools = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M15.95 3.808l-2.925 2.925a2 2 0 000 2.828l1.414 1.414a2 2 0 002.828 0l2.925-2.925a5.929 5.929 0 01-1.517 5.76c-1.83 1.83-4.566 2.206-6.791 1.134l-5.127 5.127a2 2 0 11-2.828-2.828l5.127-5.127c-1.072-2.225-.696-4.961 1.133-6.79a5.929 5.929 0 015.76-1.518z'
					fill='currentColor'
				/>
				<path
					d='M16.657 5.929l1.414 1.414a1 1 0 010 1.414l-1.38 1.38a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l1.38-1.38a1 1 0 011.414 0z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgTools;
