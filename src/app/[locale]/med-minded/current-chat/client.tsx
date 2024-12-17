'use client';

import Icon from '@/components/icon/Icon';
import Container from '@/components/layouts/Container/Container';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import Button from '@/components/ui/Button';
import React from 'react';
import PageCounterPartial from '../_partials/PageCounter.partial';
import AIChatItemContainerCommon from '../../ai/_common/AIChatItemContainer.common';
import AIChatInputContainerCommon from '../../ai/_common/AIChatInputContainer.common';
import FieldWrap from '@/components/form/FieldWrap';
import { Formik, useFormik } from 'formik';
import Input from '@/components/form/Input';
import CurrentChatLeftContentPartial from '../_partials/CurrentChatLeftContent.partial';
import CurrentChatRightContentPartial from '../_partials/CurrentChatRightContent.partial';

const CurrentChatClient = () => {
	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft className='w-1/2 justify-end'>
					<Button variant='solid' color='blue' icon='HeroPlus'>
						New Chat
					</Button>
				</SubheaderLeft>
				<SubheaderRight className='space-x-3'>
					<Icon icon='HeroHandRaised' size='text-2xl' />
					<Icon icon='HeroMagnifyingGlassPlus' size='text-2xl' />
					<Icon icon='HeroMagnifyingGlassMinus' size='text-2xl' />
					<PageCounterPartial currentPage={200} totalPages={1198} />
					<div className='flex items-center gap-x-2'>
						<Icon icon='DuoBookOpen' size='text-3xl' />
						References
					</div>
				</SubheaderRight>
			</Subheader>
			<Container className='mx-1 flex h-full gap-x-4 bg-gray-50 p-0'>
				<div className='flex h-[500px] flex-1 flex-col gap-y-4 overflow-y-auto bg-gray-100 p-4 pb-0'>
					<CurrentChatLeftContentPartial />
				</div>
				<div className='flex h-[500px] flex-1 justify-around gap-x-5 bg-gray-100 p-4'>
					<CurrentChatRightContentPartial />
				</div>
			</Container>
		</PageWrapper>
	);
};

export default CurrentChatClient;
