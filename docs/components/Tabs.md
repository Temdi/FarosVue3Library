<script setup>
    import { ref } from 'vue';
    const currentTab = ref('tab1');
</script>

# Tabs

### Preview
<ComponentDemo>
<div>
<faros-tabs
class="flex bg-gray-400 text-white items-center justify-center rounded-t" 
v-model="currentTab"
active-class="bg-gray-500">
<faros-tab val="tab1" class="p-4">Tab1</faros-tab>
<faros-tab val="tab2" class="p-4">Tab2</faros-tab>
</faros-tabs>

<faros-tab-panels 
v-model="currentTab" 
class="border bg-white rounded-b">
<faros-tab-panel val="tab1" class="p-4">
Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris cursus conubia ornare phasellus sem curabitur sagittis amet. Vestibulum mollis molestie venenatis lacinia cubilia potenti porttitor ut. Leo maximus ac, tempus dis non arcu. Mattis nibh congue in dictum euismod scelerisque nunc. Ac iaculis tortor natoque varius eu. Nostra neque sollicitudin eros nostra elit pulvinar gravida suscipit. Ut sodales sem netus potenti eleifend euismod mollis sit. Netus vestibulum feugiat amet ridiculus urna. Donec porttitor quis litora tempor dui parturient velit vel.
</faros-tab-panel>
<faros-tab-panel val="tab2" class="p-4">
Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus fusce fringilla. Odio vel dui. Massa eleifend. Penatibus feugiat adipiscing. Ligula etiam. Augue suscipit nulla. Molestie venenatis. Quam ligula. Risus faucibus pharetra.
</faros-tab-panel>
</faros-tab-panels>
</div>
</ComponentDemo>

### Fichier

```log
FarosTabs.vue
FarosTab.vue
FarosTabPanels.vue
FarosTabPanel.vue
```

### Code

```vue
<script setup>
  const currentTab = ref('tab1');
</script>

<template>
  ...
  <faros-tabs
      class="
        flex items-center justify-center
        bg-gray-400 text-white rounded-t"
      v-model="currentTab"
      active-class="bg-gray-500">
    <faros-tab val="tab1" class="p-4">Tab1</faros-tab>
    <faros-tab val="tab2" class="p-4">Tab2</faros-tab>
  </faros-tabs>

  <faros-tab-panels
      v-model="currentTab"
      class="border bg-white rounded-b">
    <faros-tab-panel val="tab1" class="p-4">
      Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris cursus conubia ornare phasellus sem curabitur sagittis amet. Vestibulum mollis molestie venenatis lacinia cubilia potenti porttitor ut. Leo maximus ac, tempus dis non arcu. Mattis nibh congue in dictum euismod scelerisque nunc. Ac iaculis tortor natoque varius eu. Nostra neque sollicitudin eros nostra elit pulvinar gravida suscipit. Ut sodales sem netus potenti eleifend euismod mollis sit. Netus vestibulum feugiat amet ridiculus urna. Donec porttitor quis litora tempor dui parturient velit vel.
    </faros-tab-panel>
    <faros-tab-panel val="tab2" class="p-4">
      Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus fusce fringilla. Odio vel dui. Massa eleifend. Penatibus feugiat adipiscing. Ligula etiam. Augue suscipit nulla. Molestie venenatis. Quam ligula. Risus faucibus pharetra.
    </faros-tab-panel>
  </faros-tab-panels>
  ...
</template>
```

### Options
```yaml
faros-tabs:
    modelValue: { default: null, type: [String, Number]} }

faros-tab:
    # Identifiant unique du panel
    val: { default: null, type: [String, Number] },

faros-tab-panels:
    modelValue: { default: null, type: [String, Number] },

    # Activation transition smooth entre les panels.
    animate: { default: false, type: Boolean },
        
    # Activation de l'event touch pour changer de panels.
    swipeable: { default: true, type: Boolean },
        
    # Seuil de détection de l'event touch.
    swipeableThreshold: { default: 50, type: Number },

faros-tab-panel:
    # Identifiant unique du panel
    val: { required: true, type: [Number, String]},
```

### Exemples
#### Option : Animate
<ComponentDemo>
<div>
<faros-tabs v-model="currentTab">
<faros-tab val="tab1">Onglet 1</faros-tab>
<faros-tab val="tab2">Onglet 2</faros-tab>
</faros-tabs>

<faros-tab-panels v-model="currentTab" :animate="true">
<faros-tab-panel val="tab1">
Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris cursus conubia ornare phasellus sem curabitur sagittis amet. Vestibulum mollis molestie venenatis lacinia cubilia potenti porttitor ut. Leo maximus ac, tempus dis non arcu. Mattis nibh congue in dictum euismod scelerisque nunc. Ac iaculis tortor natoque varius eu. Nostra neque sollicitudin eros nostra elit pulvinar gravida suscipit. Ut sodales sem netus potenti eleifend euismod mollis sit. Netus vestibulum feugiat amet ridiculus urna. Donec porttitor quis litora tempor dui parturient velit vel.
</faros-tab-panel>
<faros-tab-panel val="tab2">
Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus fusce fringilla. Odio vel dui. Massa eleifend. Penatibus feugiat adipiscing. Ligula etiam. Augue suscipit nulla. Molestie venenatis. Quam ligula. Risus faucibus pharetra.
</faros-tab-panel>
</faros-tab-panels>
</div>
</ComponentDemo>

```vue
<faros-tabs v-model="...">
    <faros-tab val="tab1">...</faros-tab>
    <faros-tab val="tab2">...</faros-tab>
</faros-tabs>

<faros-tab-panels 
    v-model="..." 
    :animate="true" 
>
    <faros-tab-panel val="tab1">...</faros-tab-panel>
    <faros-tab-panel val="tab2">...</faros-tab-panel>
</faros-tab-panels>
```

#### Option : Swipeable
<ComponentDemo>
<div>
<faros-tabs v-model="currentTab">
<faros-tab val="tab3">Onglet 1</faros-tab>
<faros-tab val="tab4">Onglet 2</faros-tab>
</faros-tabs>

<faros-tab-panels v-model="currentTab" :animate="true" :swipeable="true">
<faros-tab-panel val="tab3">
Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris cursus conubia ornare phasellus sem curabitur sagittis amet. Vestibulum mollis molestie venenatis lacinia cubilia potenti porttitor ut. Leo maximus ac, tempus dis non arcu. Mattis nibh congue in dictum euismod scelerisque nunc. Ac iaculis tortor natoque varius eu. Nostra neque sollicitudin eros nostra elit pulvinar gravida suscipit. Ut sodales sem netus potenti eleifend euismod mollis sit. Netus vestibulum feugiat amet ridiculus urna. Donec porttitor quis litora tempor dui parturient velit vel.
</faros-tab-panel>
<faros-tab-panel val="tab4">
Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus fusce fringilla. Odio vel dui. Massa eleifend. Penatibus feugiat adipiscing. Ligula etiam. Augue suscipit nulla. Molestie venenatis. Quam ligula. Risus faucibus pharetra.
</faros-tab-panel>
</faros-tab-panels>
</div>
</ComponentDemo>

```vue
<faros-tabs v-model="...">
    <faros-tab val="tab3">...</faros-tab>
    <faros-tab val="tab4">...</faros-tab>
</faros-tabs>

<faros-tab-panels 
    v-model="..." 
    :animate="true" 
    :swipeable="true"
>
    <faros-tab-panel val="tab3">...</faros-tab-panel>
    <faros-tab-panel val="tab4">...</faros-tab-panel>
</faros-tab-panels>
```

#### Exemple : Avec contenu entre entête et contenu
<ComponentDemo>
<div>
<faros-tabs v-model="currentTab">
<faros-tab val="tab5">Onglet 1</faros-tab>
<faros-tab val="tab6">Onglet 2</faros-tab>
</faros-tabs>

<div class="bg-red-500">Ceci est un contenu entre l'entête et le contenu</div>

<faros-tab-panels v-model="currentTab" :animate="true" :swipeable="true">
<faros-tab-panel val="tab5">
Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris cursus conubia ornare phasellus sem curabitur sagittis amet. Vestibulum mollis molestie venenatis lacinia cubilia potenti porttitor ut. Leo maximus ac, tempus dis non arcu. Mattis nibh congue in dictum euismod scelerisque nunc. Ac iaculis tortor natoque varius eu. Nostra neque sollicitudin eros nostra elit pulvinar gravida suscipit. Ut sodales sem netus potenti eleifend euismod mollis sit. Netus vestibulum feugiat amet ridiculus urna. Donec porttitor quis litora tempor dui parturient velit vel.
</faros-tab-panel>
<faros-tab-panel val="tab6">
Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus fusce fringilla. Odio vel dui. Massa eleifend. Penatibus feugiat adipiscing. Ligula etiam. Augue suscipit nulla. Molestie venenatis. Quam ligula. Risus faucibus pharetra.
</faros-tab-panel>
</faros-tab-panels>
</div>
</ComponentDemo>

```vue
<faros-tabs v-model="...">
    <faros-tab val="tab5">...</faros-tab>
    <faros-tab val="tab6">...</faros-tab>
</faros-tabs>

<div class="bg-red-500">
  Ceci est un contenu entre l'entête et le contenu
</div>

<faros-tab-panels v-model="..." :animate="true" :swipeable="true">
    <faros-tab-panel val="tab5">...</faros-tab-panel>
    <faros-tab-panel val="tab6">...</faros-tab-panel>
</faros-tab-panels>
```