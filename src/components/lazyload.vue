<template>
	
	<img :data-original="imgpic" :data-original-set="imgpic">

</template>

<script>

	export default {
		props:{
			imgpic:{
				type:String
			}
		},
		ready () {
			new LazyLoad({
				data_src: 'original',
				data_srcset: 'original-set'
			})
		},
		methods:{
			
 		}
	}

</script>