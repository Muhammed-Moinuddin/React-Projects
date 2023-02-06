import React from 'react'
import {TextField, Stack} from '@mui/material'
import Markdown from "marked-react";
import { useState } from 'react';
import {marked} from 'marked';
import { Box } from '@mui/system';

export const Previewer = () => {

const [text, setText] = useState(`
# Heading level 1
## Heading level 2
[title](https://www.example.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
1. First item
2. Second item
3. Third item
> blockquote
**bold text**
![alt text](image.jpg)

`)
  return (
    <>
        <Stack direction="column" justifyContent="center" alignItems="center" mt={6}>
            <TextField
              id="editor"
              label="Editor"
              rows={8}
              sx={{width:"500px"}}
              onChange={ e => setText(e.target.value)}
              value={text}
              multiline
            />
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="center" mt={6}>
            {/* <TextField
              id="preview"
              label="Previewer"
              rows={10}
              disabled
              sx={{width:"750px"}}
              multiline
              value={text}
            /> */}
            <Box id="preview">
              <Markdown breaks={true}>{text}</Markdown>
            </Box>
        </Stack>
    </>
  )
}
