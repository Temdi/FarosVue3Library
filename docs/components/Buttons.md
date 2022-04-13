# Buttons

## Size
### Preview

<component-demo>
<div class="flex items-end gap-2 my-2">
<faros-button size="sm">
    Bouton sm
</faros-button>

<faros-button size="base">
    Bouton base
</faros-button>

<faros-button size="lg">
    Bouton lg
</faros-button>
</div>
</component-demo>

## Color
### Preview

<component-demo>
<div class="flex items-end gap-2 my-2">
<faros-button color="primary">
    Primary
</faros-button>

<faros-button color="success">
    Success
</faros-button>

<faros-button color="warning">
    Warning
</faros-button>

<faros-button color="danger">
    Danger
</faros-button>

</div>
</component-demo>

## Link
### Preview

<component-demo>
<div class="flex items-end gap-2 my-2">
<faros-button href="https://www.google.com/">
    Bouton link
</faros-button>
</div>
</component-demo>

## Icon
### Preview
<component-demo>
<div class="flex items-end gap-2 my-2">
<faros-button>
    <template #iconStart>
        🍕
    </template>
    Bouton avec icon devant
</faros-button>

<faros-button>
    <template #iconEnd>
        🍕
    </template>
    Bouton avec icon derrière
</faros-button>
</div>
</component-demo>
