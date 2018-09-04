# Prototype Pattern(原型模式)

## Definition

> Specify the kind of objects to create using a prototypical instance, and create new objects by copying this prototype.

## Tips

> `Object.create`是原型模式的实现

## Example

### Sample-1

```js
class Sheep {
  constructor(name, weight) {
    this.name = name
    this.weight = weight
  }

  clone() {
    return new Sheep(this.name, this.weight)
  }
}
```
