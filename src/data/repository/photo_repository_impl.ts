import { inject, injectable } from "inversify";
import type { PhotoRepository } from "../../domain/photo_repository";
import type { Photo } from "../model/photo";
import { SERVICE_KEY } from "../../di/service_keys_const";
import type PhotoService from "../remote/photo_service";
import DataState from "../../core/resource/data_state";

@injectable()
class PhotoRepositoryImpl implements PhotoRepository {
    private _photoService: PhotoService;

    constructor(
        @inject(SERVICE_KEY.PHOTO_SERVICE) photoService: PhotoService
    ) {
        this._photoService = photoService;
    }

    async getPhotos(): Promise<DataState<Photo[] | null>> {
        try {
            const res = await this._photoService.getInstance().get<Photo[]>("/photos");
            return new DataState(res.data, res.status == 200, res.statusText);
        } catch (e) {
            return new DataState(null, false, `${e}`);
        }
    }
}

export default PhotoRepositoryImpl