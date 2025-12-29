# OutputParser 简介

## OutputParser 的价值

我们可以用一个例子快速说明 OutputParser 的价值。我们简单调用一个 LLM 请求：

```typescript
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

const model = new ChatOpenAI();

await model.invoke([new HumanMessage("Tell me a joke")]);
```

这个输出的结果是：

```
AIMessage {
  lc_serializable: true,
  lc_kwargs: {
    content: "Why don't scientists trust atoms?\n\nBecause they make up everything!",
    additional_kwargs: { function_call: undefined, tool_calls: undefined },
    response_metadata: {}
  },
  lc_namespace: [ "langchain_core", "messages" ],
  content: "Why don't scientists trust atoms?\n\nBecause they make up everything!",
  name: undefined,
  additional_kwargs: { function_call: undefined, tool_calls: undefined },
  response_metadata: {
    tokenUsage: { completionTokens: 13, promptTokens: 11, totalTokens: 24 },
    finish_reason: "stop"
  }
}
```

这显然是人类不可读的，我们没办法把这样的对象发送给用户。虽然这个结果是代码可以处理的，但我们每次都要写这样的 dirty 代码去提取其中我们需要的 `content` 或者未来需要的其他属性会很繁琐。而且未来可能会使用多种模型来替代 OpenAI 的模型，我们每次都适配不同的模型的 API 输出去提取需要的内容，也会很麻烦。

所以这就是 OutputParser 的意义之一：LangChain 封装了一系列的解析大模型 API 返回结果的工具，让我们方便使用。当然，并不限于解析大模型的输出结果，也能通过 Parser 去指定 LLM 返回的格式，让我们逐步来学习。
