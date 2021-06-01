# h5-form-parser

### 属性
```js
  props: {
    // 表单id
    argFormId: String,
    // 表单数据id
    argDataId: String,
    // 表单数据
    argFormData: {
      type: Object,
      default () {
        return null
      }
    },
    // 是否手动提交
    ifManualSubmit: Boolean
  }
  // event
  submit(form) form: 表单数据
  getFormData() 获取表单数据提交
```

## 备注
- 数据回填优先级
  - argFormData
  - 表单已设置loadApi，则会使用loadApi请求回来的数据
  - 根据argDataId，调用默认接口请求回来的数据
  - 不回填数据
- 提交
  - 表单不提供提交按钮，开发者需要自己调用 this.$refs.xxx.getFormData() 获取表单数据提交
  - 表单提供提交按钮
    - ifManualSubmit 为真，则监听组件 submit 方法，参数是表单数据
    - ifManualSubmit 为假，则优先提交到表单设置的 saveApi 接口，如果未设置 saveApi 则提交至默认接口

### 例子
```js
  // main.js 全局引入
  import H5FormRender from 'h5-form-render'
  Vue.use(H5FormRender)
```

```html
  <template>
    <H5FormRender
      arg-form-id="fd16da5eaf634d869861f6144f8f3c4f"
      :arg-form-data="argFormData"
      :if-manual-submit="true"
      @submit="submit"
      ref="xxx"
    />
  </template>
  <script>
    // 局部引入
    import H5FormRender from 'h5-form-render'
    export default {
      name: 'Example',
      components: {
        H5FormRender
      },
      data () {
        return {
          argFormData: {
            usr: 'zhangsan',
            pwd: '999',
            age: '19',
            sex: 1
          }
        }
      },
      methods: {
        submit (form) {
          console.log('xx ', form)
        },
        getFormData() {
          console.log('xx2 ', this.$refs.xxx.getFormData())
        }
      }
    }
  </script>
```
