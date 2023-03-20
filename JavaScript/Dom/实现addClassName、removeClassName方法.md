
### classlist

不考虑ie浏览器

```javascript
let div = document.getElementById('div1');
div.classList.add("class2");
div.classList.remove("class1");
```

### setAttribute

```javascript
const divDoc = document.getElementById('div1')
let classVal = divDoc.getAttribute('class')

// 删除class1
classVal = classVal.replace('class1', '')
divDoc.setAttribute('class', classVal)

// 添加class2
classVal = classVal.concat(' class1')
divDoc.setAttribute('class', classVal)

// 用class2代替class1
classVal = classVal.replace('class1', 'class2')
divDoc.setAttribute('class', classVal)

```

## js原生实现

```javascript
export function addClass(elem, className) {
  if (!className) return;

  const els = Array.isArray(elem) ? elem : [elem];

  els.forEach((el) => {
    if (el.classList) {
      el.classList.add(className.split(' '));
    } else {
      el.className += ` ${className}`;
    }
  });
}

export function removeClass(elem, className) {
  if (!className) return;

  const els = Array.isArray(elem) ? elem : [elem];
  els.forEach((el) => {
    if (el.classList) {
      el.classList.remove(className.split(' '));
    } else {
      el.className = el.className.replace(new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
    }
  });
}
```