import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import { terser } from "rollup-plugin-terser";
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'front/js/index.js',
    output: {
        format: 'iife',
        file: 'public/js/app.js',
        name: 'app'
    },
    plugins: [
        resolve(),
        commonjs({
            include: 'node_modules/**',
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        terser(),
        scss({
            output:'public/css/style.css',
            failOnError: true,
            watch: 'front/scss/',
            outputStyle: "compressed",
        })
    ]
}