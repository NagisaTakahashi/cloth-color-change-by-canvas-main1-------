
// キャンバスの情報取得
const canA = $("#canvasA")[0];
const ctxA = canA.getContext("2d");

const canB = $("#canvasB")[0];
const ctxB = canB.getContext("2d");

const canC = $("#canvasC")[0];
const ctxC = canC.getContext("2d");

// const canD = $("#canvasD")[0];
// const ctxD = canD.getContext("2d");


//1.cancasA

// // Image オブジェクトを生成
var imgA_1 = new Image();
imgA_1.src = "img/160cm.png";

// 画像読み込み終了してから描画
imgA_1.onload = function(){
    ctxA.drawImage(imgA_1, 0, 0,346,570);
};

//2.cancasB

// // Image オブジェクトを生成
// var imgB_1 = new Image();
// imgB_1.src = "img/RC-N012.png";

// // 画像読み込み終了してから描画
// imgB_1.onload = function(){
//     ctxB.drawImage(imgB_1, 0, 0,346,570);
// };

// Image オブジェクトを生成
// var imgB_2 = new Image();
// imgB_2.src = "img/RC-N014/eri_V-07.png";

// // 画像読み込み終了してから描画
// imgB_2.onload = function(){
//     ctxB.drawImage(imgB_2, 0, 0,346,570);
// };

// // Image オブジェクトを生成
// var imgB_3 = new Image();
// imgB_3.src = "img/RC-N014/kata_SH-01_set-in.png";

// // 画像読み込み終了してから描画
// imgB_3.onload = function(){
//     ctxB.drawImage(imgB_3, 0, 0,346,570);
// };

// // Image オブジェクトを生成
// var imgB_4 = new Image();
// imgB_4.src = "img/RC-N014/kirikae_Just.png";

// // 画像読み込み終了してから描画
// imgB_4.onload = function(){
//     ctxB.drawImage(imgB_4, 0, 0,346,570);
// };

// // Image オブジェクトを生成
// var imgB_5 = new Image();
// imgB_5.src = "img/RC-N014/sode_short-cuffs.png";

// // 画像読み込み終了してから描画
// imgB_5.onload = function(){
//     ctxB.drawImage(imgB_5, 0, 0,346,570);
// };


//canvasBの内容をcanvasCに表示






//同時に取りに行く

// Image オブジェクトを生成
// var imgB_2 = new Image();
// var imgB_3 = new Image();
// var imgB_4 = new Image();
// var imgB_5 = new Image();
// imgB_2.src = "img/RC-N014/eri_V-07.png";
// imgB_3.src = "img/RC-N014/kata_SH-01_set-in.png";
// imgB_4.src = "img/RC-N014/kirikae_Just.png";
// imgB_5.src = "img/RC-N014/sode_short-cuffs.png";


// 画像読み込み終了してから描画


(function() {

        var srcs = [
            'img/RC-N014/eri_V-07.png',
            'img/RC-N014/kata_SH-01_set-in.png',
            'img/RC-N014/kirikae_Just.png',
            'img/RC-N014/sode_short-cuffs.png',
        ];
        var images = [];
        for (var i in srcs) {
            images[i] = new Image();
            images[i].src = srcs[i];
        }

        var loadedCount = 1;
        for (var i in images) {
            images[i].addEventListener('load', function() {
                if (loadedCount == images.length) {
                    var x = 0;
                    var y = 0;
                    for (var j in images) {
                        ctxB.drawImage(images[j], x, y, 346, 570);
                    }
                    // ctxB.globalCompositeOperation = "source-atop";
                    // ctxB.globalCompositeOperation = "multiply";
                    // ctxB.fillStyle = "rgba(255, 0, 0, 0.4)"; //不透明度0.5、赤で塗り潰し
                    // ctxB.fillRect(0,0,346,570);
                    // ctxB.globalCompositeOperation = "source-atop";


                    const imageData = ctxB.getImageData(0, 0, 346, 570);
                    ctxC.putImageData(imageData, 0, 0);

                    
                }
                loadedCount++;
                
                ctxC.fillStyle = "rgba(0, 0, 255, 0.4)"; //不透明度0.5、赤で塗り潰し
                ctxC.fillRect(0,0,346,570);
                ctxC.globalCompositeOperation = "source-atop"

            }, false);

        }                   


    }
)();






//透過カラーを追加してみる
// ctxB.globalCompositeOperation = "multiply";

// const imgBs = [ imgB_2.src, imgB_3.src, imgB_4.src, imgB_5.src];
// const imgBs = [ imgB_2, imgB_3, imgB_4, imgB_5];
// console.log(imgBs);

// imgBs[2].onload = function(){
// ctxB.fillStyle = "rgba(255, 0, 0, 0.5)"; //不透明度0.5、赤で塗り潰し
// ctxB.fillRect(0,0,200,400);
// };

// ctxB.globalCompositeOperation = "destination-atop";

// ctxB.fillStyle = "rgba(255, 0, 0, 0.5)"; //不透明度0.5、赤で塗り潰し
// ctxB.fillRect(0,0,200,400);

// ctxB.globalCompositeOperation = "source-atop";




//3.cancasDで透過してみる


// ctxC.fillStyle = "rgba(0, 0, 255, 0.5)"; //不透明度0.5、赤で塗り潰し
// ctxC.fillRect(50,50,200,400);
// ctxC.globalCompositeOperation = "source-atop";

// ctxD.fillStyle = "rgba(0, 0, 255, 0.5)"; //不透明度0.5、赤で塗り潰し
// ctxD.fillRect(50,50,200,400);

// ctxD.globalCompositeOperation = "source-in";

// ctxC.globalCompositeOperation = "multiply";

// ctxB.globalCompositeOperation = "xor";





















// // キャンバスのサイズ管理
// const canvasInfo = {
//     size: {
//         width: 346,
//         height: 570,
//     },
// };
// const sizeUnit = "px";
// const image = {
//     position: {
//         height: 0,
//         width: 0,
//     },
// };
// const fillStartPosition = {
//     x: 0,
//     y: 0,
// };

// // キャンバスの情報取得
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // キャンバスの情報取得
// const canvas1 = document.getElementById("canvas1");
// const ctx1 = canvas1.getContext("2d");


// // スカートに対して色を乗算してカラーリング
// ctx.fillStyle = "rgba(0, 0, 0, 0)";
// ctx.fillRect( 0, 0, 346, 570);

// const imageDataPath = "img/RC-N012.png";

// var imageObjA = new Image();
// imageObjA.onload = function () {
//     ctx.drawImage(imageObjA, 0,0,346,570);
// };
// imageObjA.src = imageDataPath;
// ctx.globalCompositeOperation = "multiply";

// // スカート以外に対しての余白部分に対しての色の上書きによる視覚上の削除
// ctx1.fillStyle = "white"; //外側を白色に埋めてる
// ctx1.fillRect(0, 0, 346, 570);

// var imageObjB = new Image();
// imageObjB.onload = function () {
//     ctx1.drawImage(imageObjB, 0,0,346,570);
// };
// imageObjB.src = imageDataPath;
// ctx1.globalCompositeOperation = "xor";

// // ボタンクリックした際に指定色を重ねる
// const colorButton = document.getElementById("btn");
// colorButton.addEventListener("click", function () {
//     const color = document.getElementById("addColor");

//     const rgbRed = parseInt(color.value.substring(1, 3), 16);
//     const rgbGreen = parseInt(color.value.substring(3, 5), 16);
//     const rgbBlue = parseInt(color.value.substring(5, 7), 16);
//     console.log(`RGB: ${rgbRed},${rgbGreen},${rgbBlue}`);

//     // clearRectしないと描画内容が新規更新されない。色がなぜか上塗りされる
//     ctx.clearRect(
//         0,0,346,570
//     );

//     ctx.fillStyle = `rgba(${rgbRed},${rgbGreen},${rgbBlue}, 0.7)`;
//     ctx.fillRect(
//         0,0,346,570
//     );

//     var imageObjA = new Image();
//     imageObjA.onload = function () {
//         ctx.drawImage(imageObjA, 0,0,346,570);
//     };
//     imageObjA.src = imageDataPath;
// });

// console.log(location.href);

// 参照サイト
// https://www.google.com/search?q=globalcompositeoperation+canvas+double&rlz=1C5CHFA_enJP844JP845&sxsrf=ALiCzsY5_9GZB_wjgSpFOzDtone36AKQ1Q:1667776686847&ei=rkBoY4auM8LCoASywYLYDg&start=10&sa=N&ved=2ahUKEwiGve-n2Jr7AhVCIYgKHbKgAOsQ8NMDegQIKBAW&biw=834&bih=639&dpr=2
// https://stackoverflow.com/questions/53622774/globalcompositeoperation-on-2-canvases
// https://note.affi-sapo-sv.com/js-globalcompositeoperation.php#i1
// https://codepen.io/rgraph/full/MWGRgEQ
// https://www.rgraph.net/canvas/reference/globalcompositeoperation.html
// https://www.tohoho-web.com/html/memo/canvas-2d.htm
// https://stackoverflow.com/questions/18598838/canvas-fillstyle-none-in-html5

// https://ics.media/entry/7258/
// https://pengi-n.co.jp/blog/mix-blend-mode/
