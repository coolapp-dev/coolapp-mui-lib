import type { Meta, StoryObj } from "@storybook/react";
import { Button, Box, Paper } from "@mui/material";
import { Stat } from '../lib/components/demostat/Main'


const meta: Meta<typeof Stat> = {
	component: Stat,
};

export default meta;
type Story = StoryObj<typeof Stat>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

const SampleMenu = () => {

	return (

		<Box
			sx={{
				height: "100%",
				width: "300px",
				display: "flex",
				flexDirection: "column",
				flex: 1,
			}}
		>

			<Box
				sx={{

					maxWidth: "200px",

				}}
			>

				<Box
					sx={{
						background: "yellow",
						p: 1
					}}
				>	 <Stat value="5.1M" unit="Views" variant="outlined" />

				</Box>

				<Box
					sx={{
						background: "maroon",
						p: 1
					}}
				>

					<Stat value="1.9M" unit="Favorites" />
				</Box>
			</Box>
		</Box>

	)
}


export const Single: Story = {
	render: () =>

		<Box
			sx={{

				maxWidth: "500px",

			}}
		>
			<Stat value="1.9M" unit="Favorites" />

		</Box>,
};


export const List: Story = {
	render: () => <SampleMenu />,
};