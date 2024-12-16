import React from 'react';
import { appPages, authPages } from '@/config/pages.config';
import { TRoute } from '@/types/route.type';
import MailAsideTemplate from '@/templates/layouts/Asides/MailAside.template';
import DefaultAsideTemplate from '../templates/layouts/Asides/DefaultAside.template';
import MedMindedAsideTemplate from '@/templates/layouts/Asides/MedMindedAside.template';
import { HeroHome } from '@/components/icon/heroicons';

const asideRoutes: TRoute[] = [
	{ path: authPages.loginPage.to, element: null },
	{
		path: `${appPages.mailAppPages.to}/*`,
		element: <MailAsideTemplate />,
	},
	{ path: '/med-minded', element: <HeroHome /> },
	{ path: '/med-minded/current-chat', element: <MedMindedAsideTemplate /> },
	{ path: '/*', element: <DefaultAsideTemplate /> },
];

export default asideRoutes;
