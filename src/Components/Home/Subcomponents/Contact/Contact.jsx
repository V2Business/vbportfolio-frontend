import React, { useState } from "react";
import Clip from "../../../../assets/Contact/Clip.svg";
import gsap from "gsap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckBox = ({ text, onClick }) => {
	const [checked, setChecked] = useState(false);

	const click = (e) => {
		if (checked === true) {
			setChecked(false);
			gsap.to(e.target, {
				background: "transparent",
				color: "#000",
				duration: 0.5,
				border: "2px solid #000",
			});
			onClick(e);
		} else {
			setChecked(true);
			gsap.to(e.target, {
				background: "linear-gradient(to bottom right, #7F00FF, #B292FD)",
				color: "#fff",
				duration: 0.5,
				border: "2px solid transparent",
			});
			onClick(e);
		}
	};
	return (
		<div
			className="border-2 border-black p-2.5 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-base text-sm font-medium cursor-pointer"
			id={text}
			onClick={(e) => click(e)}
		>
			{text}
		</div>
	);
};

const InputBox = ({ placeholder, type, name, ...otherProps }) => {
	return (
		<input
			type={type}
			name={name}
			id=""
			placeholder={placeholder}
			className="w-full border-b-2 border-black font-Figtree 2xl:text-xl xl:text-xl lg:text-xl md:text-base sm:text-base text-base outline-none px-2 bg-transparent"
			{...otherProps}
		/>
	);
};

const Contact = () => {
	const data = [
		"UI UX Design",
		"Software Development",
		"Portfolio",
		"3D Models",
		"Website",
		"Product Shoot",
		"Brand",
	];

	const [currInfo, setCurrInfo] = useState({
		name: undefined,
		email: undefined,
		description: undefined,
		topics: [],
	});

	const Change = (e) => {
		setCurrInfo((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
		console.log(currInfo);
	};

	const topicSetter = (e) => {
		const updatedTopics = new Set(currInfo.topics);

		if (!updatedTopics.has(e.target.id)) {
			updatedTopics.add(e.target.id);
		} else {
			updatedTopics.delete(e.target.id);
		}

		setCurrInfo((prev) => ({
			...prev,
			topics: Array.from(updatedTopics),
		}));

		console.log(currInfo);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:3000/dataSend", currInfo);

			// console.log(res);

			if (res.status === 200) {
				toast.success("We will contact you soon");
			} else {
				toast.error("There was an error");
			}
		} catch (e) {
			toast.error("An error occurred");
		}
	};
	return (
		<div className="mt-[220px] container mx-auto py-[60px]">
			<div className="font-Lastica 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl tracking-[5.28px] text-center contactHead">
				YOUR JOURNEY STARTS HERE !
			</div>

			<div className="2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 grid mt-[100px] gap-y-8">
				<div className="h-full w-full justify-center items-center flex">
					<div className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center font-Figtree text-white font-extrabold">
						Have a project?
						<br />
						We would love to help
					</div>
				</div>

				<div className="h-full 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-2 sm:mx-4 mx-4 2xl:w-full xl:w-full lg:w-full md:w-fit sm:w-fit w-fit">
					<div className="bg-gradient-to-br from-[#ffffffba] to-[#ffffff5b] rounded-[31px] border-2 border-white shadow px-[43px] py-[47px]">
						<div className=" flex flex-col gap-y-[21px]">
							<div className="font-Figtree font-bold 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[32px] sm:text-[24px] text-[24px]">
								I'm interested in
							</div>

							<div className="select flex flex-wrap gap-x-[14px] gap-y-[9px]">
								{data.map((e) => {
									return (
										<CheckBox
											text={e}
											key={e}
											onClick={(e) => {
												topicSetter(e);
											}}
										/>
									);
								})}
							</div>
						</div>

						<div className="inputs flex flex-col gap-y-[25.81px]">
							<div className="mt-[38px] flex flex-col gap-y-[30px]">
								<InputBox
									type={"text"}
									name={"name"}
									placeholder={"Your Name"}
									value={currInfo.name}
									onChange={(e) => Change(e)}
								/>
								<InputBox
									type={"email"}
									name={"email"}
									placeholder={"Your Email"}
									value={currInfo.email}
									onChange={(e) => Change(e)}
								/>
								<InputBox
									type={"text"}
									name={"description"}
									placeholder={"Tell us about your project"}
									value={currInfo.desc}
									onChange={(e) => Change(e)}
								/>
							</div>
							{/* <div className="attachDiv">
								<input
									type="file"
									name=""
									id="file-input"
									className="attachFile hidden"
								/>
								<label
									id="file-input-label"
									for="file-input"
									className="font-Figtree font-semibold text-base border border-black p-2.5 flex gap-x-2.5 w-fit bg-transparent cursor-pointer"
								>
									<div className="clip">
										<img src={Clip} alt="" />
									</div>
									Add Attachment
								</label>
							</div> */}
						</div>
						<div className="bookAnAppointment mt-[38px]">
							<button
								className="book bg-black text-white p-2.5 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-sm"
								onClick={(e) => handleSubmit(e)}
							>
								Book an Appointment
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
