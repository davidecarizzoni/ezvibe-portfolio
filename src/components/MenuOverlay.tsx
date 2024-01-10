import React from "react";
import {NavLink, NavLinkProps} from "./NavLink";

export type MenuOverlayProps = {
	links: NavLinkProps[]
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
	return (
		<ul className="flex flex-col py-4 items-center">
			{links.map((link, index) => (
				<li key={index}>
					<NavLink {...link} />
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;
