import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'front/js/index.js',
    output: {
        format: 'iife',
        file: 'public/js/app.js',
        name: 'app'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
        }),
        terser()
    ]
}