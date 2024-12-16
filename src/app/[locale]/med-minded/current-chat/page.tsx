import TranslationsProvider from '@/components/TranslationsProvider';
import SalesDashboardHeaderTemplate from '@/templates/layouts/Headers/SalesDashboardHeader.template';
import React from 'react';

const i18nNamespaces = ['translation'];
const ProjectDashboardPage = ({ params: { locale } }: { params: { locale: string } }) => {
	return (
		<TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
			Hello from MedMinded
		</TranslationsProvider>
	);
};

export default ProjectDashboardPage;
