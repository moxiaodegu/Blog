### URLSearchParams

```javascript
const params = new URLSearchParams(window.location.search);
params.get("q"); // 'devpoint'
params.get("page"); // '1'
const entries = params.entries();
Object.fromEntries(entries); // {q: 'devpoint', page: '1'}

// 修改
params.set('foo',1)
window.location.search = `?${params}`
```

### URL

url.searchParams 其实也是URLSearchParams的实例

```javascript
const url = new URL(window.location.href);
const searchParams = url.searchParams;
searchParams.get("q"); // 'devpoint'
searchParams.get("page"); // '1'
searchParams.set('foo',1)
window.location.search = `?${searchParams}`
```

### 纯js

```javascript
function getQueryParams(url) {
    const paramArr = url.slice(url.indexOf("?") + 1).split("&");
    const params = {};
    paramArr.map((param) => {
        const [key, val] = param.split("=");
        params[key] = decodeURIComponent(val);
    });
    return params;
}
```

