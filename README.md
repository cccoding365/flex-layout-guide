# <center> Flex Layout Guide </center>

Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces. This project explains all the usage.

## Ⅰ.Container properties

1. flex-direction
```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
2. justify-content
```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}
```
3. align-items
```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}
```
4. flex-wrap
```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
5. align-content
```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}
```

## Ⅱ.Item properties

1. order
```css
.item {
  order: 5; /* default is 0 */
}
```
2. flex-grow
```css
.item {
  flex-grow: 4; /* default 0 */
}
```
3. flex-basis
```css
.item {
  flex-basis:  | auto; /* default auto */
}
```
4. align-self
```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```