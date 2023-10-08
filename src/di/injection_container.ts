import "reflect-metadata";
import { Container } from "inversify";
import { SERVICE_KEY } from "./service_keys_const";
import PhotoRepositoryImpl from "../data/repository/photo_repository_impl";
import type { PhotoRepository } from "../domain/photo_repository";
import PhotoService from "../data/remote/photo_service";

const _container = new Container();
_container.bind<PhotoService>(SERVICE_KEY.PHOTO_SERVICE).to(PhotoService).inSingletonScope();
_container.bind<PhotoRepository>(SERVICE_KEY.PHOTO_REPOSITORY).to(PhotoRepositoryImpl).inSingletonScope();

export const container = _container;