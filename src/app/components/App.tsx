import React from 'react';
import { ExportScreen } from 'app/screens/ExportScreen';
import { useMuiMode } from 'app/hooks/useMuiMode';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { ImportScreen } from 'app/screens/ImportScreen';
import Box from '@mui/joy/Box';
import { PLUGIN_ID } from 'declarations/plugin';
import { FigmaMessage, MessageTypes, RequestSelectedPainStylesMessage } from 'declarations/messages';

function requestSelectedPaintStyles() {
  const message: FigmaMessage<RequestSelectedPainStylesMessage> = {
    pluginId: PLUGIN_ID,
    pluginMessage: {
      type: MessageTypes.REQUEST_SELECTED_PAINT_STYLES,
    },
  };

  parent.postMessage(message, 'https://www.figma.com');
}

function App() {
  useMuiMode();

  function onTabChange() {
    requestSelectedPaintStyles();
  }

  return (
    <Box
      sx={{
        background: 'none',
        padding: '8px',
      }}
    >
      <Box marginBottom={1}>
        <ExportScreen />
      </Box>
    </Box>
  );
}

export default App;
