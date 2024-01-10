"use client";
import React from "react";

const BEAT_STARS_LINK = "https://player.beatstars.com/?storeId=131765"
export const BeatsSection = () => {
	return (
		<section className="lg:py-16" id={"beats"}>
			<div className={"h-full text-center"}>
				<h2 className="text-5xl mb-6 font-bold text-white">Buy my beats</h2>
			</div>
			<iframe
				className={"w-full h-[50rem]"}
				src={BEAT_STARS_LINK}
			/>
		</section>
	)
}
