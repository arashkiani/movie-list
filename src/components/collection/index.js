import React, { Component } from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Movie from '../movie'
import {actionGetMovies} from '../../redux/movies'
import shortid from 'shortid'

export class Collection extends Component {
	componentDidMount() {
		const { getMovies } = this.props
		getMovies()
	}
	shouldComponentUpdate(nProps){
		return nProps.sortedMovies.length !== this.props.sortedMovies.length
	}
	
	render() {
		const { sortedMovies } = this.props
		return (<Movies>
				{sortedMovies.map(movie => (<Movie key={shortid.generate()} {...movie} />))}
			</Movies>
		)
	}
}

Collection.propTypes = {
	getMovies:propTypes.func.isRequired,
	sortedMovies:propTypes.array.isRequired
}

const mapDispatchToProps = dispatch => ({
	getMovies: () => dispatch(actionGetMovies()),
})

const mapStorsToProps = ({MOVIES}) => ({
		sortedMovies: MOVIES.sortedMovies || []
})


export default connect(mapStorsToProps, mapDispatchToProps)(Collection)

const Movies = styled.div`
	background: #FFF;
	@media(min-width:768px){
		display: flex;
		flex-flow: row wrap;
		align-items: center;
}
`