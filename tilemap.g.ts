// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1900100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030000000000000000000003020202020202020202020202020300000000000000000000030201010101010101010101010203000000000000000000000302010101010101010101010102030000000000000000000003050101010101010101010101020300000000000000000000030501010101010101010101010404000000000000000000000305010101010101010101010102030000000000000000000003020101010101010101010101020300000000000000000000030201010101010101010101010203000000000000000000000302020202020202020202020202030000000000000000000003030303030303030303030303030300000000000000`, img`
.........................
.........................
.........................
.........................
.........................
...222222222222222.......
...222222222222222.......
...22...........22.......
....2...........22.......
................22.......
.........................
................22.......
....2...........22.......
...22...........22.......
...222222222222222.......
...222222222222222.......
`, [myTiles.transparency16,myTiles.tile1,sprites.builtin.forestTiles0,myTiles.tile2,myTiles.tile3,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
