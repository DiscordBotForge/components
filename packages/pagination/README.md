# Discord.js Pagination Component
---
# Usage
```ts
import { PaginationBuilder } from "@discordforge/pagination";

new PaginationBuilder(
    // Provide actual data
	commands.map(({ data: { name, description } }) => ({
		name,
		description
	})),
    // Provide a mapper to convert data into embed fields
	async ({ name, description }) => ({
		name: `/${name}`,
		value: description
	})
)
	.setTitle("Help Menu")
	.setColor(Colors.Blurple)
	.build((page) => interaction.reply(page), [interaction.user.id]); // Provide a call back which returns the message & an array of userIds for users who should be able to interact with the component
```
