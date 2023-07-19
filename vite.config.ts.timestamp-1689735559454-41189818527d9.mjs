// vite.config.ts
import { defineConfig } from "file:///F:/antd-template-admin/node_modules/.pnpm/vite@4.3.2_@types+node@20.1.5_sass@1.62.1/node_modules/vite/dist/node/index.js";
import react from "file:///F:/antd-template-admin/node_modules/.pnpm/@vitejs+plugin-react@4.0.0_vite@4.3.2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import viteCompression from "file:///F:/antd-template-admin/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@4.3.2/node_modules/vite-plugin-compression/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///F:/antd-template-admin/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.3.2/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { viteMockServe } from "file:///F:/antd-template-admin/node_modules/.pnpm/vite-plugin-mock@2.9.6_mockjs@1.1.0_rollup@2.79.1_vite@4.3.2/node_modules/vite-plugin-mock/dist/index.js";
var vite_config_default = ({ command, mode }) => {
  return defineConfig({
    server: {
      open: true,
      port: 9753
    },
    plugins: [
      react(),
      viteCompression(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons/")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteMockServe({
        localEnabled: command === "serve"
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src")
      }
    },
    build: {
      outDir: mode === "production" ? "dist" : `dist-${mode}`
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxhbnRkLXRlbXBsYXRlLWFkbWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxhbnRkLXRlbXBsYXRlLWFkbWluXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9hbnRkLXRlbXBsYXRlLWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBQbHVnaW4gfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbidcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCAoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcbiAgICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcbiAgICAgICAgc2VydmVyOiB7XG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgcG9ydDogOTc1M1xuICAgICAgICB9LFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICByZWFjdCgpLFxuICAgICAgICAgICAgdml0ZUNvbXByZXNzaW9uKCksXG4gICAgICAgICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgICAgICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvaWNvbnMvJyldLFxuICAgICAgICAgICAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHZpdGVNb2NrU2VydmUoe1xuICAgICAgICAgICAgICAgIGxvY2FsRW5hYmxlZDogY29tbWFuZCA9PT0gJ3NlcnZlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZSgnLi9zcmMnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBidWlsZDoge1xuICAgICAgICAgICAgb3V0RGlyOiBtb2RlID09PSAncHJvZHVjdGlvbicgPyAnZGlzdCcgOiBgZGlzdC0ke21vZGV9YFxuICAgICAgICB9XG4gICAgfSlcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1AsU0FBUyxvQkFBNEI7QUFDN1IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUVqQixPQUFPLHFCQUFxQjtBQUM1QixTQUFTLDRCQUE0QjtBQUNyQyxTQUFTLHFCQUFxQjtBQUc5QixJQUFPLHNCQUFRLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUNsQyxTQUFPLGFBQWE7QUFBQSxJQUNoQixRQUFRO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDVjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sZ0JBQWdCO0FBQUEsTUFDaEIscUJBQXFCO0FBQUEsUUFDakIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxtQkFBbUIsQ0FBQztBQUFBLFFBQzNELFVBQVU7QUFBQSxNQUNkLENBQUM7QUFBQSxNQUNELGNBQWM7QUFBQSxRQUNWLGNBQWMsWUFBWTtBQUFBLE1BQzlCLENBQUM7QUFBQSxJQUNMO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDTCxPQUFPO0FBQUEsUUFDSCxLQUFLLEtBQUssUUFBUSxPQUFPO0FBQUEsTUFDN0I7QUFBQSxJQUNKO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxRQUFRLFNBQVMsZUFBZSxTQUFTLFFBQVE7QUFBQSxJQUNyRDtBQUFBLEVBQ0osQ0FBQztBQUNMOyIsCiAgIm5hbWVzIjogW10KfQo=
