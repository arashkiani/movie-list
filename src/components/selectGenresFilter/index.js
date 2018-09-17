import React, { Component } from 'react'
import {connect} from 'react-redux'
import Input from '../../components/input'
import styled from 'styled-components'
import {actionGetGenres} from '../../redux/movies';
import {actionUpdateGenresFilter} from '../../redux/filters'
import propTypes from 'prop-types'
/*
Notes: 
Used movie.backdrop_path as ID just to avoid importing external ID generating library
*/
export class SelectGenresFilter extends Component {
	state = {
		toggle: false
	}
	componentDidMount() {
		this.props.getGenres()
	}
	shouldComponentUpdate(nProps){
		return nProps===this.props
	}
	toggleHandler = ()=>{
		const { toggle } = this.state
		this.setState({ toggle: !toggle })
	}
	componentDidCatch(error, info) {
		//track it in Raygun / Rollbar
		console.log(error, info);
  }
	render() {
		const { toggle } = this.state
		const {genres, selectedOptions} = this.props
		return (
			<div>
			<Btn onClick={this.toggleHandler}>Filter {toggle?'▲':'▼'}</Btn>
			{toggle && <GenresWrapper><form onChange={this.props.updateGenresFilter}>
					{genres.map(genre => {
						return (
							<Label key={genre.id}><Input type="checkbox" id={genre.id} name={genre.name} defaultValue={genre.id} defaultChecked={selectedOptions.includes(genre.id)} />{genre.name}</Label>
						)
					})}
			</form></GenresWrapper> }
			</div>
		)
	}
}
const mapStateToProps = ({MOVIES, FILTERS}) => ({
	genres: MOVIES.genres, 
	selectedOptions: FILTERS.filterByGenres
})
const mapDispatchToProps = dispatch => ({
		getGenres: () => dispatch(actionGetGenres()),
		updateGenresFilter:({target})=>dispatch(actionUpdateGenresFilter(target))
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectGenresFilter)

SelectGenresFilter.propTypes = {
	getGenres:propTypes.func.isRequired,
	updateGenresFilter:propTypes.func.isRequired,
	genres:propTypes.array.isRequired
}


const GenresWrapper = styled.div`
	z-index:99;
	position:absolute;
	right:0;
	background: #FFF;
	padding: 1em;
	width:12em;
`
export const Btn = styled.button`
	background-color: #4CAF50;
	border:none;
	outline: 0;
	-webkit-box-shadow: none;
  box-shadow: none;
	color: white;
	cursor: pointer;
  padding: 1em;
  text-align: center;
	font-size: 1rem;
	width:12em;
`
const Label = styled.label`
	display: block;
`