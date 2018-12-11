# Stork-Editor
The plugin is build for move label text to input value with blcok form, like stork ( 送值鳥 )

## Demo
![](assets/demo.gif)

## Dependence

JQuery 3.3.1
```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
```

## Usage

1. include js file
```html
<script type="text/javascript" src="storkeditor.js"></script>
```
2. you need set html dom, use class edit-area to limit stork activity range
```html
<div class="edit-area">
</div>
```

3. give data-editor attritube to trigger, stork will search your input container by it 
```html
<div class="edit-area">
    <button id="edit" data-editor="#editor"> edit </button>
</div>
<div id="editor">
</div>
```

4. then stork move value , text -> input value, use data-editor-for to specify input
```html
<div class="edit-area">
    <label data-editor-for="test">hello world</label>
</div>
<div id="editor">
    <input type="text" name="test">
    <button id="save">save<button>
</div>
```

5. create Stork when you need, it will find parents which have "edit-area" class
```js
$("#edit").click(function(){
    strok = $(this).stork({})
})
```
or you want use custom class
```js
$("#edit").click(function(){
    strok = $(this).stork({ area : "your-class" })
})
```

6. move text to input value 
```js
var stork

$("#edit").click(function(){
    strok = $(this).stork({ area : "your-class" })
    stork.TextToInput()
})
```

7. move input value to text
```js
$("#save").click(function(){
    stork.InputToText()
})
```


## Config

if you have array value or custom class, you can set array's format with config 

 config     | description                                           | default
:-----------|:------------------------------------------------------|:-------
 area       | stork activity area ( trigger parents's css class )   | edit-area
 splitBy    | array value split by                                  | ,
 startWith  | array start with                                      | [
 endWith    | array end with                                        | ]
 
```js
strok = $("something").stork({ 
    area : "edit-area",  
    splitBy : ",",       
    startWith : "[",     
    endWith : "]"       
})
```

<a href="https://github.com/pkpk520/Stork-Editor/tree/master/example">Example</a>
