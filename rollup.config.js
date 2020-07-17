import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'front/js/index.js',
    output: {
        format: 'iife',
        file: 'public/js/app.js',
        name: 'app'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        terser()
    ]
}