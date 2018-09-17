import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
/*
Notes: 
Used movie.backdrop_path as ID just to avoid importing external library
snippet to implement for vote_average: https://codepen.io/MyXoToD/pen/xGRrgQ
*/
const movie = (props) => {
	const { poster_path, title, overview, backdrop_path, vote_average } = props
	return (
		<Wrapper>
			<Img>
				<img
					src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + poster_path|| backdrop_path}
					alt={title + ' Poster Image'}
				/>
			</Img>
			<Info>
				<Title><h2>{title}</h2>{vote_average}</Title>
				<Overview>{overview.substring(0, 300)}{overview.length>300&&'...'}</Overview>
			</Info>
		</Wrapper>
	)
}


movie.propTypes = {
	poster_path:propTypes.string,
	title:propTypes.string,
	overview:propTypes.string,
	backdrop_path:propTypes.string,
	vote_average:propTypes.number,
}



export default movie
const Wrapper = styled.div`

	font-size: 0.8rem;
	flex:bases;
	box-shadow: 0 0.1em 0 0 #fdc;
	transition: all 1s;
	animation: fadeIn 1s 1;        
`
const Img = styled.div`
	width: 185px;
	height: 278px;
	overflow: hidden;
	float: left;
	@media(max-width:650px){
		width:100%;
		height:378px;
	}
	> img {
		width:100%
	}
`
const Info = styled.div`
	width: 298px;
  height: 278px;
  position: relative;
  box-sizing: border-box;
  padding: 0.75em;
	overflow: hidden;
	@media(max-width:650px){
		width:100%;
		padding: 1.2em;
	}
`
const Title = styled.div`
	color: #000;
	line-height: 150%;
	> h2 {
		margin: 0
	}
`
const Overview = styled.div`
	color: #4d4d4d;
	font-size:0.70rem;
	line-height: 160%;
	margin-top: 30px;
	white-space: normal;
	word-weap: break-word;
`
