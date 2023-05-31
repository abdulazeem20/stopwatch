let min = 0;
let hr = 0;
let sec = 0;
let interval;

$("#start").on("click", function () {
	$(this).prop({ disabled: true });
	interval = setInterval(() => {
		sec++;
		setTimer();
	}, 1000);
});
$("#pause").on("click", function () {
	clearInterval(interval);
	$("#start").prop({ disabled: false });
});
$("#reset").on("click", function () {
	min = 0;
	sec = 0;
	hr = 0;
	setTimer();
	clearInterval(interval);
	$("#start").prop({ disabled: false });
});

let setTimer = () => {
	if (sec >= 60) {
		sec = 0;
		min++;
	}
	if (min >= 60) {
		min = 0;
		hr++;
	}

	let handleDom = (time) => {
		let result = time < 10 ? `0${time}` : time;
		return result;
	};
	$("#sec").text(handleDom(sec));
	$("#min").text(handleDom(min));
	$("#hr").text(`${hr}hr`);
};
