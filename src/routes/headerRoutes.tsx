import React from 'react';
import { appPages, authPages, componentsPages, medMindedAppPages } from '@/config/pages.config';
import { TRoute } from '@/types/route.type';
import DefaultHeaderTemplate from '../templates/layouts/Headers/DefaultHeader.template';
import ComponentAndTemplateHeaderTemplate from '../templates/layouts/Headers/ComponentAndTemplateHeader.template';
import MedMindedAsideTemplate from '@/templates/layouts/Asides/MedMindedAside.template';
import MedMindedHeaderTemplate from '@/templates/layouts/Headers/MedMindedHeader.template';

const headerRoutes: TRoute[] = [
	{ path: authPages.loginPage.to, element: null },
	{
		path: `${componentsPages.uiPages.to}/*`,
		element: <ComponentAndTemplateHeaderTemplate />,
	},
	{
		path: `${componentsPages.formPages.to}/*`,
		element: <ComponentAndTemplateHeaderTemplate />,
	},
	{
		path: `${componentsPages.integratedPages.to}/*`,
		element: <ComponentAndTemplateHeaderTemplate />,
	},
	{
		path: `${medMindedAppPages.currentChatPage.to}`,
		element: <MedMindedHeaderTemplate />,
	},
	{
		path: appPages.projectAppPages.subPages.projectDashboardPage.to,
		element: null,
	},
	{
		path: '/',
		element: null,
	},
	{ path: '/*', element: <DefaultHeaderTemplate /> },
];

export default headerRoutes;
