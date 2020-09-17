import React from 'react'
import SliderBigCardList from './SliderBigCardList'
import SliderLeftButton from './SliderLeftButton'
import SliderRightButton from './SliderRightButton'

function SliderBig() {
	return (
		<div>
			<header>Клиники</header>
			<SliderBigCardList />
			<SliderLeftButton />
			<SliderRightButton />
		</div>
	)
}

export default SliderBig