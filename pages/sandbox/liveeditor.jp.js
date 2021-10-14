import React from "react"
import { render } from "react-dom"
import { MDXProvider } from "@mdx-js/react"

import Doc from "./temp.mdx"
import CodeBlock from "./codeblock"

const components = {
    code: CodeBlock
}

function getelement() {
  if (typeof document !== 'undefined') {
      //クッキーに値をセット
    document.getElementById("root")
  }
}

render(
    <MDXProvider components={components}>
        <Doc />
    </MDXProvider>,
    getelement()
)