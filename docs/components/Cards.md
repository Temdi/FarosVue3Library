# Cards

<ComponentDemo>
<div class="flex flex-wrap items-start gap-2 my-2">
<FarosCardOne
:id="1"
title="Titre"
created-at="Date"
image="https://via.placeholder.com/500">
Description
</FarosCardOne>

<FarosCardTwo>
    <template #icon>🍕</template>
    Texte 1
    <template #value>Texte 2</template>
</FarosCardTwo>
<FarosCardThree
    class="w-32"
    title="Text 1"
    image="https://via.placeholder.com/200">
</FarosCardThree>
</div>
</ComponentDemo>





## SmallCard

### Preview
<ComponentDemo>
<div class="flex gap-2 my-2">
<FarosCardTwo>
    <template #icon>🍕</template>
    <template #value>50 000€</template>
    Total marge calculée
</FarosCardTwo>

<FarosCardTwo>
    <template #icon>🍕</template>
    <template #value>125</template>
    Nouveau leads
</FarosCardTwo>
</div>
</ComponentDemo>

### Code
```vue
<FarosCardTwo>
    <template #icon>🍕</template>
    <template #value>50 000€</template>
    Total marge calculée
</FarosCardTwo>
```
### Paramètres
Aucun
### Slots
* #icon - _Pictogramme_
* #value - _Texte mis en avant_

## NewsCard

### Preview
<ComponentDemo>
<div class="flex items-start gap-2 my-2">
<FarosCardOne
    class="w-1/2"
    :id="1"
    title="Titre de mon article"
    created-at="01 janvier 2022"
    image="https://via.placeholder.com/500"
>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices enim mauris, non tempus enim sagittis eget. Vestibulum pellentesque nisl et sollicitudin commodo. Maecenas vitae sem venenatis, vehicula turpis venenatis, viverra orci. Quisque ligula nisl, venenatis eget lectus aliquet, finibus pretium leo. Phasellus massa tortor, laoreet eu suscipit ac, volutpat quis nisl. Nullam pretium interdum quam in lacinia. Aliquam pretium placerat tortor nec mollis. Morbi aliquet facilisis erat sit amet aliquam. Duis ut felis vitae lorem blandit mollis eget id dolor. Phasellus ut nisl feugiat, interdum elit vel, laoreet mi. Cras fermentum tincidunt ex vitae fringilla.
</FarosCardOne>

<FarosCardOne 
    class="w-1/2"
    :id="1"
    title="Titre de mon article"
    created-at="01 janvier 2022"
    image="https://via.placeholder.com/500"
>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices enim mauris, non tempus enim sagittis eget. Vestibulum pellentesque nisl et sollicitudin commodo.
</FarosCardOne>
</div>
</ComponentDemo>

### Code
```vue
<FarosCardOne 
    :id="1" 
    title="Titre de mon article"
    created-at="01 janvier 2022"
    image="https://via.placeholder.com/500"
>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices enim mauris, non tempus enim sagittis eget. Vestibulum pellentesque nisl et sollicitudin commodo. Maecenas vitae sem venenatis, vehicula turpis venenatis, viverra orci. Quisque ligula nisl, venenatis eget lectus aliquet, finibus pretium leo. Phasellus massa tortor, laoreet eu suscipit ac, volutpat quis nisl. Nullam pretium interdum quam in lacinia. Aliquam pretium placerat tortor nec mollis. Morbi aliquet facilisis erat sit amet aliquam. Duis ut felis vitae lorem blandit mollis eget id dolor. Phasellus ut nisl feugiat, interdum elit vel, laoreet mi. Cras fermentum tincidunt ex vitae fringilla.
</FarosCardOne>
```

### Paramètres
```vue
id: { 
    type: [String, Number], 
    required: true 
},
title: { 
    type : String, 
    required: true 
},
createdAt: { 
    type: String, 
    required: true 
},
image: { 
    type: String, 
    required: false 
},
```

### Slots
* #default - _Prévisualisation du contenu de l'article_
