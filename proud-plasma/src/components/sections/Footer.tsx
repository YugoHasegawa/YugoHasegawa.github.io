import type React from "react";
import { appData } from "../../data/appData";

const Footer: React.FC = () => {
	return (
		<footer className="py-8 text-center space-y-4 border-t border-white/5">
			<div className="text-sm text-gray-500">
				<p>
					&copy; {new Date().getFullYear()}{" "}
					<span className="text-gray-400">{appData.title}</span>
					<br />
					All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
