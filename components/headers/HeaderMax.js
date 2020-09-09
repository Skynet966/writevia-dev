export default function HeaderMax(props){
    return (
        <div className="page-header">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center header-body">
						<div className="header-title">
							<h1 className="text-uppercase typewriter">{props.title}</h1>
						</div>
						<p className="lead">{props.subtitle}</p>
					</div>
				</div>
			</div>
		</div>
    )
}