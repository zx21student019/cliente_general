function cambiaSize() {
let tamano = $("#selecion").val();	
	if (tamano=="14px") {
		let tm14 = {
			fontSize: "14px"
		}
		$("h2").append(
			tm14
		)
		$("h4").append(
			tm14
		)
		$("hp").append(
			tm14
		)
	}else if (tamano=="16px") {
		let tm16 = {
			fontSize: "16px"
		}
		$("h2").append(
			tm16
		)
		$("h4").append(
			tm16
		)
		$("hp").append(
			tm16
		)


	}else if (tamano=="20px") {
		let tm20 = {
			fontSize: "20px"
		}
		$("h2").append(
			tm20
		)
		$("h4").append(
			tm20
		)
		$("hp").append(
			tm20
		)
	}
};