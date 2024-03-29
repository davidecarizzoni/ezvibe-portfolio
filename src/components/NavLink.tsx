import Link from "next/link";

export type NavLinkProps = {
	href: string;
	title: string;
}

export const NavLink = ({ href, title }: NavLinkProps) => {
	return (
		<Link
			href={href}
			scroll={true}
			className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
		>
			{title}
		</Link>
	);
};
