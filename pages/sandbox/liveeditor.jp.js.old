import React from "react"
import { render } from "react-dom"
import { MDXProvider } from "@mdx-js/react"

import Doc from "./temp.mdx"
import CodeBlock from "./codeblock"

const components = {
    code: CodeBlock
}

render(
    <MDXProvider components={components}>
        <Doc />
    </MDXProvider>,
    !function (){
        if (typeof document !== 'undefined') {
            //クッキーに値をセット
          return document.getElementById("root")
        }
    }
)