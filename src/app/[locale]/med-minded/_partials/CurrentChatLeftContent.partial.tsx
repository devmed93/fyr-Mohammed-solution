import React from 'react';
import AIChatItemContainerCommon from '../../ai/_common/AIChatItemContainer.common';
import AIChatInputContainerCommon from '../../ai/_common/AIChatInputContainer.common';
import FieldWrap from '@/components/form/FieldWrap';
import Button from '@/components/ui/Button';
import { Formik, useFormik } from 'formik';
import Input from '@/components/form/Input';

const CurrentChatLeftContentPartial = () => {
	const formik = useFormik({
		onSubmit(): void | Promise<never> {
			return undefined;
		},
		initialValues: {
			textField: '',
		},
	});
	return (
		<>
			<AIChatItemContainerCommon isAnswer={true} className='w-4/5 shadow-lg'>
				What are the indications of RSV vaccine in infants to prevent bronchiolitis?
			</AIChatItemContainerCommon>
			<AIChatItemContainerCommon
				isAnswer={false}
				className='my-6 w-4/5 justify-end self-end shadow-lg'>
				<p>
					Overview of RSV and Risk Factors Respiratory Syncytial Virus (RSV) is a
					significant cause of bronchiolitis and pneumonia in infants, especially
					affecting those in their first year of life. Approximately 20% to 30% of infants
					infected with RSV develop lower respiratory tract diseases such as
					bronchiolitis. Signs typically include rhinitis, cough, and increased
					respiratory effort, which can progress to more severe symptoms like wheezing and
					retractions . The highest rates of RSV hospitalizations occur in infants under
					six months of age, with certain risk factors increasing the likelihood of severe
					disease: Prematurity (especially those born before 29 weeks of gestation)
					Chronic lung disease of prematurity Anatomic pulmonary abnormalities
					Neuromuscular disorders Immunocompromised status Indications for RSV
					Immunoprophylaxis Immunoprophylaxis using palivizumab is recommended for
					specific high-risk infant populations to prevent RSV-related hospitalizations.
					The following groups are advised to receive this prophylaxis: Premature Infants:
					Infants born before 29 weeks of gestation are highly encouraged to receive
					prophylaxis during their first RSV season. Infants with Chronic Lung Disease:
					Those with a history of chronic lung disease of prematurity should receive
					prophylaxis. Congenital Heart Disease (CHD): Infants with certain heart
					conditions may qualify for prophylaxis based on their medical history.
					Neuromuscular Disorders: Infants with conditions that impair cough or secretion
					clearance may be considered for prophylaxis.
				</p>
			</AIChatItemContainerCommon>
			<AIChatInputContainerCommon>
				<FieldWrap
					firstSuffix={
						<Button
							icon='HeroPlus'
							variant={formik.values.textField ? 'default' : 'solid'}
							rounded='rounded'
							className='me-2'
							aria-label='Upload file'
						/>
					}
					lastSuffix={
						formik.values.textField ? (
							<Button
								className='ms-2'
								variant='solid'
								rounded='rounded'
								icon='HeroPaperAirplane'>
								Send
							</Button>
						) : (
							<Button className='ms-2' icon='HeroMicrophone' aria-label='Speaking' />
						)
					}>
					<Input
						id='textField'
						name='textField'
						dimension='xl'
						placeholder='Ask something'
						onChange={formik.handleChange}
						value={formik.values.textField}
					/>
				</FieldWrap>
			</AIChatInputContainerCommon>
		</>
	);
};

export default CurrentChatLeftContentPartial;
