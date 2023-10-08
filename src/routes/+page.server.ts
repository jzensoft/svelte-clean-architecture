import { container } from "../di/injection_container";
import { SERVICE_KEY } from "../di/service_keys_const";
import type { PhotoRepository } from "../domain/photo_repository";

export const load = async () => {
    const photoRepository = container.get<PhotoRepository>(SERVICE_KEY.PHOTO_REPOSITORY);
    const res = await photoRepository.getPhotos();
    if (res.success) {
        return {
            photos: res.data!!
        }
    }
    return {
        photos: []
    }
}