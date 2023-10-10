import React from "react";

function Nav(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("about")}>About</span>
				</li>
				<li className={currentTab === "buy" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("buy")}>Buy Now</span>
				</li>
				<li className={currentTab === "resources" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("resources")}>Resources</span>
				</li>
				<li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;