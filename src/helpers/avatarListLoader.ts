/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import appPhotosManager from "../lib/appManagers/appPhotosManager";
import ListLoader, { ListLoaderOptions } from "./listLoader";

export default class AvatarListLoader<Item extends {photoId: string}> extends ListLoader<Item, any> {
  private peerId: number;

  constructor(options: Omit<ListLoaderOptions<Item, any>, 'loadMore'> & {peerId: number}) {
    super({
      ...options,
      loadMore: (anchor, older, loadCount) => {
        if(this.peerId < 0 || !older) return Promise.resolve({count: 0, items: []}); // ! это значит, что открыло аватар чата, но следующих фотографий нет.

        const maxId = anchor?.photoId;
        return appPhotosManager.getUserPhotos(this.peerId, maxId, loadCount).then(value => {
          const items = value.photos.map(photoId => {
            return {element: null as HTMLElement, photoId} as any;
          });

          return {count: value.count, items};
        });
      }
    });

    this.loadedAllUp = true;
    this.peerId = options.peerId;
  }
}