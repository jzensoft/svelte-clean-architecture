import type DataState from "../core/resource/data_state";
import type { Photo } from "../data/model/photo";

export interface PhotoRepository {
    getPhotos(): Promise<DataState<Photo[] | null>>
}