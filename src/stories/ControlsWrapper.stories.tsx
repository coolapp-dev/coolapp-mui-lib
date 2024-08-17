import type { Meta, StoryObj } from "@storybook/react";
//import { ControlsWrapper } from "..";

import { Button, Box, Paper } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ViewListIcon from '@mui/icons-material/ViewList';


import { ControlsWrapper } from "..";

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
				width:"345px",
				display: "flex",
				flexDirection: "column",
				flex: 1
			}}
		>
			<Paper elevation={1}>

			<ControlsWrapper
				title="Home"
				subheader="Subheader string"
				icon={<HomeIcon />}
				expanded={false}
				expand={() => { }}
			></ControlsWrapper>



			<ControlsWrapper
				title="WidgetA"
				subheader="Subheader string"
				icon={<RadioButtonCheckedIcon />}
				expanded={false}
				expand={() => () => { }}
			></ControlsWrapper>

			<ControlsWrapper
				title="About"
				subheader="Subheader string"
				icon={<ViewListIcon />}
				expanded={false}
				expand={() => { }}
			></ControlsWrapper>
			</Paper>
		</Box>

	)
}


export const Single: Story = {
	render: () => <ControlsWrapper
		title="Home"
		subheader="Subheader string"
		icon={<HomeIcon />}
		expanded={false}
		expand={() => { }}
	></ControlsWrapper>,
};


export const List: Story = {
	render: () => <SampleMenu />,
};