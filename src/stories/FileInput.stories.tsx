import type { Meta, StoryObj } from "@storybook/react";
import { Button, Box, Paper } from "@mui/material";
import { FileInput } from '..'


const meta: Meta<typeof FileInput> = {
	component: FileInput,
};

export default meta;
type Story = StoryObj<typeof FileInput>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

const SampleMenu = () => {

	return (

		<Box
			sx={{
				width: "300px",
			}}
		>
			<FileInput  onChange={(data)=>console.log("[FileInput.OnChange]", data)}
				
				buttonProps={{
					variant:"outlined",
					color:"primary"
				}}
				/>
			
		</Box>

	)
}


export const Primary: Story = {
	render: () =>

		<Box
		sx={{
			width: "300px",
		}}
	>
		<FileInput  
			onChange={(data)=>console.log("[FileInput.OnChange]", data)}   
			buttonProps={{
				variant:"contained",
				color:"secondary"
			}}
		/>
		
	</Box>
};


export const Secondary: Story = {
	render: () => <SampleMenu />,
};