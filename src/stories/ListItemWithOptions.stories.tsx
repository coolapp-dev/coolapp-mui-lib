import type { Meta, StoryObj } from "@storybook/react";
import { Button, Box, Paper } from "@mui/material";
import { ListItemWithOptions } from '..'
import { default as OptionsMenu } from '../lib/components/listitemwithoptions/OptionsMenu'


const meta: Meta<typeof ListItemWithOptions> = {
	component: ListItemWithOptions,
};

export default meta;
type Story = StoryObj<typeof ListItemWithOptions>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Single: Story = {
	render: () =>

		<Box
			sx={{

				maxWidth: "300px",
				backgroundColor:"background.paper"

			}}
		>
			<ListItemWithOptions />

		</Box>,
};


export const OptionsMenuDemo: Story = {
	render: () =>

		<Box
			sx={{

				maxWidth: "300px",
				backgroundColor:"background.paper",
				position:"relative"

			}}
		>
			<OptionsMenu open={true} />

		</Box>,
};




