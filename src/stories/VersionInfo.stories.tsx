import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import {VersionInfo} from '..';

const meta: Meta<typeof VersionInfo> = {
  component: VersionInfo,
};

export default meta;
type Story = StoryObj<typeof VersionInfo>;

// Mock the fetch request in Storybook
const mockVersionInfo = {
  sha: "123456abcdef",
  tag: "1.0.0",
  date: "2024-09-01"
};

export const Single: Story = {
  render: () => {
    // Mock fetch globally
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockVersionInfo),
      });

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
        <VersionInfo />
      </Box>
    );
  },
};
