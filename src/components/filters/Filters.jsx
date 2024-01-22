import { StyledFilters } from './styles';

const Filters = ({ action }) => {
	return (
		<StyledFilters>
			<h2>Platform</h2>
			<div>
				<input
					type='checkbox'
					id='ps5'
					name='PS5'
					onChange={event => action(event.target)}
				/>
				<label htmlFor='ps5'>PS5</label>
			</div>
			<div>
				<input
					type='checkbox'
					id='ps4'
					name='PS4'
					onChange={event => action(event.target)}
				/>
				<label htmlFor='ps4'>PS4</label>
			</div>
			<div>
				<input
					type='checkbox'
					id='pc'
					name='PC'
					onChange={event => action(event.target)}
				/>
				<label htmlFor='pc'>PC</label>
			</div>
			<div>
				<input
					type='checkbox'
					id='xbox'
					name='Xbox'
					onChange={event => action(event.target)}
				/>
				<label htmlFor='xbox'>Xbox</label>
			</div>
			<h2>Sort By</h2>
			<select name='sortby' id='sortby'>
				<option value='default'>Default</option>
				<option value='name'>Name</option>
				<option value='date'>Release Date</option>
			</select>
		</StyledFilters>
	);
};

export default Filters;
