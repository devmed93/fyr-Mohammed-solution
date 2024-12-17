import Icon from '@/components/icon/Icon';
import Tooltip from '@/components/ui/Tooltip';
import React from 'react';

const CurrentChatRightContentPartial = () => {
	return (
		<>
			<p className='flex-1 overflow-y-auto rounded-lg bg-white p-4 shadow-md'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit blanditiis
				voluptate, sint ipsum labore ut asperiores laboriosam dolor nesciunt velit ullam
				quis facilis laborum unde repellendus eos, culpa esse praesentium facere! Explicabo
				obcaecati repellat laborum quod tempora facere ipsa consequatur quisquam doloribus
				ratione ab magni iure voluptatibus numquam accusantium perferendis cum, omnis
				accusamus eius vel nemo. Laborum quaerat error unde est magnam eos dignissimos
				aliquid reiciendis asperiores nobis aut labore iste voluptatem dolor illum eligendi
				mollitia, sit ex molestiae incidunt vero suscipit, adipisci distinctio. Amet nam
				magni ut soluta nobis! Voluptatibus omnis unde autem. At quas facere nihil voluptas
				earum fugiat, dolor ut accusantium iure officiis, sequi laborum pariatur ipsum.
				Vitae hic nobis, adipisci dolores error voluptates animi aperiam veniam optio
				quisquam voluptatum reprehenderit rem, enim debitis corporis, voluptas maxime?
				Voluptate cumque consectetur corrupti excepturi, placeat ullam explicabo delectus
				accusantium nobis necessitatibus. Nesciunt laborum eos inventore voluptatem nam
				repudiandae repellat quasi tempora molestiae itaque minus voluptatibus sequi
				similique assumenda amet possimus asperiores, minima quod soluta hic laboriosam
				ratione omnis voluptas. Neque reiciendis rem, sequi itaque eaque in deserunt
				assumenda dolore modi aliquam possimus, aut maxime sit recusandae velit. Velit culpa
				tenetur vero provident enim harum, pariatur dolores, debitis maxime quia minus iure
				repellendus obcaecati. Facere assumenda quidem officiis, aperiam repellat
				repellendus quis placeat illo. Nulla error ad architecto rerum, aut iusto impedit
				voluptatum, perferendis voluptates vero atque omnis voluptatem soluta neque
				blanditiis assumenda! Quos repellat voluptas maiores eveniet pariatur nam tempore
				nobis reprehenderit laborum provident placeat repellendus dolor unde accusamus quia,
				enim, nesciunt est hic sint ut assumenda eos impedit. Cumque inventore facere, animi
				iusto officia exercitationem quis, perferendis aspernatur dicta neque aut quaerat
				nihil delectus quod ratione id voluptatibus consequatur corporis assumenda deleniti
				voluptatem sint autem. Aliquam saepe illum enim. Minus explicabo, reprehenderit esse
				doloremque nulla ducimus, mollitia vitae at, quas laboriosam amet deleniti repellat
				dolorum ut! Nulla fuga officia modi cumque dolores veritatis dolor natus earum nisi
				aspernatur esse itaque placeat voluptates, non ullam, qui libero nesciunt
				repellendus nam? Recusandae, nisi aspernatur, fugit molestiae debitis consectetur
				voluptatum veniam ipsum natus praesentium laboriosam tempora quisquam corrupti rem
				eaque quae excepturi temporibus sit dignissimos nesciunt. Iusto aspernatur porro
				velit reiciendis temporibus praesentium amet dignissimos perferendis quidem magni,
				aut nam culpa sunt, molestiae repudiandae ea! Accusamus cupiditate optio neque fuga,
				possimus eum ut qui sequi voluptas quam! Nesciunt incidunt totam distinctio corporis
				possimus libero maiores officia ex id porro. Repudiandae vitae unde ullam officiis
				deleniti pariatur quae sed ipsum laudantium voluptatibus? Aperiam nesciunt esse est
				sit modi aliquid quo commodi dicta fuga neque deserunt autem quia possimus, laborum
				aliquam, animi ut soluta minus dolor? Culpa consectetur eligendi asperiores odio
				officia magni ipsum vel iure doloremque tempora aut vitae esse, atque expedita modi
				eveniet ipsa dicta sed consequatur quia quo, soluta deserunt voluptatem. Doloribus
				harum eos blanditiis illo voluptate iure consequatur amet. Voluptates dolorem atque
				laudantium dignissimos molestiae consectetur, eligendi cupiditate sapiente nisi
				tempore temporibus recusandae? Est esse unde dolore corrupti pariatur quia labore
				rerum natus non, sed nobis facilis? Omnis delectus cupiditate eius sunt hic quos
				nihil laborum atque ad praesentium suscipit quod perferendis iste nostrum dolores
				culpa, tenetur temporibus tempora eligendi? Repellat nulla doloribus maiores nemo
				nobis sequi officiis hic numquam reprehenderit corrupti dolores exercitationem,
				voluptate voluptas eius aperiam. Maiores quia fugiat labore dignissimos blanditiis
				tempore recusandae tenetur, vero dolorem aliquid explicabo distinctio aspernatur
				porro dicta. Esse odio nemo quas voluptates ut, ullam perferendis. Aliquid
				exercitationem illo, doloribus aperiam, dolore dolores deleniti neque et atque sint
				beatae nobis a voluptatibus assumenda maxime. Sint fugit aut sed quasi nihil
				temporibus et accusantium consequuntur cupiditate voluptates, neque quaerat maxime
				id molestias nostrum, cum rerum commodi earum doloremque, consectetur inventore
				itaque. Officia ratione magni soluta quibusdam et nulla perferendis labore
				architecto! Laudantium, odio eligendi excepturi quia sit, adipisci eius illum
				fugiat, enim magnam neque atque mollitia beatae voluptatem? Expedita ipsam
				perferendis repellendus consequatur quasi voluptatum dolore autem aperiam
				temporibus, nostrum nemo, natus neque velit amet adipisci hic quaerat, ut
				voluptatibus dolor dolorem corrupti inventore fugiat facilis quo! Inventore
				molestiae doloribus aut sequi veritatis iste labore obcaecati est exercitationem
				officia dolorem asperiores, ducimus, excepturi quos dolores animi quod alias eos eum
				facilis reiciendis placeat accusantium tempore. Distinctio dicta nulla reprehenderit
				accusamus quidem quae animi.
			</p>
			<div className='flex-1/2 overflow-y-auto rounded-lg bg-white p-4 shadow-md'>
				<div className='flex justify-end'>
					<Tooltip text='lorem ipsum dolor amit' placement='top-start'>
						<Icon icon='DuoFilePlus' size='text-3xl' className='mb-5'></Icon>
					</Tooltip>
				</div>
				<div>
					{[...Array(5)].map((_, index) => (
						<div key={index} className='mb-6 flex flex-col items-center'>
							<div className='h-20 w-16 bg-green-700'></div>
							<p className='mt-2 text-sm'>Document title {index + 1}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default CurrentChatRightContentPartial;
