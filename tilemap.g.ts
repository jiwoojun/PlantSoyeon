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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1900100007070707070707070707070707070707070707070a090a070707070707070707070707070707070707070707070a080a07070707070707070707070707070707070707070707070807070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070707070708080707070303030303030303030303030303030707070707070807070703020202020202020202020202020307070707070708070707030201010101010101010101010203070707070707080707070602010101010101010101010102030707070707070807070706050101010101010101010101020307070707070708070707060501010101010101010101010404080707070707080707070605010101010101010101010102030808080808080807070706020101010101010101010101020307070707070707070707030201010101010101010101010203070707070707070707070302020202020202020202020202030707070707070707070703030303030303030303030303030307070707070707`, img`
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
`, [myTiles.transparency16,myTiles.tile1,sprites.builtin.forestTiles0,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile7,sprites.castle.tileGrass1,sprites.castle.tilePath5,myTiles.tile9,sprites.builtin.brick,myTiles.tile10], TileScale.Sixteen);
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
            case "myTile6":
            case "tile8":return tile8;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
