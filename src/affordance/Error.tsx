import React from 'react';
import {Text, Box} from 'ink';

type Props = {
    error: Error & {variables?: any}
};
export default function Error({error}: Props) {
    return <Box flexDirection="column" borderStyle="single" borderColor="red" paddingY={1} paddingX={2}>
        <Text bold color="red">Error</Text>
        <Box>
            <Text>{error.message}</Text>
        </Box>
    </Box>;
}
