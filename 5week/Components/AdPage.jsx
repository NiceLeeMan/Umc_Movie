import React from 'react';
import Ad from './Ad';

class AdPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { Show : true };
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	HandleToggleClick() {
		this.setState(prevState => ({
			Show : !prevState.Show
		}));
	}

	render() {
		return (
            <>
            <Ad Show = {Show} />
            <button onClick={this.HandleToggleClick}>
				{this.state.Show ? '광고 안 보기' : '광고 보기'}
			</button>
            </>
        );
	}
}

export default AdPage;
