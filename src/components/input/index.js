import React from 'react'
import styled from 'styled-components'

export default (props) => (
	<StyledInput {...props}/>
)

const StyledInput = styled.input`
  &[type='checkbox'] {
		margin-bottom: 15px;
		margin-right: 10px;
	}
	&[type='range'] {
		-webkit-appearance: none;
		width: 160px;
		height: 44px;
		background: linear-gradient(to right, #47d859 0%, #6cff7d 100%);
		background-size: 150px 10px;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;
		outline: none;
		&:focus {
			outline: none;
		}
		&::-webkit-slider-thumb {
			-webkit-appearance: none;
			width: 20px;
			height: 20px;
			background: #4caf50;
			position: relative;
			z-index: 3;
			box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
		}
		&::-webkit-slider-thumb:after {
			content: ' ';
			width: 160px;
			height: 10px;
			position: absolute;
			z-index: 1;
			right: 20px;
			top: 5px;
			background: #ff5b32;
			background: linear-gradient(to right, #47d859 1%, #6cff7d 70%);
		}
	}
`