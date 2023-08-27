// Bitdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700F898 - 0x0700F91C
export const bitdw_seg7_collision_0700F898 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(-204, 0, 307),
    COL_VERTEX(-204, 102, 307),
    COL_VERTEX(-204, 102, -306),
    COL_VERTEX(205, 0, 307),
    COL_VERTEX(205, 102, 307),
    COL_VERTEX(205, 102, -306),
    COL_VERTEX(-204, 0, -306),
    COL_VERTEX(205, 0, -306),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 0, 3),
    COL_TRI(4, 1, 3),
    COL_TRI(1, 4, 5),
    COL_TRI(2, 1, 5),
    COL_TRI(6, 0, 2),
    COL_TRI(3, 0, 6),
    COL_TRI(4, 3, 7),
    COL_TRI(7, 3, 6),
    COL_TRI(5, 4, 7),
    COL_TRI(5, 7, 6),
    COL_TRI(2, 5, 6),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)