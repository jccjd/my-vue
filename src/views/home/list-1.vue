<template>
<div class="detail">
  <div class="markdown-body">
      <VueMarkdown :source='code' ></VueMarkdown>
  </div>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import 'github-markdown-css/github-markdown.css'

const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')

  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}

export default {
    components: {
        VueMarkdown
    },
    data() {
        return{
    
       code:' # hello \n```python \n import hello  \n ``` \n **do it**\n butonfsd', // 要解析的markdown语法的内容
    }
  },
 mounted () {
        highlightCode()
    },

    updated () {
        highlightCode()
    }
    
  }
</script>