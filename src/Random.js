import React, { useState } from 'react'

const Random = () => {
	const something = useState('something')
	console.log(something)
	return (
		<div>
			{JSON.stringify(something)}
		</div>
	)
}

export default Random
