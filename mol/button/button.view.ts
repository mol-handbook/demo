namespace $.$$ {
	export class $demo_mol_button extends $.$demo_mol_button {
		click_action(next?: Event) {
			alert("Вот ты и нажал на меня");
		}

		@ $mol_mem
		image_blob() {
			return $mol_fetch.blob("https://i.imgur.com/4mnKAas.jpeg");
		}
	}
}
