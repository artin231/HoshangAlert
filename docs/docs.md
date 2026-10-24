# the document of HooshangAlert :

## first if you don't nonw to how to download hooshangAlert and import it see the main README file : <a href="https://github.com/artin231/HoshangAlert/blob/main/README.md">click me!</a>

## when you finished all of it now you can read this page

## for creating a alert we must use : hooshang.AlHoosh()

```
hooshang.AlHoosh({theme:"dark",title:'succses',message:"it was succsesful",icon:hooshang.Icons.succses,type:"button",color_icon:'#17FD32'})
```

# what the arguments do?:

## theme : the theme of the alert we have to themes : light and dark and custom

---

## title : the title of the alert 

---

## message : if you want to have a message with your alert you can use it

---

## icon : the icon of your alert we have a list of icons in : hooshang.icons and if you want the succses one you can use the :

```
hooshang.icons.succses
```
## if you want to sea all of the icons :

```
console.log(hooshang.icons);
```
---

## type : we have to types one is button that you must click the button to the alert Disappear we also have a time type that you must say the time and when the time finishes it will Disappear

---

## color_icon : the colot of the icon

---

## buttonMessage : the message of the button (it works when the type is button);

---

## time : the time of when it Disappear (it works when the type is time

---

## using the custom theme :


```

hooshang.AlHoosh({theme:"custom",
	title:'succses',
	message:"it was succsesful",
	icon:hooshang.Icons.succses,
	type:"button",
	color_icon:'green',
	buttonMessage:'ali',
	bg_color:'black',
	text_color:'green',
	border_button_color:'green'})

```

### bg_color : the background of the alert and you can use it when th theme is custom

---

### text_color : the color of the text that is the title of the alert and you can use it when the theme is custom

---

### border_button_color : the color of the border of the button in the alert and you can use it when the theme is custom

---

## thanks for reading the docment 
