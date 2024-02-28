import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'

interface SliderItem {
	imgUrl?: string
	content?: string
}

interface SliderProps {
	data: SliderItem[]
}

export default function Slider({ data }: SliderProps) {
	return (
		<div className="mt-10">
			<Swiper
				spaceBetween={50}
				slidesPerView={2}
				wrapperClass="items-center"
				loop={true}
				navigation={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
				}}
				breakpoints={{
					640: {
						slidesPerView: 3,
						spaceBetween: 20
					},
					1200: {
						slidesPerView: 4,
						spaceBetween: 50
					}
				}}
				modules={[Autoplay, Navigation]}
			>
				{data.map((item: SliderItem, index: number) => (
					<SwiperSlide key={index}>
						{item.imgUrl && <img src={item.imgUrl} alt={item.content} />}
						{item.content && <p className="text-center lg:text-4xl">{item.content}</p>}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
