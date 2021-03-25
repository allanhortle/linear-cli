import React from 'react';
import {Box, Text} from 'ink';

export default function KeyValueTable(props) {
    const data = props.data.filter(Boolean);
    const width = Math.max(...data.map(([key]) => key.length));
    return (
        <Box flexDirection="column">
            {data.map(([key, value]) => (
                <Box key={key}>
                    <Box width={width + 1} marginRight={1}>
                        <Text color="grey">{key}</Text>
                    </Box>
                    {typeof value === 'string' ? <Text>{value}</Text> : value}
                </Box>
            ))}
        </Box>
    );
}
