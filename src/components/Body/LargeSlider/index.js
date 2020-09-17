import React from 'react'
import LargeSliderCardList from './LargeSliderCardList'
import SliderLeftButton from './SliderLeftButton'
import SliderRightButton from './SliderRightButton'

function LargeSlider() {
	return (
		<div>
			<header>Клиники</header>
			<LargeSliderCardList />
			<SliderLeftButton />
			<SliderRightButton />
		</div>
	)
}

export default LargeSlider