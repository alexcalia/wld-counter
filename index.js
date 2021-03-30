const HtmlWebpackPlugin = require('html-webpack-plugin')

let entryPoints = {
    VideoOverlay:{
      path:"./src/VideoOverlay.js",
      outputHtml:"video_overlay.html",
      build:true
    },
    Config:{
      path:"./src/Config.js",
      outputHtml:"config.html",
      build:true
    },
    LiveConfig:{
      path:"./src/LiveConfig.js",
      outputHtml:"live_config.html",
      build:true
    },
}

let entry = {}
let output = []
for(name in entryPoints){
    if(entryPoints[name].build){
        entry[name]=entryPoints[name].path
        output.push(new HtmlWebpackPlugin({
            inject:true,
            chunks:name,
            template:'./template.html',
            filename:entryPoints[name].outputHtml
        }))
    }    
}
console.log(entry)
console.log(output)