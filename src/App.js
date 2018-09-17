import React, { Component } from 'react'
import styled from 'styled-components'
import Collections from './components/collection'
import SelectGenresFilter from './components/selectGenresFilter'
import SelectRangeFilter from './components/selectRangeFilter'
/*
Notes: 
	- Used movie.backdrop_path as ID just to avoid importing external library
*/
class App extends Component {
	render() {
		return (
			<Wrapper>
				<Header>
					<Logo>
						<a href="/" target="black">ZMDB</a>
					</Logo>
					<SelectRangeFilter />
					<SelectGenresFilter />
				</Header>
				<Collections />
			</Wrapper>
		)
	}
}

export default App
const Header = styled.div`
	display:flex;
	background: #000;
	margin-bottom: 2em;
`
const Logo = styled.div`
	flex-grow:1;
	background-color: #000; /* Green */
	padding: 1em 1em;
	text-align: left;
	font-size: 1.1rem;
	> a {
		text-decoration: none;
		color: white;
	}
`
const Wrapper = styled.div`
	@media(min-width:1449px){
		margin: auto;
		width:1449px;
	}
`