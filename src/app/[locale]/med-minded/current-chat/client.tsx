import Icon from '@/components/icon/Icon';
import Container from '@/components/layouts/Container/Container';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import Button from '@/components/ui/Button';
import React from 'react';
import PageCounterPartial from '../_partials/PageCounter.partial';

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
			<Container>
				<span>Here lays the content of current chat page</span>
			</Container>
		</PageWrapper>
	);
};

export default CurrentChatClient;
