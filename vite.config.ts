import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import typescript from '@rollup/plugin-typescript'

const resolvePath = (str: string) => path.resolve(__dirname, str);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolvePath("packages/index.ts"),
      name: "complib",
      fileName: format => `complib.${format}.js`,
    },
    rollupOptions: {
        external: ["react", "react-dom", "antd"],
        output: {
          globals: {
            react: "react",
            antd: "antd",
            "react-dom": "react-dom",
          },
        },  
        plugins: [
          typescript({
            target: "es2015", // 这里指定编译到的版本，
            rootDir: resolvePath("packages/"),
            declaration: true,
            declarationDir: resolvePath("dist"),
            exclude: resolvePath("node_modules/**"),
            allowSyntheticDefaultImports: true,
          }),
        ],
    },
  },
})