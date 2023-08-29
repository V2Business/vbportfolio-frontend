import React from "react";
import Hero from "./Subcomponents/Hero/Hero";
import Crafting from "./Subcomponents/Crafting/Crafting";
import Automation from "./Subcomponents/Automation/Automation";
import Trust from "./Subcomponents/Trust/Trust";
import Contact from "./Subcomponents/Contact/Contact";

const Home = () => {
	return (
		<div className="relative">
			<div className="relative">
				<div className="absolute bottom-0 right-0 z-0">
					<div className="relative pinkBox bg-[#b292fd] w-[900px] h-[900px] rounded-full z-0"></div>
				</div>
				<div className="absolute bottom-0 left-0 z-0">
					<div className="relative pinkBox bg-[#7b17e0] w-[700px] h-[700px] rounded-full z-0 blur-[200px]"></div>
				</div>

				<div className="bg-[#ffffff7f] backdrop-blur-[100px] z-10">
					<Hero />
					<Crafting />
					<Automation />
					<Trust />
					<Contact />
				</div>
			</div>{" "}
		</div>
	);
};

export default Home;
