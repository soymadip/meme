const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.play();
			} else {
				entry.target.pause();
			}
		});
	},
	{ threshold: 0.5 }
);

document.addEventListener("DOMContentLoaded", () => {
	const videos = document.querySelectorAll(".lazy-video");
	videos.forEach((video) => observer.observe(video));

	// Add scroll functionality
	const scrollIndicator = document.querySelector(".scroll-indicator");
	const scrollIndicatorVideos = document.querySelector(
		".scroll-indicator-videos"
	);

	scrollIndicator.addEventListener("click", () => {
		document.getElementById("memes-section").scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});

	scrollIndicatorVideos.addEventListener("click", () => {
		document.querySelector("h2").scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
});
