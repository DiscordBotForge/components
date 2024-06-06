import { defineConfig } from "tsup";

// biome-ignore lint/style/noDefaultExport: must be default exported in tsup config
export default defineConfig({
	entry: ["index.ts"],
	format: ["cjs", "esm"],
	dts: true,
});
