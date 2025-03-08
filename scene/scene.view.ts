namespace $.$$ {
	export class $demo_scene extends $.$demo_scene {
		sub(): readonly (any)[] {
			let sub = super.sub()
			const need_filter = this.$.$mol_state_arg.value("filter")

			if (need_filter == "false") {
				return sub
			}

			let id = this.$.$mol_state_arg.value("scene")

			return sub.filter(scene => {
				return Object.keys(scene.attr_static()).includes(id!)
			})
		}
	}
}
