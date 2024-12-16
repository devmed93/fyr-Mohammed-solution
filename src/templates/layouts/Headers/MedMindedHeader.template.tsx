import React from 'react';
import { DuoQuestionCircle, DuoStar } from '@/components/icon/duotone';
import { HeroCog8Tooth } from '@/components/icon/heroicons';
import Header, { HeaderLeft, HeaderRight } from '../../../components/layouts/Header/Header';
import Icon from '@/components/icon/Icon';
import Link from 'next/link';

const MedMindedHeaderTemplate = () => {
	return (
		<Header>
			<HeaderLeft>
				<h1 className='text-4xl'>MedMinded</h1>
			</HeaderLeft>
			<HeaderRight className='space-x-4 pr-24'>
				<Link href='/'>
					<Icon icon='HeroRectangleStack' size='text-2xl' />
				</Link>
				<Link href='/'>
					<Icon icon='DuoQuestionCircle' size='text-2xl' />
				</Link>
				<Link href='/'>
					<Icon icon='HeroCog8Tooth' size='text-2xl' />
				</Link>
			</HeaderRight>
		</Header>
	);
};

export default MedMindedHeaderTemplate;
