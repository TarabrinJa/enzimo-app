import React from 'react'
import Header from './Header'
import Slider from './Slider'
import CategoryTile from './CategoryTile'
import LargeSlider from './LargeSlider'

function Body() {
	return (
		<div>
			<Header />
			<Slider />
			<CategoryTile />
			<LargeSlider />
		</div>
	)
}

export default Body