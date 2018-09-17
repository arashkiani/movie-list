import React, { Component } from 'react'
import {connect} from 'react-redux'
import Input from '../../components/input'
import styled from 'styled-components'
import {actionUpdateRangeFilter} from '../../redux/filters'
/*
Notes: 
Used movie.backdrop_path as ID just to avoid importing external library
*/
export class SelectRangeFilter extends Component {
	//range between 0 and 10, increments of 0.5
	shouldComponentUpdate(nProps){
		return nProps === this.props
	}
	render() {
		const { updateRangeFilter, filterByRange } = this.props
		return(<Wrapper>
			<form onChange={updateRangeFilter}>
				<Label htmlFor="minRating">Rating</Label>
				<Input
					name="minRating"
					type="range"
					defaultValue={filterByRange}
					min="0"
					max="10"
					step="0.5"
					/>
				</form>
		</Wrapper>
		) 
	}
}

const mapDispatchToProps = dispatch => ({
	updateRangeFilter:({target})=>dispatch(actionUpdateRangeFilter(target))
})

export default connect(({FILTERS}) => ({filterByRange:FILTERS.filterByRange}), mapDispatchToProps)(SelectRangeFilter)

const Wrapper = styled.div`
	
	background:#4CAF50;
`
const Label = styled.label`
font-size: 1rem;
display: inline-block;
top:-18px;
margin-right:10px;
position:relative;
color:#FFF;
padding:0 1em 0.04em
@media(max-width:550px){
		display:none
	}
`