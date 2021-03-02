import React from "react";
import "@fontsource/dm-serif-display";
import "@fontsource/lato";
import { Link } from "gatsby";

// style
const bottom = {
	lineHeight: 1,
	borderBottom: "1px solid #e5e5e5"
};

const font = {
	fontFamily: '"DM Serif Display", Georgia, "Times New Roman", serif',
	fontSize: "2.25rem",
	fontWeight: "700"
};

export default function Layout({ children }) {
	return (
		<>
		<div className="container">
			<div
				style={bottom}
				className="row mb-4 flex-nowrap justify-content-between align-items-center py-3"
			>
				<div class="col-2 pt-1 text-muted">
					<Link to="/how">how</Link>
				</div>
				<div class="col-8 text-center align">
				<Link to="/" style={font} >
					csgomath
				</Link>
				</div>
				<div class="col-2 d-flex text-muted justify-content-end">
					<Link to="https://jakjus.com" target="_blank">author</Link>
				</div>
			</div>
			{children}
		</div>
			<footer class="blog-footer">
				<p>Powered by Steam. Built by <Link to="https://jakjus.com">@jakjus</Link>.</p>
			</footer>
		</>
	);
}
