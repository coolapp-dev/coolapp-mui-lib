import type { Meta, StoryObj } from "@storybook/react";
//import { ControlsWrapper } from "..";

import { Button, Box, Paper } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ViewListIcon from '@mui/icons-material/ViewList';
import { AspectRatio } from '..'

import { ExpandableListItemWithIcon as ControlsWrapper } from "..";

const meta: Meta<typeof ControlsWrapper> = {
	component: ControlsWrapper,
};

export default meta;
type Story = StoryObj<typeof ControlsWrapper>;

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
				>	<AspectRatio ratio={16 / 9}>
						<Box
							sx={{
								background: "blue",
								width: "100%",
								height: "100%"
							}}
						>
							<div>16 / 9</div>
						</Box>

					</AspectRatio>

				</Box>

				<Box
					sx={{
						background: "maroon",
						p: 1
					}}
				>

					<AspectRatio ratio={16 / 10}>
					<Box
							sx={{
								background: "blue",
								width: "100%",
								height: "100%"
							}}
						>
							<div>16 / 10</div>
						</Box>
					</AspectRatio>

				</Box>


				<Box
					sx={{
						background: "green",
						p: 1
					}}
				>
					<AspectRatio ratio={4 / 3}>
					<Box
							sx={{
								background: "blue",
								width: "100%",
								height: "100%"
							}}
						>
							<div>4 / 3</div>
						</Box>
					</AspectRatio>

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
			<AspectRatio ratio={16 / 9}>
				<div>16 / 9</div>
			</AspectRatio>

		</Box>,
};


export const List: Story = {
	render: () => <SampleMenu />,
};