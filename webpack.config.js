// webpack.config.js
// webpack 명령은 기본적으로 이 설정으로 시작
// entry = 번들을 설정하기 위한 진입점을 의미

const path = require( 'path' ); // 경로를 설정
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // node_modules 에서 불러옴


module.exports = {
    // 웹팩 v4부터는 mode 필수
    // mode 는 production, development, none 3가지 옵션이 존재
    // mode 의 production 은 각 설정마다 내장된 최적화 옵션을 자동으로 설정하여 준다
    mode : 'development',
    entry: {
        junesu : './src/js/index.js',
        // 'module.chunk' : ['./src/js/module1.js', './src/js/module2.js']  배열 사용(오른쪽부터 왼쪽으로 읽어감) }
    },
    output: {
         // filename 으로 생성된 번들링을 어느 경로에 생성할 지를 설정
         // __dirname 은 node 에서 제공하는 node 파일의 경로를 담고 있는 변수
         // __이 붙어 있는 변수들은 항상 무엇인가를 담고있는 특별한 변수들임
         // path 에는 절대 경로 설정(절대값으로 static(정적)으로 사용)
         // filename: 'dist/[name].js',
         path : path.resolve(__dirname, 'dist'),
         filename : '[name].js', // 위에 지정한 entry 키의 이름에 맵핑되어 파일이 생성됨

    },
     // 로더를 지정하기 위한 module 정의
    module: {
        rules: [
            //module.rules 를 사용해 여러개의 로더 지정이 가능.
            {
                // test : 변환 할 파일을 지정
                // 정규 표현식으로 문자열 .css 확장자로 끝나는 것을 찾음.
                test: /\.css$/,
                // use : 해당 파일에 적용할 로더의 이름
                // 로더에서 모듈 로딩 순서는 배열의 요소 오른쪽에서 왼쪽으로 로딩하며 진행
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
                // exclude 는 제외할 폴더나 파일
                // 다른 모듈을 사용해서 컴파일하지 않도록 지정(안전성 확보)
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
        new MiniCssExtractPlugin({ filename: '/css/style.css' })
    ]
};
