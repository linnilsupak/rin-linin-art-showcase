import { Routes } from "@angular/router";
import { ArtFight2024Component } from "./art-fight-2024/art-fight-2024.component";
import { JapanTrip2023Component } from './japan-trip-2023/japan-trip-2023.component';
import { SweetArtComponent } from './sweet-art/sweet-art.component';
import { GenshinFanArtComponent } from './genshin-fan-art/genshin-fan-art.component';
import { VocaloidFanArtComponent } from './vocaloid-fan-art/vocaloid-fan-art.component';
import { FanArtComponent } from './fan-art/fan-art.component';
import { ArtTradeComponent } from './art-trade/art-trade.component';
import { EtcComponent } from './etc/etc.component';
import { VtuberFanArtComponent } from './vtuber-fan-art/vtuber-fan-art.component';

export const playgroundRoomRoutes: Routes = [
    {
        path: 'art-fight-2024',
        title: 'ArtFight 2024: Rin Linin',
        component: ArtFight2024Component
    },
    {
        path: 'japan-trip-2023',
        title: 'Japan Trip 2023: Rin Linin',
        component: JapanTrip2023Component
    },
    {
      path: 'sweet-art',
      title: 'Sweet Art: Rin Linin',
      component: SweetArtComponent
    },
    {
      path: 'genshin-fan-art',
      title: 'Genshin Fan Art: Rin Linin',
      component: GenshinFanArtComponent
    },
    {
      path: 'vocaloid-fan-art',
      title: 'Vocaloid Fan Art: Rin Linin',
      component: VocaloidFanArtComponent
    },
    {
      path: 'vtuber-fan-art',
      title: 'Vtuber Fan Art: Rin Linin',
      component: VtuberFanArtComponent
    },
    {
      path: 'fan-art',
      title: 'Fan Art: Rin Linin',
      component: FanArtComponent
    },
    {
      path: 'art-trade',
      title: 'Art Trade: Rin Linin',
      component: ArtTradeComponent
    },
    {
      path: 'etc',
      title: 'Etc: Rin Linin',
      component: EtcComponent
    }
];
