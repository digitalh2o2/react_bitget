import React from "react";

class Search extends React.Component {
	render() {
		const { onSubmit, value, onChange, toggleSort, children } = this.props;
		return (
			<section>
				<form onSubmit={onSubmit} className="input-field">
					<div className="field has-addons">
						<div className="control ">
							<input
								type="text"
								className="input"
								value={value}
								onChange={onChange}
								placeholder="Search For A Game"
							/>
						</div>
						<div className="control">
							<a className="button is-info" onClick={onSubmit}>
								{children}
							</a>
							<select
								className="button is-primary"
								onClick={e => toggleSort(e)}
								style={{ width: "100px" }}
							>
								<option value="" disabled selected hidden>
									Filter..
								</option>
								<option value="a">A..Z</option>
								<option value="z">Z..A</option>
							</select>
						</div>
					</div>
				</form>
			</section>
		);
	}
}

export default Search;
