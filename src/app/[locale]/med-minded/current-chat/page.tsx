import TranslationsProvider from '@/components/TranslationsProvider';
import MedMindedHeaderTemplate from '@/templates/layouts/Headers/MedMindedHeader.template';
import SalesDashboardHeaderTemplate from '@/templates/layouts/Headers/SalesDashboardHeader.template';
import React from 'react';
import CurrentChatClient from './client';

const i18nNamespaces = ['translation'];
const CurrentChatPage = ({ params: { locale } }: { params: { locale: string } }) => {
	return (
		<TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
			{/* <MedMindedHeaderTemplate /> */}
			<CurrentChatClient />
		</TranslationsProvider>
	);
};

export default CurrentChatPage;
