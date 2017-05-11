(function (global) {
    System.config({
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            app: 'src/app',
            'rxjs': 'npm:rxjs',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
            '@angular/platform-server': 'npm:@angular/platform-server/bundles/platform-server.umd.min.js',
            '@angular/animations': 'npm: @angular/animations/',
        },
        packages: {
            app: {
                main: './src/main-jit.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'jQuery': {
                main: './node_modules/jquery/dist/jquery.min.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);