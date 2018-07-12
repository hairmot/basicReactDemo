const {render} = ReactDOM

//components
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
				"Title": "My Panel",
				"Options": [{
					"href": "...",
					"Label": "First Link"
				}, {
					"href": "...",
					"Label": "Second Link"
				}]
			}
	}

	render() {
		var links = this.state.Options.map(a => <Link href={a.href} label={a.Label}></Link>)

		return (
			<div>
				<SitsPanel title="My Panel">
					{links}
				</SitsPanel>
			</div>
		)
	}
}

class SitsPanel extends React.Component {

	render() {	
		return (
			<div className="sv-col-md-6">
				<div className="sv-panel sv-panel-primary">
					<div className="sv-panel-heading">
						<h2 className="sv-panel-title">
							{this.props.title}
						</h2>
					</div>
					<div className="sv-list-group">
						{this.props.children}
					</div>
				</div>
			</div>						
		)
	}
}

class Link extends React.Component {
	
	render() {	
		return (
			<a className="sv-list-group-item sv-list-group-item-overflow" href={this.props.href}>
				{this.props.label}
			</a>
		)
	}
}

//Mount app
render(<App />, document.querySelector('#app'))