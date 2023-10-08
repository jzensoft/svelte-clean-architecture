<script lang="ts">
	import { onMount } from 'svelte';
	import type { Photo } from '../data/model/photo';
	import { container } from '../di/injection_container';
	import { SERVICE_KEY } from '../di/service_keys_const';
	import type { PhotoRepository } from '../domain/photo_repository';
 
	let data: Photo[] = [];

	onMount(() => {
		getPhotos();
	});

	const getPhotos = async () => {
		const photoRepository = container.get<PhotoRepository>(SERVICE_KEY.PHOTO_REPOSITORY);
		const res = await photoRepository.getPhotos();
		if (res.success) {
			data = res.data!!;
		} else {
			alert(res.error);
		}
	};
</script>

<button on:click={getPhotos}>Get Photos</button>
<hr />
<ul>
	{#each data as photo}
		<li>
			{photo.title}
		</li>
	{/each}
</ul>
